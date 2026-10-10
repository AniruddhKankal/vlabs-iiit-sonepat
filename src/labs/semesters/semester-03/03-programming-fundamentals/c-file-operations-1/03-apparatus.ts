import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "C Compiler",
      specification: "GCC 9+ or Clang 10+",
      quantity: "1",
    },
    {
      name: "IDE or Text Editor",
      specification: "VS Code, Code::Blocks, or any text editor",
      quantity: "1",
    },
    {
      name: "Terminal / Command Prompt",
      specification: "For compiling and running programs",
      quantity: "1",
    },
    {
      name: "File System Access",
      specification: "Write permission in working directory",
      quantity: "1",
    },
  ],
};
