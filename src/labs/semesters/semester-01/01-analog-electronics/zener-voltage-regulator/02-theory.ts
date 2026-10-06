import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "A Zener voltage regulator maintains a constant output voltage across a load despite variations in input voltage (line regulation) or load current (load regulation). The Zener diode operates in reverse breakdown where its terminal voltage V_Z stays nearly constant over a wide current range.",
    "The basic shunt regulator circuit consists of a series resistor R_S and a Zener diode in parallel with the load R_L. The series resistor drops the excess voltage (V_in − V_Z) and limits current. When load current changes, the Zener current adjusts inversely (I_Z = I_total − I_L) to maintain V_out = V_Z.",
    "Line regulation quantifies how much V_out changes per unit change in V_in: LineReg = ΔV_out/ΔV_in. Load regulation quantifies change due to load current: LoadReg = (V_NL − V_FL)/V_FL × 100%. A good regulator has both values close to zero.",
    "Design constraints: the Zener must stay in breakdown (I_Z > I_Z_min) at full load, and must not exceed rated power (P_Z = V_Z × I_Z_max) at no load. The series resistor value R_S = (V_in_min − V_Z) / (I_Z_min + I_L_max) determines the design trade-off.",
  ],
};
