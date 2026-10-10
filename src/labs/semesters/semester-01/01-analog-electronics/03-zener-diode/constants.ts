import {
  holePos,
  railPos,
  ledAnode,
  ledCathode,
  resistorP1,
  resistorP2,
  TOP_Y,
} from "@/labs/marker-helpers";

// ── Zener diode circuit layout on the breadboard ───────────────────────────
//   r1: resistor at col 5, row c  (p1=col5, p2=col8)
//   zener: LED at col 10, row c  (anode=col10, cathode=col11)
//   vcc rail tap at col 5 (top red rail)
//   gnd rail tap at col 11 (top blue rail)

export const R1_COL = 5;
export const R1_ROW = "c";
export const ZD_COL = 10;
export const ZD_ROW = "c";
export const HOVER = 0.55;

export const M = {
  r1_p1: [
    resistorP1(R1_COL, R1_ROW)[0],
    TOP_Y + HOVER,
    resistorP1(R1_COL, R1_ROW)[2],
  ] as [number, number, number],
  r1_p2: [
    resistorP2(R1_COL, R1_ROW)[0],
    TOP_Y + HOVER,
    resistorP2(R1_COL, R1_ROW)[2],
  ] as [number, number, number],
  zd_anode: [
    ledAnode(ZD_COL, ZD_ROW)[0],
    TOP_Y + HOVER,
    ledAnode(ZD_COL, ZD_ROW)[2],
  ] as [number, number, number],
  zd_cathode: [
    ledCathode(ZD_COL, ZD_ROW)[0],
    TOP_Y + HOVER,
    ledCathode(ZD_COL, ZD_ROW)[2],
  ] as [number, number, number],
  vcc_rail: [
    railPos(R1_COL, "vcc_top")[0],
    TOP_Y + HOVER,
    railPos(R1_COL, "vcc_top")[2],
  ] as [number, number, number],
  gnd_rail: [
    railPos(ZD_COL + 1, "gnd_top")[0],
    TOP_Y + HOVER,
    railPos(ZD_COL + 1, "gnd_top")[2],
  ] as [number, number, number],
  vm_pos: [holePos(ZD_COL, "a")[0], TOP_Y + HOVER, holePos(ZD_COL, "a")[2]] as [
    number,
    number,
    number,
  ],
  vm_neg: [
    holePos(ZD_COL + 1, "a")[0],
    TOP_Y + HOVER,
    holePos(ZD_COL + 1, "a")[2],
  ] as [number, number, number],
};

export const DOWN: [number, number, number] = [0, -1, 0];
