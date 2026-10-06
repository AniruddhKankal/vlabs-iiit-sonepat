import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "Binary Coded Decimal (BCD) represents each decimal digit (0–9) using a 4-bit binary code. The valid BCD codes are 0000 through 1001; the remaining six patterns 1010–1111 are unused. BCD is widely used in display drivers, calculators, and digital meters where decimal output is required.",
    "Excess-3 (XS3) is a self-complementing BCD code obtained by adding 3 (0011) to each BCD digit. For example, decimal 0 (BCD 0000) becomes XS3 0011, and decimal 9 (BCD 1001) becomes XS3 1100. The self-complementing property means the 9's complement of a digit equals the bitwise complement of its XS3 code — a feature exploited in BCD subtraction circuits.",
    "The Boolean expressions for the four XS3 output bits (W, X, Y, Z) with BCD inputs A (MSB), B, C, D (LSB) are derived by K-map minimisation over the ten valid input combinations. The minimised results are: W = A + BC + BD,  X = B'C + B'D + BC'D',  Y = C'D' + CD,  Z = D'. Note that Y = XNOR(C, D) and Z is simply the complement of the LSB.",
    "The circuit is implemented using standard CMOS logic ICs: 74HC04 (NOT), 74HC08 (AND), 74HC32 (OR), and 74HC86 (XOR). All operate from a +5 V supply. Four LEDs (W=red, X=yellow, Y=green, Z=blue) display the XS3 output. 330 Ω resistors limit LED current to approximately 9 mA.",
  ],
};
