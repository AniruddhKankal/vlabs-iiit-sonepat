import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "Propagation delay (t_pd) is the time elapsed between an input transition and the resulting output transition of a logic gate. For a 74HC-series gate at 5 V, the typical propagation delay is 7–10 ns (rising or falling edge). This delay is caused by internal transistor switching time and load capacitance charging. The 74HC86 (XOR) and 74HC08 (AND) gates in a Half Adder each contribute t_pd to the total combinational path delay.",
    "In the Half Adder, the Sum output (XOR) and Carry output (AND) both originate from the same inputs A and B. The propagation delay from input to Sum is t_pd(XOR) ≈ 8 ns, and from input to Carry is t_pd(AND) ≈ 7 ns (74HC at 5 V, 50 pF load, 25°C). When multiple gates are cascaded, propagation delays accumulate along the critical path — the longest delay path through the circuit that determines the maximum operating frequency.",
    "Fan-out is the number of gate inputs that one gate output can drive reliably while maintaining valid logic levels. For 74HC driving 74HC loads, the DC fan-out is theoretically very high (≥ 50 for CMOS), but AC fan-out is limited by load capacitance — each additional load input adds approximately 5–10 pF, increasing t_pd. In practice, a fan-out of 10–20 is recommended to avoid excessive timing degradation.",
    "Supply voltage has a significant effect on 74HC speed. At Vcc = 5 V, t_pd ≈ 7 ns. At Vcc = 3.3 V, t_pd increases to approximately 10 ns. At Vcc = 2 V, t_pd can be 25–40 ns. This relationship arises because higher Vcc increases the overdrive of the MOSFET gates, allowing faster switching. The experiment uses an oscilloscope to measure the input-to-output delay of each gate in the Half Adder under different conditions.",
  ],
};
