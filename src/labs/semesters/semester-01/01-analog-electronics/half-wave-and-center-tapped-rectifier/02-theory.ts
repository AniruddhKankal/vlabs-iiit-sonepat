import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "Rectification is the process of converting alternating current (AC), which periodically reverses direction, " +
      "into direct current (DC), which flows in only one direction. This is accomplished using p-n junction diodes, " +
      "which exhibit unidirectional conductivity: low resistance in forward bias and very high resistance in reverse bias.",

    "**Half-Wave Rectifier:**\n" +
      "In a half-wave rectifier, a single diode is placed in series with the AC source and the load resistor $R_L$. " +
      "During the positive half-cycle of the AC input voltage ($v_s = V_m \\sin(\\omega t)$), the diode anode is positive relative to the cathode, " +
      "forward-biasing the diode and allowing current to flow through the load. During the negative half-cycle, the diode is reverse-biased, " +
      "blocking current conduction. Consequently, only positive half-cycles appear across $R_L$.\n" +
      "- Average (DC) output voltage: $V_{dc} = \\frac{V_m}{\\pi} \\approx 0.318 V_m$\n" +
      "- RMS output voltage: $V_{rms} = \\frac{V_m}{2} = 0.5 V_m$\n" +
      "- Ripple factor: $\\gamma = \\sqrt{\\left(\\frac{V_{rms}}{V_{dc}}\\right)^2 - 1} = \\sqrt{\\left(\\frac{\\pi}{2}\\right)^2 - 1} \\approx 1.21$\n" +
      "- Maximum theoretical rectification efficiency: $\\eta_{max} = 40.6\\%$\n" +
      "- Peak Inverse Voltage: $\\text{PIV} = V_m$\n" +
      "- Output ripple frequency: $f_r = f_{in}$ (e.g., 50 Hz)",

    "**Center-Tapped Full-Wave Rectifier:**\n" +
      "A center-tapped full-wave rectifier uses a center-tapped step-down transformer secondary and two identical diodes ($D_1$ and $D_2$). " +
      "The center tap (CT) serves as the common zero-voltage reference (ground). The voltages at the two outer secondary terminals are " +
      "equal in magnitude but $180^\\circ$ out of phase: $v_1 = V_m \\sin(\\omega t)$ and $v_2 = -V_m \\sin(\\omega t)$.\n" +
      "1. During the positive half-cycle: Terminal 1 is positive with respect to CT, forward-biasing $D_1$. Terminal 2 is negative, reverse-biasing $D_2$. " +
      "Current flows from Terminal 1 through $D_1$, downwards through $R_L$ to the center tap.\n" +
      "2. During the negative half-cycle: Terminal 2 becomes positive with respect to CT, forward-biasing $D_2$, while Terminal 1 becomes negative, reverse-biasing $D_1$. " +
      "Current flows from Terminal 2 through $D_2$, downwards through $R_L$ to the center tap — in the exact same direction as before!\n" +
      "- Average (DC) output voltage: $V_{dc} = \\frac{2V_m}{\\pi} \\approx 0.636 V_m$ (twice that of the half-wave rectifier)\n" +
      "- RMS output voltage: $V_{rms} = \\frac{V_m}{\\sqrt{2}} \\approx 0.707 V_m$\n" +
      "- Ripple factor: $\\gamma = \\sqrt{\\left(\\frac{V_{rms}}{V_{dc}}\\right)^2 - 1} = \\sqrt{\\left(\\frac{\\pi}{2\\sqrt{2}}\\right)^2 - 1} \\approx 0.482$\n" +
      "- Maximum theoretical rectification efficiency: $\\eta_{max} = 81.2\\%$\n" +
      "- Peak Inverse Voltage: $\\text{PIV} = 2V_m$ (the non-conducting diode must withstand both secondary halves)\n" +
      "- Output ripple frequency: $f_r = 2f_{in}$ (e.g., 100 Hz)",

    "**Shunt Capacitor Filter:**\n" +
      "The pulsating DC output contains significant AC ripple. To obtain a smooth DC voltage, a filter capacitor ($C$) is connected in parallel with $R_L$. " +
      "The capacitor charges rapidly to the peak voltage ($V_m$) when a diode conducts. When the input voltage drops below the capacitor voltage, " +
      "the diodes turn OFF and the capacitor discharges slowly through $R_L$, maintaining the output voltage near $V_m$.\n" +
      "For a half-wave rectifier with filter: Ripple factor $\\gamma \\approx \\frac{1}{2\\sqrt{3} f R_L C}$.\n" +
      "For a center-tapped full-wave rectifier with filter: Ripple factor $\\gamma \\approx \\frac{1}{4\\sqrt{3} f R_L C}$.\n" +
      "Because the full-wave rectifier discharges for only half the duration between successive peaks, the ripple voltage is reduced by half compared to the half-wave rectifier.",
  ],
};
