import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Measure the VDB Q-point and compare.",
  body: "Power on (12 V). Reconnect DMM to Phase B collector path. Record $I_C$ and $V_{CE}$. Compare LED brightness: Phase A (fixed bias) LED is much brighter due to higher $I_C$. To verify stability: replace the BC547 with a second unit of different $\\beta$. Observe that the VDB Q-point barely changes while the fixed-bias Q-point shifts dramatically.",
  show: [
    "bb",
    "psu",
    "w_vcc_rb",
    "dmm",
    "w_amm_in",
    "w_amm_out",
    "r_b",
    "r_c1",
    "led_a",
    "w_vcc_rc1",
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
  activeInputs: {
    Vcc: 1,
  },
  supplyVoltage: 12,
  readings: {
    psu: "12.00 V",
    dmm: "IC = 0.39 mA",
  },
  ledBrightness: {
    led_a: 0.65,
    led_b: 0.18,
  },
};
