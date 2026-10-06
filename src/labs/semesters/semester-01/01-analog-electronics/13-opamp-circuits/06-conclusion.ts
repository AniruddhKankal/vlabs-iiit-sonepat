import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The inverting and non-inverting op-amp amplifier circuits were successfully assembled and characterised. The inverting amplifier produced $A_v \\approx -9.96$, and the non-inverting amplifier produced $A_v \\approx +10.96$, compared with theoretical values of −10 and +11 respectively. The small discrepancy (< 0.5 %) arises from finite open-loop gain $A_{OL}$: the actual closed-loop gain is $A_{CL} = A_{OL}/(1 + A_{OL}/|A_{ideal}|)$.",
    "Phase inversion was clearly demonstrated in the inverting configuration — a positive DC input produced a negative output — while the non-inverting configuration preserved signal polarity. Output clipping occurred at $|V_{out}| \\approx 10.5\\,\\text{V}$ (supply rails minus headroom), confirming the LM741 is not a rail-to-rail device.",
    "These experiments establish the two fundamental op-amp feedback topologies that underpin virtually all linear analog circuit design: instrumentation amplifiers, active filters, integrators, differentiators, and summing amplifiers all use the virtual-ground principle demonstrated here. Replacing LM741 with a modern rail-to-rail op-amp (e.g. LM358, TL071) extends the usable output swing and bandwidth-gain product.",
  ],
};
