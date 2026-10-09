import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Measure Voltage Divider Bias Q-point and compare stability.",
  body:
    "Measure all DC branch voltages with the multimeter DMM across the Voltage Divider Bias circuit. " +
    "Recorded values: base voltage $V_B \\approx 1.09\\text{ V}$, emitter voltage $V_E \\approx 0.39\\text{ V}$, " +
    "emitter/collector current $I_C \\approx I_E = \\frac{V_E}{R_E} \\approx 0.39\\text{ mA}$, and collector-emitter voltage " +
    "$V_{CE} = V_{CC} - I_C(R_C + R_E) \\approx 9.78\\text{ V}$. " +
    "The transistor is comfortably centered in the linear active region. " +
    "Substituting different transistors with beta values between 150 and 450 results in less than 4% change in $I_C$, " +
    "proving the superior stability factor ($S \\approx 1$) of voltage divider bias.",
  show: [
    "bb",
    "psu",
    "dmm",
    "r_b",
    "r_c1",
    "led_a",
    "w_vcc_rb",
    "w_vcc_rc1",
    "w_amm_in",
    "w_amm_out",
    "w_rc1_leda",
    "w_leda_gnd",
    "r1",
    "r2",
    "r_c2",
    "r_e",
    "led_b",
    "w_vcc_r1",
    "w_r2_gnd",
    "w_vcc_rc2",
    "w_re_gnd",
    "w_rc2_ledb",
    "w_ledb_gnd",
  ],
  readings: { dmm: "0.39 mA, 9.78 V" },
  highlight: "dmm",
};
