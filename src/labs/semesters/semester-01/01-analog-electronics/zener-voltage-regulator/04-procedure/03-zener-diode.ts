import { type SceneProcedureStep } from '@/labs/experiments/types';

export const step: SceneProcedureStep = {
  label: 'Connect the Zener diode in reverse bias.',
  body: 'Mount the 5.1 V Zener diode (the red component, columns 9 and 10). Its cathode (the banded end, column 10) must be joined to the free end of Rs (column 7) with the green wire, and its anode (column 9) must be joined to the ground rail with the black wire. This reverse-biased connection is required for breakdown regulation. If it is connected the other way round, it behaves like an ordinary diode and clamps the output at only about 0.7 V.',
  show: ['bb', 'psu', 'rs', 'w_vcc_rs', 'dz', 'w_rs_dz', 'w_dz_gnd'],
  highlight: 'dz',
  supplyVoltage: 0,
};
