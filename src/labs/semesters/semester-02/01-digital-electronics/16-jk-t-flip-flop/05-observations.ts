import { type LabSection } from "@/labs/lab-content.types";

export const observations: LabSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Record the output after each active clock edge. Q̅ should be the complement of Q in normal operation.",
  ],
  table: {
    headers: ["Mode", "Inputs", "Expected next Q", "Operation", "Observed"],
    rows: [
      ["JK", "J=0, K=0", "Q(previous)", "Hold", ""],
      ["JK", "J=0, K=1", "0", "Reset", ""],
      ["JK", "J=1, K=0", "1", "Set", ""],
      ["JK", "J=1, K=1", "Q̅(previous)", "Toggle", ""],
      ["T", "T=0 (J=K=0)", "Q(previous)", "Hold", ""],
      ["T", "T=1 (J=K=1)", "Q̅(previous)", "Toggle", ""],
    ],
  },
};
