import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The experiment successfully constructs and verifies the operational characteristics of both the Half-Wave Rectifier " +
      "and the Center-Tapped Full-Wave Rectifier circuits on a breadboard.",

    "The Center-Tapped Full-Wave Rectifier yields twice the DC output voltage ($V_{dc} = 5.68\\text{ V}$ vs $2.84\\text{ V}$) " +
      "and approximately twice the rectification efficiency ($80.6\\%$ vs $40.2\\%$) compared to the Half-Wave Rectifier. " +
      "This confirms that utilizing both alternating half-cycles via a center-tapped secondary dramatically enhances energy conversion.",

    "The measured ripple factor for the center-tapped rectifier ($\\gamma \\approx 0.48$) is considerably smaller than that " +
      "of the half-wave rectifier ($\\gamma \\approx 1.21$). Furthermore, the output ripple frequency doubles to $2f_{in} = 100\\text{ Hz}$, " +
      "which greatly facilitates subsequent filtering compared to the 50 Hz fundamental frequency of the half-wave circuit.",

    "Connecting a $100\\ \\mu\\text{F}$ shunt capacitor filter markedly smooths the output voltage, raising $V_{dc}$ towards the peak voltage $V_m$. " +
      "The full-wave circuit exhibits half the ripple voltage of the half-wave circuit for the same filter capacitance, confirming theoretical filter equations.",

    "Minor differences between theoretical formulas and experimental readings are accounted for by the silicon diode forward barrier potential " +
      "($V_\\gamma \\approx 0.7\\text{ V}$) and finite secondary winding resistance of the transformer.",
  ],
};
