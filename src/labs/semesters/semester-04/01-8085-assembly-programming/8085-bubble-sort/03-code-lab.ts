import { type CodeLabSection } from "@/labs/lab-content.types";

export const codeLab: CodeLabSection = {
  id: "code",
  type: "code-lab",
  title: "Program",
  language: "8085",
  description: "Sort an array of bytes in ascending order using bubble sort.",
  starterCode:
    "; Bubble sort — ascending order\n; Array at 8000H: first byte = count\n; Sorted in place\n\n        ORG 8000H\nARR:    DB  05H        ; count = 5\n        DB  34H\n        DB  12H\n        DB  56H\n        DB  23H\n        DB  45H\n\n        ORG 8100H\nSTART:\n        LDA  8000H\n        DCR  A\n        STA  8050H     ; passes = count - 1\n\nOUTER:\n        LDA  8050H\n        ORA  A\n        JZ   STOP      ; no more passes\n\n        MVI  D,00H     ; D = swap flag = 0\n        LDA  8000H\n        DCR  A\n        MOV  C,A       ; C = inner loop count (n-1)\n\n        LXI  H,8001H   ; HL -> first element\n\nINNER:\n        MOV  A,M       ; A = arr[i]\n        INX  H\n        CMP  M         ; compare arr[i] vs arr[i+1]\n        JC   NOSWAP    ; arr[i] < arr[i+1], no swap\n        JZ   NOSWAP    ; equal, no swap\n\n        ; Swap arr[i] and arr[i+1]\n        MOV  B,A       ; B = arr[i]\n        MOV  A,M       ; A = arr[i+1]\n        DCX  H\n        MOV  M,A       ; arr[i] = arr[i+1]\n        INX  H\n        MOV  M,B       ; arr[i+1] = old arr[i]\n        MVI  D,01H     ; mark swap occurred\n\nNOSWAP:\n        DCR  C\n        JNZ  INNER\n\n        ; check swap flag\n        MOV  A,D\n        ORA  A\n        JZ   STOP      ; no swaps = sorted\n\n        LDA  8050H\n        DCR  A\n        STA  8050H\n        JMP  OUTER\n\nSTOP:\n        HLT\n",
  expectedOutputs: "Array sorted to 12H 23H 34H 45H 56H at 8001H-8005H",
  memoryInit: {},
};
