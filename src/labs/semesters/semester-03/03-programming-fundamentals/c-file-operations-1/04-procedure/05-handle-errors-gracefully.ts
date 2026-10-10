import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Handle errors gracefully.",
  body: 'Attempt to open a non-existent file with "r". Check if fp == NULL and print strerror(errno) from <errno.h>. This shows the error message from the OS (e.g., "No such file or directory"). Always handle file open failures in production code.',
  show: [],
};
