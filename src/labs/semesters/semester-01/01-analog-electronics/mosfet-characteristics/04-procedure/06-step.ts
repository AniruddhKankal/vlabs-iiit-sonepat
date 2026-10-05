import { type SceneProcedureStep } from '@/labs/experiments/types';

export const step: SceneProcedureStep = {
  label: "Wire the gate circuit",
  body: "Connect the positive rail of VGS to the Gate hole (blue wire). Join the two ground rails with a black wire so both supplies share a common ground with the Source.",
  show: ['bb', 'psu_vds', 'r_d', 'q1', 'psu_vgs', 'w_vdd_rd', 'w_rd_drain', 'w_source_gnd', 'w_gate', 'w_gnd_common'],
  highlight: 'w_gate',
};
