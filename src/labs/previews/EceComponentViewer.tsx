"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

import {
  buildBreadboardStandalone,
  buildDip14Standalone,
  buildLedStandalone,
  buildResistorStandalone,
  buildWireStandalone,
  buildCapacitorStandalone,
  buildPotentiometerStandalone,
  buildPushButtonStandalone,
  buildSwitchStandalone,
  buildBatteryStandalone,
  buildDcJackStandalone,
  buildIcMeterStandalone,
  buildDcPowerSupplyStandalone,
  buildMcuTrainerStandalone,
} from "@/components";

// ── Component kind type ───────────────────────────────────────────────────
export type EceComponentKind =
  | "breadboard"
  | "led"
  | "resistor"
  | "capacitor"
  | "potentiometer"
  | "push-button"
  | "switch"
  | "battery"
  | "dc-jack"
  | "xor-gate"
  | "and-gate"
  | "ic-meter"
  | "dc-power-supply"
  | "mcu-trainer";

// ── Builder dispatch ──────────────────────────────────────────────────────
function buildStandalone(kind: EceComponentKind): THREE.Group {
  switch (kind) {
    case "breadboard":
      return buildBreadboardStandalone();
    case "led":
      return buildLedStandalone("green");
    case "resistor":
      return buildResistorStandalone(330);
    case "capacitor":
      return buildCapacitorStandalone(100);
    case "potentiometer":
      return buildPotentiometerStandalone();
    case "push-button":
      return buildPushButtonStandalone();
    case "switch":
      return buildSwitchStandalone();
    case "battery":
      return buildBatteryStandalone();
    case "dc-jack":
      return buildDcJackStandalone();
    case "xor-gate":
      return buildDip14Standalone("XOR");
    case "and-gate":
      return buildDip14Standalone("AND");
    case "ic-meter":
      return buildIcMeterStandalone();
    case "dc-power-supply":
      return buildDcPowerSupplyStandalone();
    case "mcu-trainer":
      return buildMcuTrainerStandalone();
  }
}

// ── Camera presets ────────────────────────────────────────────────────────
const CAM: Record<EceComponentKind, [number, number, number]> = {
  breadboard: [1.5, 2.2, 2.5],
  led: [1.2, 1.6, 2.0],
  resistor: [1.5, 1.2, 1.8],
  capacitor: [1.2, 1.8, 2.2],
  potentiometer: [1.4, 2.0, 2.2],
  "push-button": [1.2, 1.6, 2.0],
  switch: [1.4, 1.6, 2.2],
  battery: [1.4, 2.4, 2.8],
  "dc-jack": [1.4, 1.6, 2.2],
  "xor-gate": [1.6, 1.8, 2.4],
  "and-gate": [1.6, 1.8, 2.4],
  "ic-meter": [1.4, 0.6, 3.2],
  "dc-power-supply": [2.2, 2.2, 3.2],
  "mcu-trainer": [2.0, 2.4, 3.2],
};

// Initial X tilt — upright components get a front-facing angle
const TILT: Partial<Record<EceComponentKind, number>> = {
  "ic-meter": 0.1,
  "dc-power-supply": 0.1,
};

// Zoom bounds — a dolly on the preset camera position, so the perspective of the
// product shot is preserved rather than flattened the way an fov change would.
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_PER_DELTA = 0.0025; // fraction of zoom per unit of deltaY
const MAX_ZOOM_STEP = 0.12; // cap per event, so one mouse-wheel notch is one notch

// ── Component ─────────────────────────────────────────────────────────────
type Props = {
  kind: EceComponentKind;
  background?: string;
  autoRotate?: boolean;
  /** Enable scroll / pinch zoom. Opt-in: while on, the canvas swallows page scroll. */
  zoom?: boolean;
};

export function EceComponentViewer({
  kind,
  background = "#f7f6f3",
  autoRotate = true,
  zoom: zoomEnabled = false,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(background, 1);

    const scene = new THREE.Scene();
    const [cx, cy, cz] = CAM[kind];
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(cx, cy, cz);
    camera.lookAt(0, 0, 0);
    const restPosition = camera.position.clone();
    let zoom = 1;
    const target = new THREE.Vector3(0, 0, 0);

    const pivot = new THREE.Group();
    pivot.rotation.x = TILT[kind] ?? 0.3;
    scene.add(pivot);
    pivot.add(buildStandalone(kind));

    function resize() {
      const w = canvas.clientWidth,
        h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let dragAction: "rotate" | "pan" | null = null,
      lx = 0,
      ly = 0,
      ry = 0,
      rx = TILT[kind] ?? 0.3;
    const onDown = (e: PointerEvent) => {
      dragAction = e.button === 2 ? "pan" : "rotate";
      lx = e.clientX;
      ly = e.clientY;
    };
    const onUp = () => {
      dragAction = null;
    };
    const onMove = (e: PointerEvent) => {
      if (!dragAction) return;
      if (dragAction === "rotate") {
        ry += (e.clientX - lx) * 0.012;
        rx += (e.clientY - ly) * 0.007;
        rx = Math.max(-0.8, Math.min(1.4, rx));
      } else if (dragAction === "pan") {
        const dx = -(e.clientX - lx) * 0.005 / zoom;
        const dy = (e.clientY - ly) * 0.005 / zoom;
        
        const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
        const up = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion);
        
        target.addScaledVector(right, dx);
        target.addScaledVector(up, dy);
        
        applyZoom(zoom);
      }
      lx = e.clientX;
      ly = e.clientY;
    };
    const onContextMenu = (e: Event) => {
      e.preventDefault();
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("contextmenu", onContextMenu);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointermove", onMove);

    // Scroll / pinch zoom. The canvas sets touch-action:none, which is what stops the
    // browser from turning a trackpad pinch into a page zoom — so both a two-finger
    // scroll and a pinch land here as wheel events and have to be handled by hand.
    const applyZoom = (next: number) => {
      zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
      camera.position.copy(restPosition).multiplyScalar(1 / zoom).add(target);
      camera.lookAt(target);
    };
    const onWheel = (e: WheelEvent) => {
      if (!zoomEnabled) return;
      e.preventDefault();
      const step = Math.min(MAX_ZOOM_STEP, ZOOM_PER_DELTA * Math.abs(e.deltaY));
      applyZoom(zoom * (e.deltaY > 0 ? 1 - step : 1 + step));
    };
    const onDblClick = () => {
      target.set(0, 0, 0);
      applyZoom(1);
      ry = 0;
      rx = TILT[kind] ?? 0.3;
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("dblclick", onDblClick);

    let raf: number;
    function loop() {
      raf = requestAnimationFrame(loop);
      if (!dragAction && autoRotate) ry += 0.005;
      pivot.rotation.y = ry;
      pivot.rotation.x = rx;
      renderer.render(scene, camera);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("contextmenu", onContextMenu);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("dblclick", onDblClick);
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind, background, zoomEnabled]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        cursor: "grab",
        touchAction: "none",
      }}
    />
  );
}
