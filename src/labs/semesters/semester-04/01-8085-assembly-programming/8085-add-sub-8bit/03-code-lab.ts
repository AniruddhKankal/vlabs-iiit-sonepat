import { type CodeLabSection } from "@/labs/lab-content.types";

export const codeLab: CodeLabSection = {
  id: "code",
  type: "code-lab",
  title: "Program",
  language: "8085",
  description: "Add and subtract two 8-bit numbers stored in memory.",
  starterCode:
    "; Add and subtract two 8-bit numbers\n; Input:  NUM1 at 8000H, NUM2 at 8001H\n; Output: SUM at 8002H, DIFF at 8003H\n\n        ORG 8000H\nNUM1:   DB  25H        ; First number = 37\nNUM2:   DB  17H        ; Second number = 23\n\n        ORG 8100H\nSTART:\n        LDA  8000H     ; Load NUM1 into A\n        MOV  B,A       ; Save NUM1 in B\n        LDA  8001H     ; Load NUM2 into A\n        ADD  B         ; A = NUM2 + NUM1\n        STA  8002H     ; Store sum at 8002H\n\n        LDA  8000H     ; Reload NUM1\n        MOV  B,A       ; B = NUM1\n        LDA  8001H     ; A = NUM2\n        MOV  C,A       ; C = NUM2\n        MOV  A,B       ; A = NUM1\n        SUB  C         ; A = NUM1 - NUM2\n        STA  8003H     ; Store difference\n        HLT\n",
  expectedOutputs: "SUM at 8002H = 3CH (60), DIFF at 8003H = 0EH (14)",
  memoryInit: {
    "0x8000": 37,
    "0x8001": 23,
  },
};
