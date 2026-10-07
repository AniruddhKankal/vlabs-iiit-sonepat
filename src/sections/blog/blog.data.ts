export type BlogPostRecord = {
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    role: string;
    imageUrl: string;
    github: string;
    bio: string;
  };
  tag: string;
  slug: string;
  readTime: string;
  featured?: boolean;
  thumbnail?: string;
};

export const BLOG_POSTS: readonly BlogPostRecord[] = [
  {
    title: "Building 3D ECE labs from scratch with Three.js and Next.js",
    excerpt:
      "How we designed an interactive breadboard renderer that lets students drag, drop, and wire components in a browser — no plugins, no installs.",
    date: "2026-09-20",
    author: {
      name: "Shubham Singh",
      role: "Founder",
      imageUrl: "https://github.com/FirePheonix.png",
      github: "FirePheonix",
      bio: "Built VLabs from scratch between June and September 2026. Maintains the project as president of the Technical Society of IIIT Sonepat.",
    },
    tag: "Engineering",
    slug: "building-3d-ece-labs",
    readTime: "8 min read",
    featured: true,
    thumbnail: "/blog/01-building-ece-labs/thumbnail.png",
  },
  {
    title: "Why open-source education tools matter more than ever",
    excerpt:
      "Labs are expensive, hardware is fragile, and not every student gets equal access. Virtual labs close that gap — here is why we chose to build in the open.",
    date: "2026-09-14",
    author: {
      name: "Shubham Singh",
      role: "Founder",
      imageUrl: "https://github.com/FirePheonix.png",
      github: "FirePheonix",
      bio: "Built VLabs from scratch between June and September 2026. Maintains the project as president of the Technical Society of IIIT Sonepat.",
    },
    tag: "Open Source",
    slug: "why-open-source-education",
    readTime: "5 min read",
    thumbnail: "/blog/03-why-open-source/thumbnail.svg",
  },
  {
    title: "From Lunaria to Tailwind: migrating a design system",
    excerpt:
      "We inherited a Linaria-based CSS-in-JS setup and moved the entire codebase to Tailwind CSS v4. Here is what went well, what broke, and what we learned.",
    date: "2026-08-28",
    author: {
      name: "Shubham Singh",
      role: "Founder",
      imageUrl: "https://github.com/FirePheonix.png",
      github: "FirePheonix",
      bio: "Built VLabs from scratch between June and September 2026. Maintains the project as president of the Technical Society of IIIT Sonepat.",
    },
    tag: "Design",
    slug: "lunaria-to-tailwind",
    readTime: "7 min read",
    thumbnail: "/blog/02-lunaria-to-tailwind/thumbnail.svg",
  },
  {
    title: "Designing interactive procedure steps for circuit experiments",
    excerpt:
      "Every lab follows a strict aim–theory–apparatus–procedure–observation–conclusion flow. Here is how we made each step interactive, verifiable, and wired to a live 3D scene.",
    date: "2026-08-18",
    author: {
      name: "Shubham Singh",
      role: "Founder",
      imageUrl: "https://github.com/FirePheonix.png",
      github: "FirePheonix",
      bio: "Built VLabs from scratch between June and September 2026. Maintains the project as president of the Technical Society of IIIT Sonepat.",
    },
    tag: "Product",
    slug: "interactive-procedure-steps",
    readTime: "6 min read",
    thumbnail: "/blog/04-interactive-procedure-steps/thumbnail.svg",
  },
  {
    title: "When a search box became an architecture problem",
    excerpt:
      "The old VLab search could find experiments. We wanted it to understand them. What started as a ⌘K redesign turned into a build-time search index, client-side performance work, and a small lesson in how humans actually search.",
    date: "2026-10-01",
    author: {
      name: "Shivanshu Mangal",
      role: "Core Contributor",
      imageUrl: "https://github.com/shivanshumangal007-dev.png",
      github: "shivanshumangal007-dev",
      bio: "Worked on VLabs from 2025 to 2026. Contributed to the project as a contributor.",
    },
    tag: "Engineering",
    slug: "search-box-optimisation",
    readTime: "7 min read",
    thumbnail: "/blog/05-search-optimisation/thumbnail.svg",
  },
];
