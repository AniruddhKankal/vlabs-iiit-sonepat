import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    'The text file "students.txt" should contain one student record per line.',
    "fscanf correctly parses each field when the format string matches the written format.",
    'Mode "a" preserves existing content — contrast with "w" which truncates.',
  ],
  table: {
    headers: [
      "fopen mode",
      "File exists?",
      "File absent?",
      "Read?",
      "Write?",
      "Position",
    ],
    rows: [
      ['"r"', "Opens", "NULL", "Yes", "No", "Start"],
      ['"w"', "Truncates", "Creates", "No", "Yes", "Start"],
      ['"a"', "Opens", "Creates", "No", "Yes", "End"],
      ['"r+"', "Opens", "NULL", "Yes", "Yes", "Start"],
      ['"w+"', "Truncates", "Creates", "Yes", "Yes", "Start"],
      ['"a+"', "Opens", "Creates", "Yes", "Yes", "End (writes)"],
    ],
  },
};
