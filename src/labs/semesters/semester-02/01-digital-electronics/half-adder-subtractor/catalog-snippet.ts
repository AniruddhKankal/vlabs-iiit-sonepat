// ── In src/labs/semesters/catalog.ts ─────────────────────────────

// 1) add this import at the top:
import {
  HalfAdderSubtractorCircuit,
  HalfAdderSubtractorContent,
  halfAdderSubtractorExperiment,
} from "./semester-02/01-digital-electronics/half-adder-subtractor";

// 2) add this entry inside SEMESTER_SUBJECTS → semester-02 "01-digital-electronics" → experiments:
fromBuilt(
  halfAdderSubtractorExperiment,
  HalfAdderSubtractorCircuit,
  HalfAdderSubtractorContent,
  ["half adder", "half subtractor", "xor", "adder", "subtractor", "borrow"],
),
