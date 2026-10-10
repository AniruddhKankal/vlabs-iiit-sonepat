import { type LabSection } from "@/labs/lab-content.types";

export const conclusion: LabSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The D flip-flop was studied using a master-slave arrangement. The output Q followed the D input at the active rising clock edge and retained the stored value between clock edges. In normal operation, Q and Q̅ were complementary, verifying the data-storage property of the D flip-flop.",
  ],
};
