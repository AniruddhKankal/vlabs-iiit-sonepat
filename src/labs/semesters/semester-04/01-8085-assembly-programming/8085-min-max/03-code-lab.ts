import { type CodeLabSection } from "@/labs/lab-content.types";

export const codeLab: CodeLabSection = {
  id: "code",
  type: "code-lab",
  title: "Program",
  language: "8085",
  description: "Find the minimum and maximum elements in a byte array.",
  starterCode:
    "; Find MIN and MAX of an array\n; Array at 8000H: first byte = count\n; Output: MIN at 8010H, MAX at 8011H\n\n        ORG 8000H\nARR:    DB  06H        ; count = 6\n        DB  34H        ; 52\n        DB  12H        ; 18\n        DB  56H        ; 86\n        DB  23H        ; 35\n        DB  78H        ; 120\n        DB  09H        ; 9\n\n        ORG 8100H\nSTART:\n        LXI  H,8000H   ; HL -> count\n        MOV  B,M       ; B = count\n        INX  H         ; HL -> first element\n\n        MOV  A,M       ; A = first element\n        MOV  C,A       ; C = current MIN\n        MOV  D,A       ; D = current MAX\n        DCR  B         ; one element already loaded\n        JZ   DONE      ; only one element\n\nLOOP:\n        INX  H         ; advance pointer\n        MOV  A,M       ; A = next element\n\n        ; Check for new MIN\n        CMP  C         ; A - C\n        JNC  CHKMAX    ; A >= C, not a new min\n        MOV  C,A       ; C = new min\n\nCHKMAX:\n        MOV  A,M       ; reload element (CMP may not have changed A)\n        CMP  D         ; A - D\n        JC   NEXT      ; A < D, not a new max\n        MOV  D,A       ; D = new max\n\nNEXT:\n        DCR  B\n        JNZ  LOOP\n\nDONE:\n        MOV  A,C\n        STA  8010H     ; store MIN\n        MOV  A,D\n        STA  8011H     ; store MAX\n        HLT\n",
  expectedOutputs: "MIN=09H (9), MAX=78H (120) at 8010H and 8011H respectively",
  memoryInit: {},
};
