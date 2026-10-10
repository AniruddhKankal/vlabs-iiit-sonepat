import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "A shift register is a sequential logic circuit that stores multiple bits of data, with the ability to shift the stored data one position on each clock pulse. The 74HC273 is an 8-bit D-type flip-flop register — on each rising edge of the CLK signal, the values present on D0–D7 are captured into the internal flip-flops and simultaneously appear on Q0–Q7.",
    "The Serial-In Parallel-Out (SIPO) operating mode applies data bit by bit on a single data line through multiple clock cycles, progressively filling the register. After 8 clock cycles, all 8 bits are stored and all 8 Q outputs are valid in parallel. This is used in serial-to-parallel conversion — for example, receiving serial data from a UART and feeding it to an 8-bit data bus.",
    "The four fundamental shift register configurations are: SIPO (Serial-In Parallel-Out) — serial data in, all bits out simultaneously; SISO (Serial-In Serial-Out) — data shifts through, last bit exits serially; PIPO (Parallel-In Parallel-Out) — all bits loaded at once, output simultaneously; PISO (Parallel-In Serial-Out) — all bits loaded at once, output shifted out serially.",
    "The 74HC273 has an active-low Master Reset pin (MR_bar). When pulled LOW, all Q outputs are asynchronously cleared to 0 regardless of CLK or D inputs. In this experiment MR_bar is tied HIGH to keep the register in normal operating mode. The clock input is edge-triggered (rising edge) — data is captured only at the moment the clock transitions from LOW to HIGH.",
    "Applications of shift registers include: serial communication interfaces (SPI, I²C, UART), LED display drivers (chained 74HC595 for many outputs from few pins), digital delay lines, and pseudo-random number generators (using feedback XOR — LFSR).",
  ],
};
