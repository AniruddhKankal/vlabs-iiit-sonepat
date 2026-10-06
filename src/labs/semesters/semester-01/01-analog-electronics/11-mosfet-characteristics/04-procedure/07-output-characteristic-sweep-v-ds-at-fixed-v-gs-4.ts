import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Output characteristic: sweep V_DS at fixed V_GS = 4 V.",
  body: "Fix $V_{GS} = 4\\,\\text{V}$ (well above $V_{TH}$). Sweep $V_{DD}$ from 0 to 10 V in 0.5 V steps. Calculate $V_{DS} = V_{DD} - I_D \\times R_D$ at each step. Observe: linear region ($V_{DS} < 2\\,\\text{V}$), then saturation ($I_D$ nearly constant). The LED brightness stops increasing once saturation is entered.",
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
    Vds: 1,
  },
  supplyVoltage: 8,
  readings: {
    psu: "8.00 V",
    dmm: "ID = 6.40 mA",
  },
  ledBrightness: {
    led_drain: 0.6,
  },
};
