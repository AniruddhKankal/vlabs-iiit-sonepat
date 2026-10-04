import { MenuStyleProvider } from "@/platform/menu-style";
import { Menu } from "@/sections/menu";
import { Footer } from "@/sections/footer";
import {
  Body,
  Eyebrow,
  Heading,
  HeadingPair,
  SectionIntro,
  SectionShell,
  SectionStack,
} from "@/ui";
import { IllustrationCard } from "@/sections/three-cards/IllustrationCard";
import { COMPONENTS_DATA } from "@/sections/components/components.data";

export default function ComponentsPage() {
  const cards = Object.values(COMPONENTS_DATA).map((comp) => ({
    heading: comp.name,
    body: comp.tagline,
    illustration: comp.kind,
    actionHref: `/components/${comp.slug}`,
    attribution: {
      role: "Component",
      company: comp.specs[0]?.value || "Detail",
    },
  }));

  return (
    <MenuStyleProvider>
      <Menu scheme="muted" />
      <main>
        <SectionShell scheme="light">
          <SectionStack>
            <SectionIntro>
              <Eyebrow>Component Library</Eyebrow>
              <HeadingPair>
                <div className="md:max-w-[921px] [&_[data-accent]]:tracking-[-0.02em]">
                  <Heading as="h1" size="lg" weight="light">
                    Explore all electronics components
                  </Heading>
                </div>
                <div className="md:max-w-[571px]">
                  <Body muted size="sm">
                    Interactive 3D models and detailed specifications for every building block in our virtual laboratory.
                  </Body>
                </div>
              </HeadingPair>
            </SectionIntro>
            
            <div className="grid gap-[calc(var(--spacing-base)*4)] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <IllustrationCard card={card} key={card.illustration} />
              ))}
            </div>
          </SectionStack>
        </SectionShell>
      </main>
      <Footer />
    </MenuStyleProvider>
  );
}
