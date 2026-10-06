import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const demuxAddressDecoderExperiment: ExperimentDefinition = {
  id: "demux-address-decoder",
  title: "DEMUX as Address Decoder",
  description:
    "A 1-to-2 address decoder built from the same NOT + 2×AND topology as a 1:2 DEMUX. Address line A0 selects one of two device outputs (Y0 or Y1). Enable line EN must be HIGH for any output to be active. Demonstrates how demultiplexers serve as address decoders in memory systems.",
  truthTable: {
    inputs: ["A0", "EN"],
    outputs: ["Y0", "Y1"],
    rows: [
      {
        inputs: {
          A0: 0,
          EN: 0,
        },
        outputs: {
          Y0: 0,
          Y1: 0,
        },
      },
      {
        inputs: {
          A0: 0,
          EN: 1,
        },
        outputs: {
          Y0: 1,
          Y1: 0,
        },
      },
      {
        inputs: {
          A0: 1,
          EN: 0,
        },
        outputs: {
          Y0: 0,
          Y1: 0,
        },
      },
      {
        inputs: {
          A0: 1,
          EN: 1,
        },
        outputs: {
          Y0: 0,
          Y1: 1,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const DemuxAddressDecoderCircuit = buildCircuit(
  demuxAddressDecoderExperiment,
);
export const DemuxAddressDecoderContent = buildLabContent(
  demuxAddressDecoderExperiment,
);
