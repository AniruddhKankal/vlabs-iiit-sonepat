import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the output wires and ground returns.",
  body: "Green wire: XOR output (column 9, row e) → left end of Sum resistor (column 22, row c). Orange wire: AND output (column 18, row e) → left end of Carry resistor (column 26, row c). Black wire: green LED cathode → GND rail. Black wire: yellow LED cathode → GND rail. Red wire: VCC pin of both ICs (pins 14) → VCC rail. Black wire: GND pins (pins 7) → GND rail.",
  show: [
    "bb",
    "xor1",
    "and1",
    "w_a_xor",
    "w_a_and",
    "w_b_xor",
    "w_b_and",
    "r_sum",
    "r_carry",
    "led_sum",
    "led_carry",
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
