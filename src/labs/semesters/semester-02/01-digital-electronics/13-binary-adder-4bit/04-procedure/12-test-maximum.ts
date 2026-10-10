import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test: 1111 + 1111 + Cin = 1 (15 + 15 + 1).",
  body: "Set $A = 1111$, $B = 1111$ and $C_{in} = 1$. This is the largest possible result: $S_3 S_2 S_1 S_0 = 1111$ and $C_{out} = 1$, i.e. $11111_2 = 31$.",
  show: ["bb", "psu", "xor_p", "xor_s", "and_g", "and_p", "or_c", "r_cout", "r_s3", "r_s2", "r_s1", "r_s0", "led_cout", "led_s3", "led_s2", "led_s1", "led_s0", "w_a_xp0", "w_a_ag0", "w_b_xp0", "w_b_ag0", "w_p_xs0", "w_p_ap0", "w_c_xs0", "w_c_ap0", "w_g_oc0", "w_t_oc0", "w_a_xp1", "w_a_ag1", "w_b_xp1", "w_b_ag1", "w_p_xs1", "w_p_ap1", "w_c_xs1", "w_c_ap1", "w_g_oc1", "w_t_oc1", "w_a_xp2", "w_a_ag2", "w_b_xp2", "w_b_ag2", "w_p_xs2", "w_p_ap2", "w_c_xs2", "w_c_ap2", "w_g_oc2", "w_t_oc2", "w_a_xp3", "w_a_ag3", "w_b_xp3", "w_b_ag3", "w_p_xs3", "w_p_ap3", "w_c_xs3", "w_c_ap3", "w_g_oc3", "w_t_oc3", "w_s0_r", "w_r0_led", "w_s1_r", "w_r1_led", "w_s2_r", "w_r2_led", "w_s3_r", "w_r3_led", "w_cout_r", "w_r_cout_led", "w_gnd_s0", "w_gnd_s1", "w_gnd_s2", "w_gnd_s3", "w_gnd_cout"],
  highlight: "led_cout",
  activeInputs: { A3: 1, A2: 1, A1: 1, A0: 1, B3: 1, B2: 1, B1: 1, B0: 1, Cin: 1 },
  supplyVoltage: 5.0,
};
