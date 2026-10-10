import { type CodeLabSection } from "@/labs/lab-content.types";

export const codeLab: CodeLabSection = {
  id: "code",
  type: "code-lab",
  title: "Program",
  language: "8085",
  description: "Convert packed BCD to binary and binary back to packed BCD.",
  starterCode:
    "; BCD <-> Binary conversion\n; BCD input at 8000H  -> binary output at 8001H\n; Binary input at 8002H -> BCD output at 8003H\n\n        ORG 8000H\nBCD_IN:  DB  47H        ; BCD 47 = decimal 47\nBIN_OUT: DB  00H\nBIN_IN:  DB  2FH        ; binary 47 = 2FH\nBCD_OUT: DB  00H\n\n        ORG 8100H\nSTART:\n        ; ── BCD to Binary ─────────────────────────\n        LDA  8000H     ; A = packed BCD\n        MOV  B,A       ; save\n        ANI  0F0H      ; mask lower nibble, keep upper\n        RRC            ; shift right 4 times\n        RRC\n        RRC\n        RRC            ; A = tens digit (0-9)\n        MOV  C,A       ; C = tens\n\n        ; multiply tens by 10\n        MVI  D,00H     ; D = result of tens * 10\n        ORA  C\n        JZ   ADD_UNITS\nMUL10:\n        MOV  A,D\n        ADI  0AH       ; add 10\n        MOV  D,A\n        DCR  C\n        JNZ  MUL10\n\nADD_UNITS:\n        MOV  A,B\n        ANI  0FH       ; A = units digit\n        ADD  D         ; A = tens*10 + units\n        STA  8001H     ; store binary result\n\n        ; ── Binary to BCD ─────────────────────────\n        LDA  8002H     ; A = binary number\n        MVI  B,00H     ; B = tens count\n\nTENS:\n        CPI  0AH       ; A >= 10?\n        JC   UNITS_D   ; no, exit\n        SUI  0AH       ; subtract 10\n        INR  B         ; tens++\n        JMP  TENS\n\nUNITS_D:\n        ; A = units, B = tens\n        MOV  C,A       ; C = units digit\n        MOV  A,B\n        RLC            ; shift tens left 4\n        RLC\n        RLC\n        RLC\n        ORA  C         ; combine: (tens << 4) | units\n        STA  8003H     ; store BCD result\n\n        HLT\n",
  expectedOutputs: "BCD 47H -> Binary 2FH=47; Binary 2FH=47 -> BCD 47H",
  memoryInit: {},
};
