import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "GPIO interfacing with LEDs and switches has been successfully demonstrated. LED output circuits using 330 Ω current-limiting resistors draw ≈9 mA per LED, well within the GPIO maximum rating of 40 mA. The GPIO output voltage levels are clean: HIGH ≥ 4.8 V, LOW ≤ 0.05 V.",
    "Switch input circuits with 10 kΩ pull-down resistors provide stable, well-defined logic levels: ≈5 V when pressed, ≈0 V when open. Floating inputs without pull-down resistors produced unreliable readings, confirming the necessity of defined pull resistors in all switch input circuits.",
    "The interactive LED-switch logic demonstrated successful digital read-write GPIO operation. Debouncing via software delay eliminated false triggering from mechanical switch bounce. These fundamental GPIO skills are the prerequisite for all MCU-based embedded systems work, including sensor interfacing, motor control, and communication protocol implementation.",
  ],
};
