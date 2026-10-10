import { type LabSection } from "@/labs/lab-content.types";

export const conclusion: LabSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 4-bit binary adder was designed with two 74HC86, two 74HC08 and one 74HC32 IC and its operation was verified for the test inputs. The observed sum and carry outputs matched the expected results $C_{out}S_3S_2S_1S_0 = A + B + C_{in}$.",
    "Additions that generate a carry in the lower bits, such as 15 + 1, show the ripple of the carry through all four stages. The carry-out LED lights when the result exceeds 15.",
  ],
};
