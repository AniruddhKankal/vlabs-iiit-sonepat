import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { simulation } from "./03-simulation";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const aluSimulationExperiment: ExperimentDefinition = {
  id: "alu-simulation",
  title: "4-bit ALU Operations",
  description:
    "An Arithmetic Logic Unit (ALU) is the combinational circuit within a CPU that performs integer arithmetic and bitwise logic operations. A 4-bit ALU operates on two 4-bit operands (A and B) and produce",
  labType: "simulation",
  components: [],
  sections: [aim, theory, apparatus, simulation, observations, conclusion],
  procedureSteps,
};

export const AluSimulationCircuit = buildCircuit(aluSimulationExperiment);
export const AluSimulationContent = buildLabContent(aluSimulationExperiment);
