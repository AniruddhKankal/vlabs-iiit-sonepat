import { type SceneProcedureStep } from '@/labs/experiments/types';

export const step: SceneProcedureStep = {
  label: "Wire the drain circuit",
  body: "Connect the positive rail of VDD to one end of $R_D$ (red wire), the other end of $R_D$ to the Drain (green wire), and the Source to the top ground rail (black wire).",
  show: ['bb', 'psu_vds', 'r_d', 'q1', 'psu_vgs', 'w_vdd_rd', 'w_rd_drain', 'w_source_gnd'],
  highlight: 'w_rd_drain',
};
