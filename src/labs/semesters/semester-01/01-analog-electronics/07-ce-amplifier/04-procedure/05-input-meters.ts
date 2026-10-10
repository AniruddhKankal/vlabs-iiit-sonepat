import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Add the base ammeter and V_BE voltmeter",
  body: "Connect the microammeter **in series** between $R_B$ and the base to read $I_B$. Connect the voltmeter **across** the base and emitter to read $V_{BE}$.",
  show: ["bb", "q1", "w_e_gnd", "rb", "psu_vbb", "am_b", "vm_be"],
  highlight: "am_b",
};
