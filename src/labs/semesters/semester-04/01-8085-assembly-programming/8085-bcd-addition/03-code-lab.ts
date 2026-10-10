import { type CodeLabSection } from "@/labs/lab-content.types";

export const codeLab: CodeLabSection = {
  id: "code",
  type: "code-lab",
  title: "Program",
  language: "8085",
  description: "Add two packed BCD numbers and display a valid BCD result.",
  starterCode:
    "; BCD Addition using DAA\n; Input:  BCD1 at 8000H, BCD2 at 8001H  (packed BCD)\n; Output: BCD_SUM_L at 8002H, BCD_CARRY at 8003H\n\n        ORG 8000H\nBCD1:   DB  47H        ; BCD 47 (decimal 47)\nBCD2:   DB  36H        ; BCD 36 (decimal 36)\n\n        ORG 8100H\nSTART:\n        LDA  8000H     ; A = BCD1\n        MOV  B,A\n        LDA  8001H     ; A = BCD2\n        ADD  B         ; binary add — result may not be valid BCD\n        DAA            ; adjust to valid BCD\n        STA  8002H     ; store BCD result (lower byte)\n\n        MVI  A,00H\n        ADC  A         ; A = carry (0 or 1)\n        STA  8003H     ; store BCD carry\n\n        HLT\n",
  expectedOutputs: "BCD_SUM=83H (BCD 83 = decimal 83), BCD_CARRY=00H",
  memoryInit: {
    "0x8000": 71,
    "0x8001": 54,
  },
};
