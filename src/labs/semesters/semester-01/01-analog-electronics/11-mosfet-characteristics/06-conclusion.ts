import { type LabSection } from "@/labs/lab-content.types";

export const conclusion: LabSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The drain and transfer characteristics of the N-channel enhancement MOSFET were plotted. The drain current is negligible below the threshold voltage, rises as a square law with VGS, and becomes nearly constant with VDS once VDS ≥ VGS − Vth (saturation).",
    "Reference values for the illustrative device used in the virtual lab (Vth = 2 V, K = 5 mA/V²): ID = 20 mA at VGS = 4 V in saturation, ID = 45 mA at VGS = 5 V, and gm = 2K(VGS − Vth) = 20 mA/V at VGS = 4 V. A physical device will give different numbers; compare your own Vth and gm with the datasheet.",
    "Precautions: keep both supplies at 0 V while wiring; never exceed the drain current and power rating of the MOSFET; do not leave the gate floating (static damage); change VGS and VDD gradually.",
  ],
};
