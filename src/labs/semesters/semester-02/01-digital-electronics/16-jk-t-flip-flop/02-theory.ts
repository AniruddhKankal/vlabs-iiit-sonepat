import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "A JK flip-flop stores one bit and has inputs J, K and CLK, with outputs Q and Q̅. At the active clock edge, J=0 and K=0 holds the state, J=0 and K=1 resets Q to 0, J=1 and K=0 sets Q to 1, and J=1 and K=1 toggles Q.",
    "A clocked JK circuit can be formed from two cross-coupled NAND gates (the storage latch) and input-gating logic. Since the available AND and NAND primitives are two-input gates, each input path first forms J·CLK or K·CLK with an AND gate, then NANDs that result with the opposite feedback output to produce an active-low latch input.",
    "A T flip-flop is obtained by connecting J and K together. The common input is T: T=0 holds the stored state and T=1 toggles it at each active clock edge.",
    "Characteristic equations: JK: Q(next)=JQ̅ + K̅Q. T: Q(next)=T ⊕ Q. Outputs should be complementary in normal operation. This experiment's 3D scene is a gate-level visual wiring guide; validate electrical simulation behavior separately if the renderer does not model logic propagation.",
  ],
};
