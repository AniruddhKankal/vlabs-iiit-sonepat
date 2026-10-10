// ── Explore page data ──────────────────────────────────────────────────────
// All subjects and experiments come from the semester tree.

import { getSemesterExploreSemesters } from "@/labs/semesters";

export type {
  ExploreExperiment,
  ExploreSemester,
  ExploreSubject,
} from "./explore.types";

export const EXPLORE_SEMESTERS = getSemesterExploreSemesters();

export const FEATURED_SUBJECT = {
  id: EXPLORE_SEMESTERS[0].subjects[0].experiments[0].id,
  title: EXPLORE_SEMESTERS[0].subjects[0].experiments[0].title,
  description: EXPLORE_SEMESTERS[0].subjects[0].experiments[0].description,
  circuitId: EXPLORE_SEMESTERS[0].subjects[0].experiments[0].circuitId,
  category: EXPLORE_SEMESTERS[0].subjects[0].title,
  tags: EXPLORE_SEMESTERS[0].subjects[0].experiments[0].tags,
  labRoute: EXPLORE_SEMESTERS[0].subjects[0].experiments[0].labRoute,
};

export const ALL_EXPERIMENTS = EXPLORE_SEMESTERS.flatMap((s) =>
  s.subjects.flatMap((sub) =>
    sub.experiments.map((exp) => ({
      ...exp,
      subjectTitle: sub.title,
      semesterLabel: s.label,
    })),
  ),
);
