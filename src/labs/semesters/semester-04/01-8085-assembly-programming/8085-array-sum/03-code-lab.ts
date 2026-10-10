import { type CodeLabSection } from "@/labs/lab-content.types";

export const codeLab: CodeLabSection = {
  id: "code",
  type: "code-lab",
  title: "Program",
  language: "8085",
  description: "Sum all elements in a byte array; first byte is the count.",
  starterCode:
    "; Sum of array elements\n; Array at 8000H: first byte = count, rest = data\n; Output: SUM_L at 8010H, SUM_H at 8011H\n\n        ORG 8000H\nARRAY:  DB  05H        ; count = 5\n        DB  0AH        ; 10\n        DB  14H        ; 20\n        DB  1EH        ; 30\n        DB  28H        ; 40\n        DB  32H        ; 50\n\n        ORG 8100H\nSTART:\n        LXI  H,8000H   ; HL -> array start (count byte)\n        MOV  B,M       ; B = count\n        INX  H         ; HL -> first data element\n\n        MVI  A,00H     ; A = sum (low byte) = 0\n        MVI  C,00H     ; C = carry byte = 0\n\nLOOP:\n        ADD  M         ; A = A + array[HL]\n        JNC  NOCY\n        INR  C         ; C++ on carry\nNOCY:\n        INX  H         ; HL++ (next element)\n        DCR  B         ; B--\n        JNZ  LOOP      ; repeat while B != 0\n\n        STA  8010H     ; store low byte of sum\n        MOV  A,C\n        STA  8011H     ; store high byte of sum\n        HLT\n",
  expectedOutputs: "SUM = 0096H = 150 decimal. 8010H=96H, 8011H=00H",
  memoryInit: {},
};
