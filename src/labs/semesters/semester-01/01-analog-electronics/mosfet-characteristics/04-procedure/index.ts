import { step as s01 } from "./01-place-the-breadboard-and-connect-the-dc-power-su";
import { step as s02 } from "./02-connect-the-dmm-as-a-drain-path-ammeter";
import { step as s03 } from "./03-insert-drain-resistor-r-d-1-k-and-wire-to-led";
import { step as s04 } from "./04-insert-gate-bias-network-r-pot-10-k";
import { step as s05 } from "./05-insert-the-output-indicator-led-yellow-and-final";
import { step as s06 } from "./06-transfer-characteristic-sweep-v-gs-at-fixed-v-ds";
import { step as s07 } from "./07-output-characteristic-sweep-v-ds-at-fixed-v-gs-4";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
];
