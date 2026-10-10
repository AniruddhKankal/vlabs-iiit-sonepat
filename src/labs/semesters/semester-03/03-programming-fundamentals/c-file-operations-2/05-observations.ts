import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Binary files enable O(1) random access to any record using fseek with a calculated byte offset.",
    "fread and fwrite transfer exact memory images — no format conversion, no newline processing.",
    "Binary files are not human-readable: use a hex editor to inspect them.",
  ],
  table: {
    headers: ["Operation", "Function", "Mode", "Notes"],
    rows: [
      [
        "Write struct array",
        "fwrite(arr, sizeof(S), n, fp)",
        '"wb"',
        "Writes n structs",
      ],
      ["Read struct", "fread(&s, sizeof(S), 1, fp)", '"rb"', "Reads 1 struct"],
      [
        "Seek to record n",
        "fseek(fp, n*sizeof(S), SEEK_SET)",
        "any",
        "O(1) positioning",
      ],
      ["Get position", "ftell(fp)", "any", "Bytes from start"],
      ["Rewind", "rewind(fp)", "any", "Back to byte 0"],
      ["Update in-place", "fseek + fwrite", '"rb+"', "Overwrite at position"],
    ],
  },
};
