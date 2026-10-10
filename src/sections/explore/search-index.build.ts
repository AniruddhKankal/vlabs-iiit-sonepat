import { type ExploreExperiment } from "@/sections/explore/explore.data";
import { type SearchIndexEntry } from "./search-index.types";

export type ContentLookup = (circuitId: string) =>
  | {
      theory?: string[];
      procedure?: string[];
      apparatus?: string[];
      previewImage?: string;
    }
  | undefined;

export type SearchIndexInputExperiment = ExploreExperiment & {
  subjectTitle: string;
  semesterLabel: string;
};

export function buildSearchIndex(
  experiments: SearchIndexInputExperiment[],
  getContent?: ContentLookup,
): SearchIndexEntry[] {
  const index: SearchIndexEntry[] = [];

  experiments.forEach((exp) => {
    const base = {
      circuitId: exp.circuitId,
      experimentTitle: exp.title,
      subjectTitle: exp.subjectTitle,
      semesterLabel: exp.semesterLabel,
      labRoute: exp.labRoute ?? "/explore",
      tags: [...exp.tags],
    };

    index.push({
      ...base,
      id: `${exp.circuitId}:title`,
      section: "Title",
      text: exp.title,
    });
    index.push({
      ...base,
      id: `${exp.circuitId}:description`,
      section: "Description",
      text: exp.description,
    });

    const content = getContent?.(exp.circuitId);

    content?.theory?.forEach((paragraph, i) => {
      index.push({
        ...base,
        id: `${exp.circuitId}:theory:${i}`,
        section: "Theory",
        text: paragraph,
        previewImage: content.previewImage,
      });
    });

    content?.procedure?.forEach((body, i) => {
      index.push({
        ...base,
        id: `${exp.circuitId}:procedure:${i}`,
        section: "Procedure",
        text: body,
        previewImage: content.previewImage,
      });
    });

    content?.apparatus?.forEach((item, i) => {
      index.push({
        ...base,
        id: `${exp.circuitId}:apparatus:${i}`,
        section: "Apparatus",
        text: item,
        previewImage: content.previewImage,
      });
    });
  });

  return index;
}
