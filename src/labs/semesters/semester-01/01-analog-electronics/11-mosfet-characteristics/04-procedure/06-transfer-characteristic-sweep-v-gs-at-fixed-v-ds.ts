import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Transfer characteristic: sweep V_GS at fixed V_DS = 5 V.",
  body: "Set $V_{DD} = 5\\,\\text{V}$. Slowly increase $V_{GS}$ from 0 V to 5 V in 0.5 V steps. Record $I_D$ at each step. Expect $I_D \\approx 0$ for $V_{GS} < 2\\,\\text{V}$, then rising as $(V_{GS} - 2)^2$. Extract $V_{TH}$ by plotting $\\sqrt{I_D}$ vs $V_{GS}$ and extrapolating to the x-axis.",
  show: [
    "bb",
    "psu",
    "dmm",
    "w_amm_in",
    "w_amm_out",
    "r_d",
    "w_rd_led",
    "r_pot",
    "w_vcc_rpot",
    "w_rpot_gnd",
    "w_gate",
    "led_drain",
    "w_led_gnd",
  ],
  activeInputs: {
    Vgs: 1,
  },
  supplyVoltage: 5,
  readings: {
    psu: "5.00 V",
    dmm: "ID = 3.20 mA",
  },
  ledBrightness: {
    led_drain: 0.4,
  },
};
