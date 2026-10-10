/**
 * Migrate legacy circuit + content pairs into the semester tree.
 * Run: npx tsx scripts/migrate-to-semester.ts
 */
import fs from "node:fs";
import path from "node:path";

import { type LabContent } from "../src/labs/lab-content.types";
import { type Circuit } from "../src/labs/types";
import { type SceneProcedureStep } from "../src/labs/experiments/types";

export type MigrationSpec = {
  circuit: Circuit;
  content: LabContent;
  tags: readonly string[];
  subjectPath: string;
};

export type ContentOnlyMigrationSpec = {
  content: LabContent;
  tags: readonly string[];
  subjectPath: string;
  description?: string;
};

function slugify(label: string, index: number): string {
  const base = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
  return `${String(index + 1).padStart(2, "0")}-${base || `step-${index + 1}`}`;
}

function serialize(value: unknown, indent = 0): string {
  const pad = "  ".repeat(indent);
  const padInner = "  ".repeat(indent + 1);

  if (value === null || value === undefined) return "undefined";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean")
    return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value
      .map((v) => `${padInner}${serialize(v, indent + 1)}`)
      .join(",\n");
    return `[\n${items},\n${pad}]`;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).filter(
      ([, v]) => v !== undefined,
    );
    if (entries.length === 0) return "{}";
    const lines = entries.map(([k, v]) => {
      const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
      return `${padInner}${key}: ${serialize(v, indent + 1)}`;
    });
    return `{\n${lines.join(",\n")},\n${pad}}`;
  }
  return JSON.stringify(value);
}

function writeSectionFile(
  dir: string,
  filename: string,
  exportName: string,
  section: object,
) {
  const typeImport = filename.includes("apparatus")
    ? "ApparatusSection"
    : filename.includes("observations")
      ? "ObservationSection"
      : filename.includes("conclusion")
        ? "ConclusionSection"
        : "TheorySection";

  fs.writeFileSync(
    path.join(dir, filename),
    `import { type ${typeImport} } from '@/labs/lab-content.types';

export const ${exportName}: ${typeImport} = ${serialize(section, 0)};
`,
    "utf8",
  );
}

function buildProcedureSteps(
  circuit: Circuit,
  content: LabContent,
): SceneProcedureStep[] {
  const proc = content.sections.find((s) => s.type === "procedure");
  if (!proc || proc.type !== "procedure") {
    return circuit.steps.map((step) => ({
      label: step.title,
      body: step.body,
      show: step.show,
      highlight: step.highlight,
      activeInputs: step.activeInputs,
      supplyVoltage: step.supplyVoltage,
      readings: step.readings,
      ledBrightness: step.ledBrightness,
    }));
  }

  return proc.steps.map((step) => {
    const idx = step.circuitStepIndex ?? 0;
    const cStep = circuit.steps[idx] ?? circuit.steps[circuit.steps.length - 1];
    return {
      label: step.label,
      body: step.body,
      show: cStep.show,
      highlight: cStep.highlight,
      activeInputs: cStep.activeInputs,
      supplyVoltage: cStep.supplyVoltage,
      readings: cStep.readings,
      ledBrightness: cStep.ledBrightness,
    };
  });
}

function camelExperiment(id: string): string {
  let name =
    id.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase()) +
    "Experiment";
  if (/^[0-9]/.test(name))
    name = `exp${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  return name;
}

function pascalExport(id: string, suffix: "Circuit" | "Content"): string {
  let name =
    id
      .split("-")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("") + suffix;
  if (/^[0-9]/.test(name))
    name = `Exp${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  return name;
}

export function migrateOne({
  circuit,
  content,
  tags,
  subjectPath,
}: MigrationSpec) {
  const id = content.id;
  const dir = path.join(process.cwd(), "src/labs/semesters", subjectPath, id);
  const procDir = path.join(dir, "04-procedure");

  fs.mkdirSync(procDir, { recursive: true });

  const theory = content.sections.find(
    (s) => s.id === "theory" && s.type === "text",
  );
  const apparatus = content.sections.find((s) => s.type === "apparatus");
  const observations = content.sections.find((s) => s.type === "observation");
  const conclusion = content.sections.find((s) => s.type === "conclusion");

  const existingAim = content.sections.find(
    (s) => s.id === "aim" && s.type === "text",
  );
  writeSectionFile(
    dir,
    "01-aim.ts",
    "aim",
    existingAim ?? {
      id: "aim",
      type: "text",
      title: "Aim",
      paragraphs: [
        `To study and verify ${content.title.toLowerCase()} on a breadboard.`,
      ],
    },
  );

  if (theory && theory.type === "text")
    writeSectionFile(dir, "02-theory.ts", "theory", theory);
  if (apparatus && apparatus.type === "apparatus")
    writeSectionFile(dir, "03-apparatus.ts", "apparatus", apparatus);
  if (observations && observations.type === "observation")
    writeSectionFile(dir, "05-observations.ts", "observations", observations);
  if (conclusion && conclusion.type === "conclusion")
    writeSectionFile(dir, "06-conclusion.ts", "conclusion", conclusion);

  const procedureSteps = buildProcedureSteps(circuit, content);
  const stepImports: string[] = [];

  procedureSteps.forEach((step, i) => {
    const fileSlug = slugify(step.label, i);
    fs.writeFileSync(
      path.join(procDir, `${fileSlug}.ts`),
      `import { type SceneProcedureStep } from '@/labs/experiments/types';

export const step: SceneProcedureStep = ${serialize(step, 0)};
`,
      "utf8",
    );
    stepImports.push(
      `import { step as s${String(i + 1).padStart(2, "0")} } from './${fileSlug}';`,
    );
  });

  fs.writeFileSync(
    path.join(procDir, "index.ts"),
    `${stepImports.join("\n")}

import { type SceneProcedureStep } from '@/labs/experiments/types';

export const procedureSteps: SceneProcedureStep[] = [
${procedureSteps.map((_, i) => `  s${String(i + 1).padStart(2, "0")},`).join("\n")}
];
`,
    "utf8",
  );

  fs.writeFileSync(
    path.join(dir, "components.ts"),
    `import { type ComponentInstance } from '@/labs/types';

export const components: ComponentInstance[] = ${serialize(circuit.components, 0)};
`,
    "utf8",
  );

  const expName = camelExperiment(id);
  const circuitName = pascalExport(id, "Circuit");
  const contentName = pascalExport(id, "Content");
  const sectionsImport = [
    "import { aim } from './01-aim';",
    theory ? "import { theory } from './02-theory';" : "",
    apparatus ? "import { apparatus } from './03-apparatus';" : "",
    observations ? "import { observations } from './05-observations';" : "",
    conclusion ? "import { conclusion } from './06-conclusion';" : "",
  ].filter(Boolean);
  const sectionsArray = [
    "aim",
    theory && "theory",
    apparatus && "apparatus",
    observations && "observations",
    conclusion && "conclusion",
  ].filter(Boolean);
  const truthTableLine = circuit.truthTable
    ? `\n  truthTable: ${serialize(circuit.truthTable, 1).replace(/\n/g, "\n  ")},`
    : "";

  fs.writeFileSync(
    path.join(dir, "index.ts"),
    `import { buildCircuit, buildLabContent } from '@/labs/experiments/build';
import { type ExperimentDefinition } from '@/labs/experiments/types';

${sectionsImport.join("\n")}
import { components } from './components';
import { procedureSteps } from './04-procedure';

export const ${expName}: ExperimentDefinition = {
  id: '${id}',
  title: ${JSON.stringify(content.title)},
  description: ${JSON.stringify(circuit.description)},${truthTableLine}
  components,
  sections: [${sectionsArray.join(", ")}],
  procedureSteps,
};

export const ${circuitName} = buildCircuit(${expName});
export const ${contentName} = buildLabContent(${expName});
`,
    "utf8",
  );

  console.log(`✓ ${subjectPath}/${id} (${procedureSteps.length} steps)`);
  return {
    id,
    expName,
    circuitName,
    contentName,
    tags,
    labType: content.labType ?? ("breadboard" as const),
  };
}

function buildContentOnlyProcedureSteps(
  content: LabContent,
): SceneProcedureStep[] {
  const proc = content.sections.find((s) => s.type === "procedure");
  if (!proc || proc.type !== "procedure") return [];

  return proc.steps.map((step) => ({
    label: step.label,
    body: step.body,
    show: [],
    markers: step.markers,
  }));
}

function writeExperimentIndex(
  dir: string,
  id: string,
  content: LabContent,
  sectionsImport: string[],
  sectionsArray: string[],
  procedureSteps: SceneProcedureStep[],
  opts: {
    description: string;
    labType?: LabContent["labType"];
    truthTable?: Circuit["truthTable"];
    componentsImport: boolean;
  },
) {
  const expName = camelExperiment(id);
  const circuitName = pascalExport(id, "Circuit");
  const contentName = pascalExport(id, "Content");
  const truthTableLine = opts.truthTable
    ? `\n  truthTable: ${serialize(opts.truthTable, 1).replace(/\n/g, "\n  ")},`
    : "";
  const labTypeLine =
    opts.labType && opts.labType !== "breadboard"
      ? `\n  labType: '${opts.labType}',`
      : "";
  const componentsBlock = opts.componentsImport
    ? `\nimport { components } from './components';\n`
    : "";
  const componentsField = opts.componentsImport
    ? "\n  components,"
    : "\n  components: [],";

  fs.writeFileSync(
    path.join(dir, "index.ts"),
    `import { buildCircuit, buildLabContent } from '@/labs/experiments/build';
import { type ExperimentDefinition } from '@/labs/experiments/types';

${sectionsImport.join("\n")}
${componentsBlock}import { procedureSteps } from './04-procedure';

export const ${expName}: ExperimentDefinition = {
  id: '${id}',
  title: ${JSON.stringify(content.title)},
  description: ${JSON.stringify(opts.description)},${labTypeLine}${truthTableLine}${componentsField}
  sections: [${sectionsArray.join(", ")}],
  procedureSteps,
};

export const ${circuitName} = buildCircuit(${expName});
export const ${contentName} = buildLabContent(${expName});
`,
    "utf8",
  );

  return { expName, circuitName, contentName };
}

export function migrateContentOnly({
  content,
  tags,
  subjectPath,
  description,
}: ContentOnlyMigrationSpec) {
  const id = content.id;
  const dir = path.join(process.cwd(), "src/labs/semesters", subjectPath, id);
  const procDir = path.join(dir, "04-procedure");

  fs.mkdirSync(procDir, { recursive: true });

  const aim = content.sections.find((s) => s.id === "aim" && s.type === "text");
  const theory = content.sections.find(
    (s) => s.id === "theory" && s.type === "text",
  );
  const apparatus = content.sections.find((s) => s.type === "apparatus");
  const codeLab = content.sections.find((s) => s.type === "code-lab");
  const simulation = content.sections.find((s) => s.type === "simulation");
  const observations = content.sections.find((s) => s.type === "observation");
  const conclusion = content.sections.find((s) => s.type === "conclusion");

  const extraSections: { file: string; exportName: string; section: object }[] =
    [];

  if (aim && aim.type === "text")
    writeSectionFile(dir, "01-aim.ts", "aim", aim);
  else {
    writeSectionFile(dir, "01-aim.ts", "aim", {
      id: "aim",
      type: "text",
      title: "Aim",
      paragraphs: [`To study ${content.title.toLowerCase()}.`],
    });
  }

  if (theory && theory.type === "text")
    writeSectionFile(dir, "02-theory.ts", "theory", theory);
  if (apparatus && apparatus.type === "apparatus")
    writeSectionFile(dir, "03-apparatus.ts", "apparatus", apparatus);
  if (codeLab && codeLab.type === "code-lab") {
    extraSections.push({
      file: "03-code-lab.ts",
      exportName: "codeLab",
      section: codeLab,
    });
    fs.writeFileSync(
      path.join(dir, "03-code-lab.ts"),
      `import { type CodeLabSection } from '@/labs/lab-content.types';

export const codeLab: CodeLabSection = ${serialize(codeLab, 0)};
`,
      "utf8",
    );
  }
  if (simulation && simulation.type === "simulation") {
    extraSections.push({
      file: "03-simulation.ts",
      exportName: "simulation",
      section: simulation,
    });
    fs.writeFileSync(
      path.join(dir, "03-simulation.ts"),
      `import { type SimulationSection } from '@/labs/lab-content.types';

export const simulation: SimulationSection = ${serialize(simulation, 0)};
`,
      "utf8",
    );
  }
  if (observations && observations.type === "observation")
    writeSectionFile(dir, "05-observations.ts", "observations", observations);
  if (conclusion && conclusion.type === "conclusion")
    writeSectionFile(dir, "06-conclusion.ts", "conclusion", conclusion);

  const procedureSteps = buildContentOnlyProcedureSteps(content);
  const stepImports: string[] = [];

  procedureSteps.forEach((step, i) => {
    const fileSlug = slugify(step.label, i);
    fs.writeFileSync(
      path.join(procDir, `${fileSlug}.ts`),
      `import { type SceneProcedureStep } from '@/labs/experiments/types';

export const step: SceneProcedureStep = ${serialize(step, 0)};
`,
      "utf8",
    );
    stepImports.push(
      `import { step as s${String(i + 1).padStart(2, "0")} } from './${fileSlug}';`,
    );
  });

  fs.writeFileSync(
    path.join(procDir, "index.ts"),
    procedureSteps.length > 0
      ? `${stepImports.join("\n")}

import { type SceneProcedureStep } from '@/labs/experiments/types';

export const procedureSteps: SceneProcedureStep[] = [
${procedureSteps.map((_, i) => `  s${String(i + 1).padStart(2, "0")},`).join("\n")}
];
`
      : `import { type SceneProcedureStep } from '@/labs/experiments/types';

export const procedureSteps: SceneProcedureStep[] = [];
`,
    "utf8",
  );

  const sectionsImport = [
    "import { aim } from './01-aim';",
    theory ? "import { theory } from './02-theory';" : "",
    apparatus ? "import { apparatus } from './03-apparatus';" : "",
    codeLab ? "import { codeLab } from './03-code-lab';" : "",
    simulation ? "import { simulation } from './03-simulation';" : "",
    observations ? "import { observations } from './05-observations';" : "",
    conclusion ? "import { conclusion } from './06-conclusion';" : "",
  ].filter(Boolean);

  const sectionsArray = [
    "aim",
    theory && "theory",
    apparatus && "apparatus",
    codeLab && "codeLab",
    simulation && "simulation",
    observations && "observations",
    conclusion && "conclusion",
  ].filter(Boolean);

  const desc =
    description ??
    (theory && theory.type === "text"
      ? (theory.paragraphs[0]?.slice(0, 200) ?? content.title)
      : content.title);

  const { expName, circuitName, contentName } = writeExperimentIndex(
    dir,
    id,
    content,
    sectionsImport,
    sectionsArray as string[],
    procedureSteps,
    { description: desc, labType: content.labType, componentsImport: false },
  );

  console.log(
    `✓ ${subjectPath}/${id} [${content.labType ?? "text"}] (${procedureSteps.length} steps)`,
  );
  return {
    id,
    expName,
    circuitName,
    contentName,
    tags,
    labType: content.labType ?? ("text" as const),
  };
}
