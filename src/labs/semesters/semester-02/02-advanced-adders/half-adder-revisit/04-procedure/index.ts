import { step as s01 } from "./01-build-the-half-adder-with-bypass-capacitors";
import { step as s02 } from "./02-configure-oscilloscope-and-apply-test-signal";
import { step as s03 } from "./03-measure-sum-propagation-delay-at-5-v";
import { step as s04 } from "./04-measure-carry-propagation-delay-at-5-v";
import { step as s05 } from "./05-repeat-at-reduced-supply-voltage-3-3-v";
import { step as s06 } from "./06-assess-fan-out-effect-on-delay";
import { step as s07 } from "./07-calculate-maximum-operating-frequency";

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
