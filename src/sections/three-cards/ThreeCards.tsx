import { ArrowRight } from "@/icons";
import {
  Body,
  Button,
  Eyebrow,
  Heading,
  HeadingPair,
  SectionIntro,
  SectionShell,
  SectionStack,
} from "@/ui";

import { CardsGrid } from "./CardsGrid";
import { IllustrationCard } from "./IllustrationCard";
import { ILLUSTRATION_CARDS } from "./three-cards.data";

export function ThreeCards() {
  return (
    <SectionShell scheme="light">
      <SectionStack>
        <SectionIntro>
          <Eyebrow>Core ECE components.</Eyebrow>
          <HeadingPair>
            {/* headingMeasureClassName — BREAKPOINT_PX.md = 921px */}
            <div className="md:max-w-[921px] [&_[data-accent]]:tracking-[-0.02em]">
              <Heading as="h2" size="lg" weight="light">
                Explore the building blocks of every circuit
              </Heading>
            </div>
            {/* BodyMeasure */}
            <div className="md:max-w-[571px]">
              <Body muted size="sm">
                From breadboard to LED to resistor — hands-on 3D interaction
                with the fundamentals of electronics.
              </Body>
            </div>
          </HeadingPair>
          <div className="flex flex-wrap gap-3">
            <Button
              href="/components"
              label="Explore all the components"
              variant="outlined"
              trailingIcon={
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight sizePx={16} />
                </span>
              }
            />
          </div>
        </SectionIntro>
        <CardsGrid>
          {ILLUSTRATION_CARDS.map((card) => (
            <IllustrationCard card={card} key={card.illustration} />
          ))}
        </CardsGrid>
      </SectionStack>
    </SectionShell>
  );
}
