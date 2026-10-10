import {
  Eyebrow,
  Heading,
  SectionIntro,
  SectionShell,
  SectionStack,
} from "@/ui";

import { FeatureCard } from "./FeatureCard";
import { FEATURE_CARDS } from "./feature-cards.data";

const centeredIntroClassName =
  "md:justify-items-center md:mx-auto md:max-w-[900px] md:text-center";

export function FeatureCards() {
  return (
    <SectionShell scheme="light">
      <SectionStack>
        <SectionIntro className={centeredIntroClassName}>
          <Eyebrow>More components to explore.</Eyebrow>
          <Heading as="h2" size="lg" weight="light">
            Store, control and interact — *the next layer of ECE*
          </Heading>
        </SectionIntro>
        <div className="grid gap-4 grid-cols-[minmax(0,1fr)] mx-auto max-w-[480px] w-full md:grid-flow-col md:auto-cols-[minmax(0,1fr)] md:grid-cols-none md:max-w-none">
          {FEATURE_CARDS.map((card) => (
            <FeatureCard card={card} key={card.component} />
          ))}
        </div>
      </SectionStack>
    </SectionShell>
  );
}
