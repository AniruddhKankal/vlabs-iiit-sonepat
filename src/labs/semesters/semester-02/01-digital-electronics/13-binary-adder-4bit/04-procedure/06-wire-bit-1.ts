import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the full adder for bit 1.",
  body: "Bit 1: connect $A_1$ (column 4, red) and $B_1$ (column 5, blue) to gate 2 of the first XOR and AND ICs. The carry-in of this stage is $C_1$ from OR gate 1 (yellow wires, no input tie point), which feeds the second XOR and second AND gates. Complete the $P_1$, $G_1$, $T_1$ wires into OR gate 2 to produce $C_2$.",
  show: ["bb", "psu", "xor_p", "xor_s", "and_g", "and_p", "or_c", "r_cout", "r_s3", "r_s2", "r_s1", "r_s0", "led_cout", "led_s3", "led_s2", "led_s1", "led_s0", "w_a_xp0", "w_a_ag0", "w_b_xp0", "w_b_ag0", "w_p_xs0", "w_p_ap0", "w_c_xs0", "w_c_ap0", "w_g_oc0", "w_t_oc0", "w_a_xp1", "w_a_ag1", "w_b_xp1", "w_b_ag1", "w_p_xs1", "w_p_ap1", "w_c_xs1", "w_c_ap1", "w_g_oc1", "w_t_oc1"],
};
