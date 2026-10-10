import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The ADC0804 interface was successfully implemented. In free-running mode, the 8-bit LED output correctly tracked the potentiometer input voltage across the full 0–5 V range. The digital code increased monotonically as V_in increased, confirming correct ADC operation.",
    "The 4-bit R-2R ladder DAC produced output voltages closely matching the theoretical V_out = Vref × Code/16 formula. The maximum measured error was less than 10 mV (< 3.2% FSR for a 4-bit DAC), which is within the 0.5 LSB (156 mV) accuracy expected from this passive architecture with ±1% resistors.",
    "Together these circuits demonstrate the complete analog-digital interface chain. The ADC converts physical quantities to digital data for processing; the DAC converts digital results back to analog control or audio signals. Understanding these conversions is fundamental to all mixed-signal systems including audio codecs, sensor data acquisition boards, motor drive controllers, and software-defined radio.",
  ],
};
