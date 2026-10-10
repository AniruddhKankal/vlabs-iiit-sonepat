import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Verify XNOR using XOR + NOT",
  body: "To realise XNOR, cascade the XOR output (pin 3 of 74HC86) into the input of an unused NOT gate (pin 1 of 74HC04). Take the NOT output (pin 2 of 74HC04) and connect it to the LED indicator. Test all four input combinations. The result should be the complement of the XOR output: LED ON only for inputs (0,0) and (1,1). This demonstrates gate cascading and the derivation of complex functions from basic gates.",
  show: ["bb", "and1", "or1", "not1", "nand1", "nor1", "xor1", "xnor1"],
  highlight: "xor1",
};
