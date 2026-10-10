# D Flip-Flop — Semester 2 Digital Electronics

This folder follows the supplied `sr-flip-flop` sample structure and naming conventions.

## Folder placement

Copy this folder to:

`src/labs/semesters/semester-02/04-sequential-logic/d-flip-flop/`

## Files

- `01-aim.ts`
- `02-theory.ts`
- `03-apparatus.ts`
- `04-procedure/` — 12 ordered `SceneProcedureStep` modules plus `index.ts`
- `05-observations.ts`
- `06-conclusion.ts`
- `components.ts`
- `index.ts`
- `CATALOG_SNIPPET.md`

## Important implementation note

The visual component list represents the gate-level functions in a master-slave D flip-flop using the available individual NAND/inverter gate primitives. The physical pin-level wiring of a real 74HC00/74HC04 implementation should be checked against the exact IC pinout and breadboard renderer before treating the scene as an electrically validated simulation. This ZIP has not been run through the project's TypeScript build or runtime.
