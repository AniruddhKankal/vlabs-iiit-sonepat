import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboards and supply",
  body: "Place both breadboards for the master and slave stages. Connect the regulated +5 V supply to the top VCC and GND rails on the first board, and link the corresponding rails to the second board. Keep the supply switched off while wiring.",
  show: ["bb", "psu", "bb2"],
  highlight: "psu",
};
