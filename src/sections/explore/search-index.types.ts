/**
 * The ⌘K command palette (CommandPalette.tsx) doesn't know how your lab
 * content is stored — it only searches over a flat SearchIndexEntry[].
 * Build that array from your real data (ALL_EXPERIMENTS + theory/procedure
 * text) using `buildSearchIndex` in search-index.build.ts, then export the
 * result as SEARCH_INDEX from wherever you assemble it and import that into
 * CommandPalette.tsx in place of the placeholder import.
 */

export type SearchSection =
  "Title" | "Description" | "Theory" | "Procedure" | "Apparatus";

export interface SearchIndexEntry {
  /** Unique per entry, e.g. `${circuitId}:theory:2` */
  id: string;
  circuitId: string;
  experimentTitle: string;
  /** Optional display number, e.g. the "6." in "6. Half-Wave Rectifier" */
  experimentNumber?: number;
  subjectTitle: string;
  semesterLabel: string;
  section: SearchSection;
  /** The literal text this entry matches against and (for non-Title/Description) displays as a snippet */
  text: string;
  labRoute: string;
  tags: string[];
  /** Optional thumbnail for the "Description" preview cards; falls back to a generic icon */
  previewImage?: string;
}
