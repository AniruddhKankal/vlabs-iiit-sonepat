import { type CodeLabSection } from "@/labs/lab-content.types";

export const codeLab: CodeLabSection = {
  id: "code",
  type: "code-lab",
  title: "Program",
  language: "8085",
  description: "Multiply two 8-bit numbers using repeated addition.",
  starterCode:
    "; Multiply two 8-bit numbers (repeated addition)\n; Input:  MLTD (multiplicand) at 8000H\n;         MLTR (multiplier)   at 8001H\n; Output: PRODUCT (16-bit)   at 8002H (low), 8003H (high)\n\n        ORG 8000H\nMLTD:   DB  0CH        ; multiplicand = 12\nMLTR:   DB  0AH        ; multiplier   = 10\n\n        ORG 8100H\nSTART:\n        LDA  8001H     ; A = multiplier (loop count)\n        MOV  C,A       ; C = loop counter\n\n        LDA  8000H     ; A = multiplicand\n        MOV  B,A       ; B = multiplicand\n\n        MVI  H,00H     ; H = 0 (high byte of product)\n        MVI  L,00H     ; L = 0 (low byte of product)\n\nLOOP:\n        MOV  A,L       ; A = current low byte\n        ADD  B         ; A = A + multiplicand\n        MOV  L,A       ; L = new low byte\n        MOV  A,H\n        ACI  00H       ; H = H + carry\n        MOV  H,A\n\n        DCR  C         ; decrement counter\n        JNZ  LOOP      ; repeat if C != 0\n\n        SHLD 8002H     ; store HL (product) at 8002H/8003H\n        HLT\n",
  expectedOutputs: "Product = 0078H = 120 at 8002H (low=78H), 8003H (high=00H)",
  memoryInit: {
    "0x8000": 12,
    "0x8001": 10,
  },
};
