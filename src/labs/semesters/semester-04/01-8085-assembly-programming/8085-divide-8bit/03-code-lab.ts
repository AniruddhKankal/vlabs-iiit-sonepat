import { type CodeLabSection } from "@/labs/lab-content.types";

export const codeLab: CodeLabSection = {
  id: "code",
  type: "code-lab",
  title: "Program",
  language: "8085",
  description: "Divide two 8-bit numbers using repeated subtraction.",
  starterCode:
    "; Division by repeated subtraction\n; Input:  DIVIDEND at 8000H, DIVISOR at 8001H\n; Output: QUOTIENT at 8002H, REMAINDER at 8003H\n\n        ORG 8000H\nDVND:   DB  1DH        ; dividend = 29\nDVSR:   DB  05H        ; divisor  = 5\n\n        ORG 8100H\nSTART:\n        LDA  8001H     ; A = divisor\n        ORA  A         ; set flags from A\n        JZ   DIVZERO   ; division by zero check\n\n        LDA  8001H\n        MOV  B,A       ; B = divisor\n\n        LDA  8000H     ; A = dividend\n        MVI  C,00H     ; C = quotient = 0\n\nLOOP:\n        CMP  B         ; compare A with divisor\n        JC   DONE      ; if A < B, we're done\n        SUB  B         ; A = A - divisor\n        INR  C         ; quotient++\n        JMP  LOOP\n\nDONE:\n        STA  8003H     ; store remainder\n        MOV  A,C\n        STA  8002H     ; store quotient\n        HLT\n\nDIVZERO:\n        MVI  A,0FFH\n        STA  8002H     ; error indicator\n        STA  8003H\n        HLT\n",
  expectedOutputs: "Quotient=05H (5), Remainder=04H (4) since 29 = 5*5 + 4",
  memoryInit: {
    "0x8000": 29,
    "0x8001": 5,
  },
};
