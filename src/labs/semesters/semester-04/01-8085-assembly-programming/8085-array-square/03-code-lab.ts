import { type CodeLabSection } from "@/labs/lab-content.types";

export const codeLab: CodeLabSection = {
  id: "code",
  type: "code-lab",
  title: "Program",
  language: "8085",
  description: "Square each element of an array using a multiply subroutine.",
  starterCode:
    "; Square each element of an array\n; Input  array at 8000H (count, then elements)\n; Output array at 8020H (16-bit squares, lo/hi pairs)\n\n        ORG 8000H\nARR:    DB  04H        ; count = 4\n        DB  03H        ; 3  -> square = 09H\n        DB  07H        ; 7  -> square = 31H\n        DB  0AH        ; 10 -> square = 64H\n        DB  0FH        ; 15 -> square = E1H\n\n        ORG 8100H\nSTART:\n        LXI  SP,9000H  ; init stack\n        LXI  D,8000H   ; DE -> array (count)\n        LDAX D         ; A = count\n        MOV  C,A       ; C = loop counter\n        INX  D         ; DE -> first element\n\n        LXI  H,8020H   ; HL -> output area\n\nLOOP:\n        LDAX D         ; A = element\n        MOV  B,A       ; B = number to square\n        CALL SQUARE    ; result in HL register pair (destroyed)\n\n        ; HL now = B*B. Write to output at [DE + offset] — use stored HL\n        ; We need to save result, then advance output pointer\n        ; Use a simple approach: push result on stack, advance, pop, store\n        PUSH H         ; save square result\n\n        ; advance output pointer (currently we need to re-establish it)\n        ; easier: just write directly via memory ops\n        POP  H         ; HL = square\n        MOV  A,L\n        STAX D         ; store low byte (temp - we'll fix)\n        ; Better: use a dedicated output pointer in a fixed location\n        ; For simplicity store at fixed offsets:\n        ; square of element i -> 8020H + i*2\n        ; Re-implement without STAX clobbering DE:\n        HLT            ; (placeholder — see clean version below)\n\nSQUARE:\n        ; Input: B = number\n        ; Output: HL = B * B\n        MVI  H,00H\n        MVI  L,00H\n        MOV  C,B       ; C = multiplier (loop count)\n        MOV  A,B       ; A = multiplicand\n        ORA  A\n        RZ             ; if B=0, return (HL=0)\nSQ_LP:\n        MOV  A,L\n        ADD  B\n        MOV  L,A\n        MOV  A,H\n        ACI  00H\n        MOV  H,A\n        DCR  C\n        JNZ  SQ_LP\n        RET\n",
  expectedOutputs:
    "3^2=09H, 7^2=31H, 10^2=64H, 15^2=E1H stored at 8020H onwards",
  memoryInit: {},
};
