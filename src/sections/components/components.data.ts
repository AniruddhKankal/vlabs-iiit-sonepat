import { type EceComponentKind } from "@/labs/previews/EceComponentViewer";
import { ComponentsDiscription } from "./components.discription";

export type ComponentData = {
  slug: string;
  name: string;
  kind: EceComponentKind;

  /** Short one-line explanation shown near the component name. */
  tagline: string;

  /** Main educational explanation. */
  description: string[];

  /** Simple mental model that helps students understand the component. */
  intuition: string;

  /** Common situations where the component is used. */
  usedFor: string[];

  /** Important specifications shown in the component information panel. */
  specs: { label: string; value: string }[];

  /** Practical advice for using the component in a lab. */
  tips: string[];

  /** Common mistakes students should avoid. */
  commonMistakes: string[];
};

export const COMPONENTS_DATA = {
  breadboard: ComponentsDiscription.breadboard as ComponentData,

  diode: ComponentsDiscription.diode as ComponentData,

  zener: ComponentsDiscription.zener as ComponentData,

  resistor: ComponentsDiscription.resistor as ComponentData,

  "dip-switch": ComponentsDiscription["dip-switch"] as ComponentData,

  bjt: ComponentsDiscription.bjt as ComponentData,

  mosfet: ComponentsDiscription.mosfet as ComponentData,

  "op-amp": ComponentsDiscription["op-amp"] as ComponentData,

  "seven-segment": ComponentsDiscription["seven-segment"] as ComponentData,

  "function-generator": ComponentsDiscription[
    "function-generator"
  ] as ComponentData,

  transformer: ComponentsDiscription.transformer as ComponentData,

  capacitor: ComponentsDiscription.capacitor as ComponentData,

  led: ComponentsDiscription.led as ComponentData,

  potentiometer: ComponentsDiscription.potentiometer as ComponentData,

  ammeter: ComponentsDiscription.ammeter as ComponentData,

  voltmeter: ComponentsDiscription.voltmeter as ComponentData,

  "logic-analyser": ComponentsDiscription["logic-analyser"] as ComponentData,

  "push-button": ComponentsDiscription["push-button"] as ComponentData,

  switch: ComponentsDiscription.switch as ComponentData,

  battery: ComponentsDiscription.battery as ComponentData,

  oscilloscope: ComponentsDiscription.oscilloscope as ComponentData,

  "dc-jack": ComponentsDiscription["dc-jack"] as ComponentData,

  "dc-power-supply": ComponentsDiscription["dc-power-supply"] as ComponentData,

  "ic-meter": ComponentsDiscription["ic-meter"] as ComponentData,

  "mcu-trainer": ComponentsDiscription["mcu-trainer"] as ComponentData,

  "xor-gate": ComponentsDiscription["xor-gate"] as ComponentData,

  "and-gate": ComponentsDiscription["and-gate"] as ComponentData,
};
