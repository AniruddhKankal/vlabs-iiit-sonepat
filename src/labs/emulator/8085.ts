// 8085 CPU Emulator — complete implementation

import { OPCODES } from "./instructions";

export interface CPU8085Flags {
  S: boolean; // Sign
  Z: boolean; // Zero
  AC: boolean; // Auxiliary Carry
  P: boolean; // Parity
  CY: boolean; // Carry
}

export interface CPU8085State {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  H: number;
  L: number;
  PC: number;
  SP: number;
  flags: CPU8085Flags;
  memory: Uint8Array;
  halted: boolean;
  cycles: number;
}

export interface StepResult {
  instruction: string; // disassembly e.g. "MOV A,B"
  address: number; // PC before execution
  changed: string[]; // which registers/flags changed
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function parity(v: number): boolean {
  // true if even number of 1-bits
  let bits = 0;
  let n = v & 0xff;
  while (n) {
    bits += n & 1;
    n >>= 1;
  }
  return (bits & 1) === 0;
}

function flagsFromByte(f: number): CPU8085Flags {
  return {
    S: !!(f & 0x80),
    Z: !!(f & 0x40),
    AC: !!(f & 0x10),
    P: !!(f & 0x04),
    CY: !!(f & 0x01),
  };
}

function flagsToByte(flags: CPU8085Flags): number {
  return (
    (flags.S ? 0x80 : 0) |
    (flags.Z ? 0x40 : 0) |
    (flags.AC ? 0x10 : 0) |
    (flags.P ? 0x04 : 0) |
    0x02 | // bit 1 always 1
    (flags.CY ? 0x01 : 0)
  );
}

// ── CPU class ────────────────────────────────────────────────────────────────

export class CPU8085 {
  private mem: Uint8Array;
  private A = 0;
  private B = 0;
  private C = 0;
  private D = 0;
  private E = 0;
  private H = 0;
  private L = 0;
  private PC = 0;
  private SP = 0xffff;
  private flags: CPU8085Flags = {
    S: false,
    Z: false,
    AC: false,
    P: false,
    CY: false,
  };
  private halted = false;
  private cycles = 0;

  constructor(memorySize = 65536) {
    this.mem = new Uint8Array(memorySize);
  }

  // ── Public accessors ──────────────────────────────────────────────────────

  getState(): CPU8085State {
    return {
      A: this.A,
      B: this.B,
      C: this.C,
      D: this.D,
      E: this.E,
      H: this.H,
      L: this.L,
      PC: this.PC,
      SP: this.SP,
      flags: { ...this.flags },
      memory: this.mem,
      halted: this.halted,
      cycles: this.cycles,
    };
  }

  setState(s: Partial<CPU8085State>): void {
    if (s.A !== undefined) this.A = s.A & 0xff;
    if (s.B !== undefined) this.B = s.B & 0xff;
    if (s.C !== undefined) this.C = s.C & 0xff;
    if (s.D !== undefined) this.D = s.D & 0xff;
    if (s.E !== undefined) this.E = s.E & 0xff;
    if (s.H !== undefined) this.H = s.H & 0xff;
    if (s.L !== undefined) this.L = s.L & 0xff;
    if (s.PC !== undefined) this.PC = s.PC & 0xffff;
    if (s.SP !== undefined) this.SP = s.SP & 0xffff;
    if (s.flags) this.flags = { ...this.flags, ...s.flags };
    if (s.halted !== undefined) this.halted = s.halted;
    if (s.cycles !== undefined) this.cycles = s.cycles;
  }

  reset(): void {
    this.A = this.B = this.C = this.D = this.E = this.H = this.L = 0;
    this.PC = 0;
    this.SP = 0xffff;
    this.flags = { S: false, Z: false, AC: false, P: false, CY: false };
    this.halted = false;
    this.cycles = 0;
    this.mem.fill(0);
  }

  loadProgram(bytes: number[], origin = 0): void {
    for (let i = 0; i < bytes.length; i++) {
      if (origin + i < this.mem.length) {
        this.mem[origin + i] = bytes[i] & 0xff;
      }
    }
    this.PC = origin;
  }

  readMem(addr: number): number {
    return this.mem[addr & 0xffff];
  }
  writeMem(addr: number, val: number): void {
    this.mem[addr & 0xffff] = val & 0xff;
  }

  getBC(): number {
    return (this.B << 8) | this.C;
  }
  getDE(): number {
    return (this.D << 8) | this.E;
  }
  getHL(): number {
    return (this.H << 8) | this.L;
  }
  setBC(v: number): void {
    this.B = (v >> 8) & 0xff;
    this.C = v & 0xff;
  }
  setDE(v: number): void {
    this.D = (v >> 8) & 0xff;
    this.E = v & 0xff;
  }
  setHL(v: number): void {
    this.H = (v >> 8) & 0xff;
    this.L = v & 0xff;
  }

  getPSW(): number {
    return (this.A << 8) | flagsToByte(this.flags);
  }

  // ── Register helpers ──────────────────────────────────────────────────────

  private getReg(r: number): number {
    switch (r) {
      case 0:
        return this.B;
      case 1:
        return this.C;
      case 2:
        return this.D;
      case 3:
        return this.E;
      case 4:
        return this.H;
      case 5:
        return this.L;
      case 6:
        return this.mem[this.getHL()]; // M
      case 7:
        return this.A;
      default:
        return 0;
    }
  }

  private setReg(r: number, v: number): void {
    v &= 0xff;
    switch (r) {
      case 0:
        this.B = v;
        break;
      case 1:
        this.C = v;
        break;
      case 2:
        this.D = v;
        break;
      case 3:
        this.E = v;
        break;
      case 4:
        this.H = v;
        break;
      case 5:
        this.L = v;
        break;
      case 6:
        this.mem[this.getHL()] = v;
        break; // M
      case 7:
        this.A = v;
        break;
    }
  }

  private static REG_NAMES = ["B", "C", "D", "E", "H", "L", "M", "A"];

  private regName(r: number): string {
    return CPU8085.REG_NAMES[r] ?? "?";
  }

  // ── Flag updates ──────────────────────────────────────────────────────────

  private updateSZP(result: number): void {
    const v = result & 0xff;
    this.flags.Z = v === 0;
    this.flags.S = !!(v & 0x80);
    this.flags.P = parity(v);
  }

  private updateArithmetic(
    a: number,
    b: number,
    result: number,
    sub = false,
  ): void {
    const v = result & 0xff;
    this.updateSZP(v);
    this.flags.CY = sub ? result < 0 || result > 0xff : result > 0xff;
    // Auxiliary carry: carry from bit 3 to bit 4
    if (sub) {
      this.flags.AC = (a & 0x0f) - (b & 0x0f) < 0;
    } else {
      this.flags.AC = (a & 0x0f) + (b & 0x0f) > 0x0f;
    }
  }

  // ── Stack helpers ─────────────────────────────────────────────────────────

  private push16(v: number): void {
    this.SP = (this.SP - 1) & 0xffff;
    this.mem[this.SP] = (v >> 8) & 0xff;
    this.SP = (this.SP - 1) & 0xffff;
    this.mem[this.SP] = v & 0xff;
  }

  private pop16(): number {
    const lo = this.mem[this.SP];
    this.SP = (this.SP + 1) & 0xffff;
    const hi = this.mem[this.SP];
    this.SP = (this.SP + 1) & 0xffff;
    return (hi << 8) | lo;
  }

  // ── Fetch helpers ─────────────────────────────────────────────────────────

  private fetch8(): number {
    const v = this.mem[this.PC];
    this.PC = (this.PC + 1) & 0xffff;
    return v;
  }

  private fetch16(): number {
    const lo = this.fetch8();
    const hi = this.fetch8();
    return (hi << 8) | lo;
  }

  // ── Step ──────────────────────────────────────────────────────────────────

  step(): StepResult | null {
    if (this.halted) return null;

    const addr = this.PC;
    const opcode = this.fetch8();
    const instr = OPCODES.get(opcode);

    // Snapshot for change detection
    const before = {
      A: this.A,
      B: this.B,
      C: this.C,
      D: this.D,
      E: this.E,
      H: this.H,
      L: this.L,
      PC: this.PC,
      SP: this.SP,
      ...this.flags,
    };

    let mnemonic =
      instr?.mnemonic ??
      `DB ${opcode.toString(16).toUpperCase().padStart(2, "0")}H`;

    // ── Execute ──────────────────────────────────────────────────────────────
    this.executeOpcode(opcode, mnemonic);
    this.cycles += instr?.cycles ?? 4;

    // Detect changes
    const changed: string[] = [];
    if (this.A !== before.A) changed.push("A");
    if (this.B !== before.B) changed.push("B");
    if (this.C !== before.C) changed.push("C");
    if (this.D !== before.D) changed.push("D");
    if (this.E !== before.E) changed.push("E");
    if (this.H !== before.H) changed.push("H");
    if (this.L !== before.L) changed.push("L");
    if (this.PC !== before.PC) changed.push("PC");
    if (this.SP !== before.SP) changed.push("SP");
    if (this.flags.S !== before.S) changed.push("S");
    if (this.flags.Z !== before.Z) changed.push("Z");
    if (this.flags.AC !== before.AC) changed.push("AC");
    if (this.flags.P !== before.P) changed.push("P");
    if (this.flags.CY !== before.CY) changed.push("CY");

    return { instruction: mnemonic, address: addr, changed };
  }

  private executeOpcode(opcode: number, mnemonic: string): void {
    // ── NOP ──────────────────────────────────────────────────────────────────
    if (opcode === 0x00) return;

    // ── HLT ──────────────────────────────────────────────────────────────────
    if (opcode === 0x76) {
      this.halted = true;
      return;
    }

    // ── MOV r1,r2  (0x40–0x7F) ───────────────────────────────────────────────
    if (opcode >= 0x40 && opcode <= 0x7f) {
      const dst = (opcode >> 3) & 0x07;
      const src = opcode & 0x07;
      this.setReg(dst, this.getReg(src));
      return;
    }

    // ── MVI r, d8 ─────────────────────────────────────────────────────────────
    if (
      opcode === 0x06 ||
      opcode === 0x0e ||
      opcode === 0x16 ||
      opcode === 0x1e ||
      opcode === 0x26 ||
      opcode === 0x2e ||
      opcode === 0x36 ||
      opcode === 0x3e
    ) {
      const regMap: Record<number, number> = {
        0x06: 0,
        0x0e: 1,
        0x16: 2,
        0x1e: 3,
        0x26: 4,
        0x2e: 5,
        0x36: 6,
        0x3e: 7,
      };
      const d8 = this.fetch8();
      this.setReg(regMap[opcode], d8);
      return;
    }

    // ── LXI rp, d16 ───────────────────────────────────────────────────────────
    if (opcode === 0x01) {
      const v = this.fetch16();
      this.setBC(v);
      return;
    }
    if (opcode === 0x11) {
      const v = this.fetch16();
      this.setDE(v);
      return;
    }
    if (opcode === 0x21) {
      const v = this.fetch16();
      this.setHL(v);
      return;
    }
    if (opcode === 0x31) {
      this.SP = this.fetch16();
      return;
    }

    // ── LDA / STA / LHLD / SHLD ───────────────────────────────────────────────
    if (opcode === 0x3a) {
      const a = this.fetch16();
      this.A = this.mem[a];
      return;
    }
    if (opcode === 0x32) {
      const a = this.fetch16();
      this.mem[a] = this.A;
      return;
    }
    if (opcode === 0x2a) {
      const a = this.fetch16();
      this.L = this.mem[a];
      this.H = this.mem[(a + 1) & 0xffff];
      return;
    }
    if (opcode === 0x22) {
      const a = this.fetch16();
      this.mem[a] = this.L;
      this.mem[(a + 1) & 0xffff] = this.H;
      return;
    }

    // ── LDAX / STAX ───────────────────────────────────────────────────────────
    if (opcode === 0x0a) {
      this.A = this.mem[this.getBC()];
      return;
    }
    if (opcode === 0x1a) {
      this.A = this.mem[this.getDE()];
      return;
    }
    if (opcode === 0x02) {
      this.mem[this.getBC()] = this.A;
      return;
    }
    if (opcode === 0x12) {
      this.mem[this.getDE()] = this.A;
      return;
    }

    // ── XCHG ──────────────────────────────────────────────────────────────────
    if (opcode === 0xeb) {
      const tH = this.H,
        tL = this.L;
      this.H = this.D;
      this.L = this.E;
      this.D = tH;
      this.E = tL;
      return;
    }

    // ── ADD r / ADD M  (0x80–0x87) ────────────────────────────────────────────
    if (opcode >= 0x80 && opcode <= 0x87) {
      const r = opcode & 0x07;
      const val = this.getReg(r);
      const result = this.A + val;
      this.updateArithmetic(this.A, val, result, false);
      this.A = result & 0xff;
      return;
    }

    // ── ADC r / ADC M  (0x88–0x8F) ────────────────────────────────────────────
    if (opcode >= 0x88 && opcode <= 0x8f) {
      const r = opcode & 0x07;
      const val = this.getReg(r);
      const cy = this.flags.CY ? 1 : 0;
      const result = this.A + val + cy;
      this.updateArithmetic(this.A, val + cy, result, false);
      this.A = result & 0xff;
      return;
    }

    // ── ADI / ACI ─────────────────────────────────────────────────────────────
    if (opcode === 0xc6) {
      const d8 = this.fetch8();
      const result = this.A + d8;
      this.updateArithmetic(this.A, d8, result, false);
      this.A = result & 0xff;
      return;
    }
    if (opcode === 0xce) {
      const d8 = this.fetch8();
      const cy = this.flags.CY ? 1 : 0;
      const result = this.A + d8 + cy;
      this.updateArithmetic(this.A, d8 + cy, result, false);
      this.A = result & 0xff;
      return;
    }

    // ── SUB r / SUB M  (0x90–0x97) ────────────────────────────────────────────
    if (opcode >= 0x90 && opcode <= 0x97) {
      const r = opcode & 0x07;
      const val = this.getReg(r);
      const result = this.A - val;
      this.flags.CY = result < 0;
      this.flags.AC = (this.A & 0x0f) - (val & 0x0f) < 0;
      this.updateSZP(result & 0xff);
      this.A = result & 0xff;
      return;
    }

    // ── SBB r / SBB M  (0x98–0x9F) ────────────────────────────────────────────
    if (opcode >= 0x98 && opcode <= 0x9f) {
      const r = opcode & 0x07;
      const val = this.getReg(r);
      const cy = this.flags.CY ? 1 : 0;
      const result = this.A - val - cy;
      this.flags.CY = result < 0;
      this.flags.AC = (this.A & 0x0f) - (val & 0x0f) - cy < 0;
      this.updateSZP(result & 0xff);
      this.A = result & 0xff;
      return;
    }

    // ── SUI / SBI ─────────────────────────────────────────────────────────────
    if (opcode === 0xd6) {
      const d8 = this.fetch8();
      const result = this.A - d8;
      this.flags.CY = result < 0;
      this.flags.AC = (this.A & 0x0f) - (d8 & 0x0f) < 0;
      this.updateSZP(result & 0xff);
      this.A = result & 0xff;
      return;
    }
    if (opcode === 0xde) {
      const d8 = this.fetch8();
      const cy = this.flags.CY ? 1 : 0;
      const result = this.A - d8 - cy;
      this.flags.CY = result < 0;
      this.flags.AC = (this.A & 0x0f) - (d8 & 0x0f) - cy < 0;
      this.updateSZP(result & 0xff);
      this.A = result & 0xff;
      return;
    }

    // ── INR r  (0x04, 0x0C, 0x14, 0x1C, 0x24, 0x2C, 0x34, 0x3C) ─────────────
    if ([0x04, 0x0c, 0x14, 0x1c, 0x24, 0x2c, 0x34, 0x3c].includes(opcode)) {
      const rMap: Record<number, number> = {
        0x04: 0,
        0x0c: 1,
        0x14: 2,
        0x1c: 3,
        0x24: 4,
        0x2c: 5,
        0x34: 6,
        0x3c: 7,
      };
      const r = rMap[opcode];
      const old = this.getReg(r);
      const result = (old + 1) & 0xff;
      this.flags.AC = (old & 0x0f) === 0x0f;
      this.updateSZP(result);
      // INR does NOT change CY
      this.setReg(r, result);
      return;
    }

    // ── DCR r  (0x05, 0x0D, 0x15, 0x1D, 0x25, 0x2D, 0x35, 0x3D) ─────────────
    if ([0x05, 0x0d, 0x15, 0x1d, 0x25, 0x2d, 0x35, 0x3d].includes(opcode)) {
      const rMap: Record<number, number> = {
        0x05: 0,
        0x0d: 1,
        0x15: 2,
        0x1d: 3,
        0x25: 4,
        0x2d: 5,
        0x35: 6,
        0x3d: 7,
      };
      const r = rMap[opcode];
      const old = this.getReg(r);
      const result = (old - 1) & 0xff;
      this.flags.AC = (old & 0x0f) === 0x00;
      this.updateSZP(result);
      this.setReg(r, result);
      return;
    }

    // ── INX / DCX rp ──────────────────────────────────────────────────────────
    if (opcode === 0x03) {
      this.setBC((this.getBC() + 1) & 0xffff);
      return;
    }
    if (opcode === 0x13) {
      this.setDE((this.getDE() + 1) & 0xffff);
      return;
    }
    if (opcode === 0x23) {
      this.setHL((this.getHL() + 1) & 0xffff);
      return;
    }
    if (opcode === 0x33) {
      this.SP = (this.SP + 1) & 0xffff;
      return;
    }
    if (opcode === 0x0b) {
      this.setBC((this.getBC() - 1) & 0xffff);
      return;
    }
    if (opcode === 0x1b) {
      this.setDE((this.getDE() - 1) & 0xffff);
      return;
    }
    if (opcode === 0x2b) {
      this.setHL((this.getHL() - 1) & 0xffff);
      return;
    }
    if (opcode === 0x3b) {
      this.SP = (this.SP - 1) & 0xffff;
      return;
    }

    // ── DAD rp ────────────────────────────────────────────────────────────────
    if (opcode === 0x09) {
      const r = this.getHL() + this.getBC();
      this.flags.CY = r > 0xffff;
      this.setHL(r & 0xffff);
      return;
    }
    if (opcode === 0x19) {
      const r = this.getHL() + this.getDE();
      this.flags.CY = r > 0xffff;
      this.setHL(r & 0xffff);
      return;
    }
    if (opcode === 0x29) {
      const r = this.getHL() * 2;
      this.flags.CY = r > 0xffff;
      this.setHL(r & 0xffff);
      return;
    }
    if (opcode === 0x39) {
      const r = this.getHL() + this.SP;
      this.flags.CY = r > 0xffff;
      this.setHL(r & 0xffff);
      return;
    }

    // ── DAA ───────────────────────────────────────────────────────────────────
    if (opcode === 0x27) {
      let a = this.A;
      let correction = 0;
      if ((a & 0x0f) > 9 || this.flags.AC) correction |= 0x06;
      if (a > 0x99 || this.flags.CY) {
        correction |= 0x60;
        this.flags.CY = true;
      }
      const result = a + correction;
      this.flags.AC = (a & 0x0f) + (correction & 0x0f) > 0x0f;
      this.A = result & 0xff;
      this.updateSZP(this.A);
      return;
    }

    // ── ANA r / ANA M  (0xA0–0xA7) ───────────────────────────────────────────
    if (opcode >= 0xa0 && opcode <= 0xa7) {
      const r = opcode & 0x07;
      this.A = this.A & this.getReg(r) & 0xff;
      this.flags.CY = false;
      this.flags.AC = true; // ANA always sets AC
      this.updateSZP(this.A);
      return;
    }

    // ── ORA r / ORA M  (0xB0–0xB7) ───────────────────────────────────────────
    if (opcode >= 0xb0 && opcode <= 0xb7) {
      const r = opcode & 0x07;
      this.A = (this.A | this.getReg(r)) & 0xff;
      this.flags.CY = false;
      this.flags.AC = false;
      this.updateSZP(this.A);
      return;
    }

    // ── XRA r / XRA M  (0xA8–0xAF) ───────────────────────────────────────────
    if (opcode >= 0xa8 && opcode <= 0xaf) {
      const r = opcode & 0x07;
      this.A = (this.A ^ this.getReg(r)) & 0xff;
      this.flags.CY = false;
      this.flags.AC = false;
      this.updateSZP(this.A);
      return;
    }

    // ── CMP r / CMP M  (0xB8–0xBF) ───────────────────────────────────────────
    if (opcode >= 0xb8 && opcode <= 0xbf) {
      const r = opcode & 0x07;
      const val = this.getReg(r);
      const result = this.A - val;
      this.flags.CY = result < 0;
      this.flags.AC = (this.A & 0x0f) - (val & 0x0f) < 0;
      this.updateSZP(result & 0xff);
      return;
    }

    // ── ANI / ORI / XRI / CPI ────────────────────────────────────────────────
    if (opcode === 0xe6) {
      const d8 = this.fetch8();
      this.A &= d8;
      this.flags.CY = false;
      this.flags.AC = true;
      this.updateSZP(this.A);
      return;
    }
    if (opcode === 0xf6) {
      const d8 = this.fetch8();
      this.A |= d8;
      this.flags.CY = false;
      this.flags.AC = false;
      this.updateSZP(this.A);
      return;
    }
    if (opcode === 0xee) {
      const d8 = this.fetch8();
      this.A ^= d8;
      this.flags.CY = false;
      this.flags.AC = false;
      this.updateSZP(this.A);
      return;
    }
    if (opcode === 0xfe) {
      const d8 = this.fetch8();
      const result = this.A - d8;
      this.flags.CY = result < 0;
      this.flags.AC = (this.A & 0x0f) - (d8 & 0x0f) < 0;
      this.updateSZP(result & 0xff);
      return;
    }

    // ── Rotate ───────────────────────────────────────────────────────────────
    if (opcode === 0x07) {
      // RLC
      const bit7 = (this.A >> 7) & 1;
      this.A = ((this.A << 1) | bit7) & 0xff;
      this.flags.CY = !!bit7;
      return;
    }
    if (opcode === 0x0f) {
      // RRC
      const bit0 = this.A & 1;
      this.A = ((this.A >> 1) | (bit0 << 7)) & 0xff;
      this.flags.CY = !!bit0;
      return;
    }
    if (opcode === 0x17) {
      // RAL
      const bit7 = (this.A >> 7) & 1;
      this.A = ((this.A << 1) | (this.flags.CY ? 1 : 0)) & 0xff;
      this.flags.CY = !!bit7;
      return;
    }
    if (opcode === 0x1f) {
      // RAR
      const bit0 = this.A & 1;
      this.A = ((this.A >> 1) | ((this.flags.CY ? 1 : 0) << 7)) & 0xff;
      this.flags.CY = !!bit0;
      return;
    }

    // ── CMA / CMC / STC ───────────────────────────────────────────────────────
    if (opcode === 0x2f) {
      this.A = ~this.A & 0xff;
      return;
    }
    if (opcode === 0x3f) {
      this.flags.CY = !this.flags.CY;
      return;
    }
    if (opcode === 0x37) {
      this.flags.CY = true;
      return;
    }

    // ── JMP and conditionals ──────────────────────────────────────────────────
    if (opcode === 0xc3) {
      this.PC = this.fetch16();
      return;
    }
    if (opcode === 0xda) {
      const a = this.fetch16();
      if (this.flags.CY) this.PC = a;
      return;
    }
    if (opcode === 0xd2) {
      const a = this.fetch16();
      if (!this.flags.CY) this.PC = a;
      return;
    }
    if (opcode === 0xca) {
      const a = this.fetch16();
      if (this.flags.Z) this.PC = a;
      return;
    }
    if (opcode === 0xc2) {
      const a = this.fetch16();
      if (!this.flags.Z) this.PC = a;
      return;
    }
    if (opcode === 0xf2) {
      const a = this.fetch16();
      if (!this.flags.S) this.PC = a;
      return;
    }
    if (opcode === 0xfa) {
      const a = this.fetch16();
      if (this.flags.S) this.PC = a;
      return;
    }
    if (opcode === 0xea) {
      const a = this.fetch16();
      if (this.flags.P) this.PC = a;
      return;
    }
    if (opcode === 0xe2) {
      const a = this.fetch16();
      if (!this.flags.P) this.PC = a;
      return;
    }
    if (opcode === 0xe9) {
      this.PC = this.getHL();
      return;
    }

    // ── CALL and conditionals ─────────────────────────────────────────────────
    if (opcode === 0xcd) {
      const a = this.fetch16();
      this.push16(this.PC);
      this.PC = a;
      return;
    }
    if (opcode === 0xdc) {
      const a = this.fetch16();
      if (this.flags.CY) {
        this.push16(this.PC);
        this.PC = a;
      }
      return;
    }
    if (opcode === 0xd4) {
      const a = this.fetch16();
      if (!this.flags.CY) {
        this.push16(this.PC);
        this.PC = a;
      }
      return;
    }
    if (opcode === 0xcc) {
      const a = this.fetch16();
      if (this.flags.Z) {
        this.push16(this.PC);
        this.PC = a;
      }
      return;
    }
    if (opcode === 0xc4) {
      const a = this.fetch16();
      if (!this.flags.Z) {
        this.push16(this.PC);
        this.PC = a;
      }
      return;
    }
    if (opcode === 0xf4) {
      const a = this.fetch16();
      if (!this.flags.S) {
        this.push16(this.PC);
        this.PC = a;
      }
      return;
    }
    if (opcode === 0xfc) {
      const a = this.fetch16();
      if (this.flags.S) {
        this.push16(this.PC);
        this.PC = a;
      }
      return;
    }
    if (opcode === 0xec) {
      const a = this.fetch16();
      if (this.flags.P) {
        this.push16(this.PC);
        this.PC = a;
      }
      return;
    }
    if (opcode === 0xe4) {
      const a = this.fetch16();
      if (!this.flags.P) {
        this.push16(this.PC);
        this.PC = a;
      }
      return;
    }

    // ── RET and conditionals ──────────────────────────────────────────────────
    if (opcode === 0xc9) {
      this.PC = this.pop16();
      return;
    }
    if (opcode === 0xd8) {
      if (this.flags.CY) this.PC = this.pop16();
      return;
    }
    if (opcode === 0xd0) {
      if (!this.flags.CY) this.PC = this.pop16();
      return;
    }
    if (opcode === 0xc8) {
      if (this.flags.Z) this.PC = this.pop16();
      return;
    }
    if (opcode === 0xc0) {
      if (!this.flags.Z) this.PC = this.pop16();
      return;
    }
    if (opcode === 0xf0) {
      if (!this.flags.S) this.PC = this.pop16();
      return;
    }
    if (opcode === 0xf8) {
      if (this.flags.S) this.PC = this.pop16();
      return;
    }
    if (opcode === 0xe8) {
      if (this.flags.P) this.PC = this.pop16();
      return;
    }
    if (opcode === 0xe0) {
      if (!this.flags.P) this.PC = this.pop16();
      return;
    }

    // ── RST 0-7 ───────────────────────────────────────────────────────────────
    if ((opcode & 0xc7) === 0xc7) {
      const vec = opcode & 0x38;
      this.push16(this.PC);
      this.PC = vec;
      return;
    }

    // ── PUSH / POP ────────────────────────────────────────────────────────────
    if (opcode === 0xc5) {
      this.push16(this.getBC());
      return;
    }
    if (opcode === 0xd5) {
      this.push16(this.getDE());
      return;
    }
    if (opcode === 0xe5) {
      this.push16(this.getHL());
      return;
    }
    if (opcode === 0xf5) {
      this.push16(this.getPSW());
      return;
    }
    if (opcode === 0xc1) {
      this.setBC(this.pop16());
      return;
    }
    if (opcode === 0xd1) {
      this.setDE(this.pop16());
      return;
    }
    if (opcode === 0xe1) {
      this.setHL(this.pop16());
      return;
    }
    if (opcode === 0xf1) {
      const psw = this.pop16();
      this.A = (psw >> 8) & 0xff;
      this.flags = flagsFromByte(psw & 0xff);
      return;
    }

    // ── XTHL / SPHL ───────────────────────────────────────────────────────────
    if (opcode === 0xe3) {
      const sp = this.SP;
      const lo = this.mem[sp];
      const hi = this.mem[(sp + 1) & 0xffff];
      this.mem[sp] = this.L;
      this.mem[(sp + 1) & 0xffff] = this.H;
      this.L = lo;
      this.H = hi;
      return;
    }
    if (opcode === 0xf9) {
      this.SP = this.getHL();
      return;
    }

    // ── I/O ───────────────────────────────────────────────────────────────────
    if (opcode === 0xdb) {
      this.fetch8();
      /* IN port — no-op in emulator */ return;
    }
    if (opcode === 0xd3) {
      this.fetch8();
      /* OUT port — no-op in emulator */ return;
    }

    // ── EI / DI ───────────────────────────────────────────────────────────────
    if (opcode === 0xfb) return; // EI — no-op
    if (opcode === 0xf3) return; // DI — no-op

    // Unknown opcode — treat as NOP
  }

  run(maxSteps = 100000): StepResult[] {
    const results: StepResult[] = [];
    for (let i = 0; i < maxSteps; i++) {
      if (this.halted) break;
      const r = this.step();
      if (r) results.push(r);
    }
    return results;
  }
}
