import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Determine fan-out limit for 74HC output.",
  body: "74HC output drives 74HC inputs. Each 74HC input draws max 1 μA (CMOS). 74HC output can source/sink 4 mA. Fan-out = 4 mA / 1 μA = 4000 (current-limited). In practice, capacitive loading limits AC fan-out to ~50 in most designs. For long buses, bus drivers (74HC244/245) are used to buffer the signal.",
  show: [],
};
