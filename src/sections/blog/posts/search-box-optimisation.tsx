import { type ReactNode } from "react";
import { Prose, Callout } from "@/sections/docs/doc-primitives";

function L({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="text-[var(--color-blue)] underline decoration-[var(--color-blue)]/30 underline-offset-[3px] hover:decoration-[var(--color-blue)] transition-[text-decoration-color] duration-150"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function BlogImage({
  src,
  alt,
  caption,
  wide,
}: {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
}) {
  return (
    <figure
      className={[
        "my-[calc(var(--spacing-base)*8)] flex flex-col gap-[calc(var(--spacing-base)*2)]",
        wide ? "-mx-[calc(var(--spacing-base)*8)]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={src}
        alt={alt}
        className="w-full object-cover rounded-[calc(var(--radius-base)*2)] border border-[rgba(0,0,0,0.07)]"
      />
      {caption && (
        <figcaption className="text-[var(--ink-subtle)] font-[family-name:var(--font-sans),sans-serif] text-[13px] text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function PostSearchBoxArchitectureProblem() {
  return (
    <Prose>
      <p>
        There is a dangerous stage in building software where a feature starts
        looking finished.
      </p>

      <p>
        The search box looked good.
      </p>

      <p>
        ⌘K worked. Results appeared quickly. Theory and procedure text were
        searchable. Breadcrumbs made the results understandable. Circuit
        previews made the whole thing feel like part of VLabs instead of just
        another input field.
      </p>

      <p>
        And then we opened the browser and asked a less exciting question:
      </p>

      <p>
        <strong>
          What exactly did we just make the browser download to achieve this?
        </strong>
      </p>

      <p>
        That question changed the implementation completely.
      </p>

      <h2>The search we started with</h2>

      <p>
        The first version of search was small enough that there wasn't much to
        explain.
      </p>

      <p>
        There was an input box and a dropdown underneath it. The matching logic
        looked roughly like:
      </p>

      <pre>
        <code>
{`s.title.includes(q) ||
s.description.includes(q) ||
s.tags.some(...)`}
        </code>
      </pre>

      <p>
        It searched <code>ALL_EXPERIMENTS</code>. That worked because{" "}
        <code>ALL_EXPERIMENTS</code> was small and the information it carried
        was small too: title, description, tags, circuit ID.
      </p>

      <p>
        But that also meant search only knew about the experiment's metadata.
      </p>

      <p>
        The actual lab content lived somewhere else.
      </p>

      <p>
        Theory. Procedure steps. Descriptions. The things a student would
        actually want to search for.
      </p>

      <p>
        If you searched for the name of an experiment, everything was fine.
        If you remembered a phrase from its theory section, the search had no
        idea what you were talking about.
      </p>

      <h2>We wanted the search to understand the labs</h2>

      <p>
        The redesign started with the UI.
      </p>

      <p>
        Instead of a small dropdown, the target was a proper command palette:
        centered on the page, opened with <code>⌘K</code>, with filters,
        breadcrumbs, snippets and experiment previews.
      </p>

      <p>
        But the UI requirement exposed a much bigger product requirement:
      </p>

      <p>
        <strong>Search shouldn't just find experiments. It should find things
        inside experiments.</strong>
      </p>

      <BlogImage
        src="/blog/05-search-optimization/search-final.png"
        alt="VLabs command palette showing full-text search results for full-wave"
        caption="The new search palette — results are grouped by semester, subject, experiment and content section."
        wide
      />

      <p>
        That meant indexing the actual content of every lab.
      </p>

      <p>
        So we built the first version of the search index.
      </p>

      <h2>The first index had a problem</h2>

      <p>
        The first implementation was conceptually straightforward. We created a
        <code>SearchIndexEntry</code> type, flattened the experiments and their
        content into a searchable array, and let the command palette search
        through it.
      </p>

      <p>
        There was just one uncomfortable detail.
      </p>

      <p>
        We were building that index on the client.
      </p>

      <p>
        Which meant importing the real lab content into the browser so the
        browser could build the search index itself.
      </p>

      <p>
        Every semester.
      </p>

      <p>
        Every subject.
      </p>

      <p>
        Every experiment.
      </p>

      <p>
        Every theory paragraph and procedure step that we wanted to search.
      </p>

      <p>
        We had solved the <em>search problem</em> by creating a{" "}
        <em>bundle problem</em>.
      </p>

      <p>
        The browser didn't need to know how the search index was built. It only
        needed the finished index.
      </p>

      <h2>Move the expensive part to build time</h2>

      <p>
        The solution was to stop making the browser build something that could
        be built before the browser ever existed.
      </p>

      <p>
        We moved index generation into a Node build script:
      </p>

      <pre>
        <code>
{`SEMESTER_CONTENTS
        ↓
build-search-index.ts
        ↓
buildSearchIndex()
        ↓
SEARCH_INDEX
        ↓
browser`}
        </code>
      </pre>

      <p>
        <code>scripts/build-search-index.ts</code> runs during the development
        and production build hooks. It imports the real{" "}
        <code>SEMESTER_CONTENTS</code> in Node, calls the same index-building
        logic, and writes a generated{" "}
        <code>search-index.output.ts</code>.
      </p>

      <p>
        The important part is what doesn't happen anymore.
      </p>

      <p>
        The browser doesn't import the entire lab content tree just to construct
        a search index.
      </p>

      <p>
        It gets a flat array that is already prepared for searching.
      </p>

      <Callout $tone="tip">
        <strong>Build once. Search many times.</strong>
        <p>
          The expensive work of walking and flattening the lab content belongs
          in the build pipeline, not in every user's browser.
        </p>
      </Callout>

      <h2>Then localhost started feeling slow</h2>

      <p>
        Moving the index out of the client fixed the architectural problem, but
        the search still didn't feel perfect during development.
      </p>

      <p>
        The first thing to remember was that <code>next dev</code> is not a
        production build. React development behaviour, unminified code and the
        lack of production optimisations make localhost a terrible place to
        casually compare raw performance against a deployed build.
      </p>

      <p>
        But there were also real problems in our code.
      </p>

      <p>
        One of them was particularly simple.
      </p>

      <p>
        I had put a <code>findIndex()</code> inside the result rendering loop.
      </p>

      <p>
        That meant that for every result row, on every search update, we were
        scanning the flat array again just to figure out its position.
      </p>

      <p>
        The search index wasn't doing anything wrong.
      </p>

      <p>
        We were just making the renderer do unnecessary work around it.
      </p>

      <p>
        So that lookup was computed once instead of repeatedly during rendering.
      </p>

      <h2>Then I added Three.js to the search results</h2>

      <p>
        This is where things got slightly funny.
      </p>

      <p>
        The result cards looked better with circuit previews. So we added live
        <code>CircuitPreview</code> components to them.
      </p>

      <p>
        Which meant that typing into a search box could now cause multiple
        WebGL canvases to mount and unmount as the result set changed.
      </p>

      <p>
        A search result had somehow become a small rendering application.
      </p>

      <p>
        The preview looked great.
      </p>

      <p>
        It was also not something we wanted rebuilding on every character.
      </p>

      <p>
        We added a small debounce — about 180ms — so the expensive part of
        matching, grouping and generating preview results only runs once the
        user pauses typing.
      </p>

      <p>
        The goal wasn't to make typing artificially slow. It was to stop doing
        work that the user was never going to see.
      </p>

      <h2>Then search failed in a much simpler way</h2>

      <p>
        After all of that, we found a problem that had nothing to do with
        bundles, rendering or WebGL.
      </p>

      <p>
        Search for:
      </p>

      <p>
        <strong>half wave</strong>
      </p>

      <p>
        And the search could fail to find:
      </p>

      <p>
        <strong>Half-Wave Rectifier</strong>
      </p>

      <BlogImage
        src="/blog/05-search-optimization/half-wave-no-results.png"
        alt="VLabs search showing no results for half wave"
        caption={`The search knew the content existed. It just didn't understand "half wave" and "half-wave" as the same thing.`}
      />

      <p>
        The computer was technically correct.
      </p>

      <p>
        The strings were different.
      </p>

      <p>
        Humans don't care.
      </p>

      <h2>Normalising the query</h2>

      <p>
        We stopped comparing the raw strings.
      </p>

      <p>
        The new normalisation step converts separators such as hyphens,
        underscores and slashes into spaces and collapses repeated whitespace.
      </p>

      <pre>
        <code>
{`Half-Wave
half_wave
half/wave
half   wave

        ↓ normalize()

half wave`}
        </code>
      </pre>

      <p>
        But normalisation alone wasn't enough.
      </p>

      <p>
        A query can contain more than one word, and those words don't
        necessarily need to appear next to each other in the source text.
      </p>

      <p>
        So <code>matchesAllTokens()</code> splits the normalised query into
        tokens and checks that every token exists somewhere in the searchable
        text.
      </p>

      <p>
        The order doesn't have to be identical. Punctuation doesn't get in the
        way. The search behaves more like the way someone actually types a
        query.
      </p>

      <BlogImage
        src="/blog/05-search-optimization/half-wave-results.png"
        alt='VLabs search showing results for "half wave" with highlighted matches'
        caption='After normalisation and token matching, "half wave" finds Half-Wave Rectifier and related content.'
        wide
      />

      <h2>Finding the match is only half the job</h2>

      <p>
        Once matching became token-based, highlighting had to understand the
        same rules.
      </p>

      <p>
        A single substring highlight wasn't enough anymore.
      </p>

      <p>
        <code>buildHighlightRegex()</code> builds a pattern from the individual
        query tokens, allowing every matched word in a snippet to be
        highlighted.
      </p>

      <p>
        This sounds like a small detail, but it changes how the result feels.
        The user doesn't have to read the entire paragraph to figure out why it
        appeared in the results.
      </p>

      <h2>What the search became</h2>

      <p>
        The final result is much more than the original dropdown.
      </p>

      <p>
        A student can open the palette with <code>⌘K</code>, type a phrase,
        filter by semester, and get results that point all the way down to the
        relevant section of an experiment.
      </p>

      <p>
        The result isn't just:
      </p>

      <pre>
        <code>Half-Wave Rectifier</code>
      </pre>

      <p>
        It can tell you:
      </p>

      <pre>
        <code>
{`Semester 1
  > Analog Electronics
    > Half-Wave Rectifier
      > Theory`}
        </code>
      </pre>

      <p>
        And then show the actual piece of content where the query was found.
      </p>

      <BlogImage
        src="/blog/05-search-optimization/search-final.png"
        alt="Final VLabs command palette with grouped full-text search results and circuit previews"
        caption="The final command palette: content-aware results, breadcrumbs, highlighting, semester filtering and experiment previews."
        wide
      />

      <h2>The search box wasn't really the thing we were optimising</h2>

      <p>
        Looking back, the interesting part wasn't the ⌘K interface.
      </p>

      <p>
        That was the easy part.
      </p>

      <p>
        The harder problem was deciding where search should live.
      </p>

      <p>
        We started with a client-side substring check because there wasn't much
        data to search. Then we wanted full lab-content search, which made the
        client-side approach expensive. So the index moved to build time.
      </p>

      <p>
        Then rendering exposed unnecessary work. Then live circuit previews
        introduced WebGL into an interaction that needed to stay lightweight.
        Then, after all of that, a hyphen reminded us that good search isn't
        only about performance.
      </p>

      <p>
        It also has to understand what the person meant.
      </p>

      <p>
        A search box started as a small dropdown with an{" "}
        <code>includes()</code> call.
      </p>

      <p>
        It ended up touching the content architecture, build pipeline, browser
        bundle, rendering lifecycle, input scheduling and text normalisation of
        the entire platform.
      </p>

      <p>
        That's probably the slightly annoying thing about optimisation.
      </p>

      <p>
        You rarely optimise the thing you thought you were going to optimise.
      </p>

      <p>
        You start with a slow search box.
      </p>

      <p>
        Then you discover you were shipping the entire lab to the browser.
      </p>
    </Prose>
  );
}