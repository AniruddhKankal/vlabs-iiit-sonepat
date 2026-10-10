import { type CodeLabSection } from "@/labs/lab-content.types";

export const codeLab: CodeLabSection = {
  id: "code",
  type: "code-lab",
  title: "Program",
  language: "8085",
  description:
    "Add two 8-bit numbers with 16-bit result; subtract with borrow detection.",
  starterCode:
    "; Addition with carry / Subtraction with borrow\n; Input:  NUM1 at 8000H, NUM2 at 8001H\n; Output: SUM_L at 8002H, SUM_H at 8003H\n;         DIFF  at 8004H, BORROW at 8005H\n\n        ORG 8000H\nNUM1:   DB  0C8H       ; 200\nNUM2:   DB  64H        ; 100\n\n        ORG 8100H\nSTART:\n        ; 16-bit addition\n        LDA  8000H     ; A = NUM1\n        MOV  B,A\n        LDA  8001H     ; A = NUM2\n        ADD  B         ; A = NUM1 + NUM2 (low byte), CY = carry\n        STA  8002H     ; store low byte of sum\n\n        MVI  A,00H     ; A = 0\n        ADC  A         ; A = 0 + CY (upper byte)\n        STA  8003H     ; store high byte (carry)\n\n        ; 8-bit subtraction with borrow detection\n        LDA  8000H     ; A = NUM1\n        MOV  B,A\n        LDA  8001H\n        MOV  C,A\n        MOV  A,B       ; A = NUM1\n        SUB  C         ; A = NUM1 - NUM2\n        STA  8004H     ; store difference\n\n        MVI  B,00H\n        JNC  DONE      ; no borrow\n        MVI  B,01H     ; borrow = 1\nDONE:   MOV  A,B\n        STA  8005H     ; store borrow flag\n        HLT\n",
  expectedOutputs: "SUM_L=2CH, SUM_H=01H (300=012CH), DIFF=64H, BORROW=00H",
  memoryInit: {
    "0x8000": 200,
    "0x8001": 100,
  },
};
