import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { codeLab } from "./03-code-lab";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const exp8085BcdBinaryConvExperiment: ExperimentDefinition = {
  id: "8085-bcd-binary-conv",
  title: "BCD to Binary and Binary to BCD Conversion",
  description:
    "BCD (Binary Coded Decimal) represents each decimal digit as a 4-bit nibble. Packed BCD stores two digits per byte: the upper nibble is the tens digit and the lower nibble is the units digit. For examp",
  labType: "code",
  components: [],
  sections: [aim, theory, codeLab, observations, conclusion],
  procedureSteps,
};

export const Exp8085BcdBinaryConvCircuit = buildCircuit(
  exp8085BcdBinaryConvExperiment,
);
export const Exp8085BcdBinaryConvContent = buildLabContent(
  exp8085BcdBinaryConvExperiment,
);
