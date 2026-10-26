
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Palette,
  Layers3,
  Database,
  Wrench,
  Sparkles,
  ArrowUpRight,
  Terminal,
  Braces,
  Check,
  GraduationCap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "01",
    title: "Frontend Development",
    description: "Building modern interfaces for the web.",
    icon: Code2,
    featured: true,
    skills: [
      { name: "HTML5", level: "Comfortable" },
      { name: "CSS3", level: "Comfortable" },
      { name: "JavaScript", level: "Practicing" },
      { name: "React.js", level: "Practicing" },
    ],
  },
  {
    id: "02",
    title: "UI & Styling",
    description: "Layouts, responsive design and motion.",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: "Practicing" },
      { name: "Responsive Design", level: "Practicing" },
      { name: "GSAP", level: "Learning" },
      { name: "Framer Motion", level: "Learning" },
    ],
  },
  {
    id: "03",
    title: "State & Routing",
    description: "Managing application flow and state.",
    icon: Layers3,
    skills: [
      { name: "React Router", level: "Practicing" },
      { name: "Context API", level: "Practicing" },
      { name: "React Hooks", level: "Practicing" },
    ],
  },
  {
    id: "04",
    title: "Backend & Data",
    description: "Connecting interfaces with real data.",
    icon: Database,
    skills: [
      { name: "Firebase", level: "Practicing" },
      { name: "REST APIs", level: "Practicing" },
      { name: "Node.js", level: "Learning" },
      { name: "Express.js", level: "Learning" },
      { name: "MongoDB", level: "Learning" },
    ],
  },
  {
    id: "05",
    title: "Developer Tools",
    description: "Tools I use to build and ship projects.",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: "Practicing" },
      { name: "Vite", level: "Practicing" },
      { name: "VS Code", level: "Comfortable" },
      { name: "Chrome DevTools", level: "Practicing" },
    ],
  },
];

const levelStyles = {
  Comfortable: "text-accent",
  Practicing: "text-ink-muted",
  Learning: "text-ink-muted",
};

function SkillChip({ skill }) {
  return (
    <div className="group/chip flex min-w-0 items-center justify-between gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--surface)] px-3 py-3 transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/[0.06]">
      <span className="flex min-w-0 items-center gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-accent">
          <Braces size={14} />
        </span>

        <span className="truncate text-xs font-semibold text-ink sm:text-sm">
          {skill.name}
        </span>
      </span>

      <span
        className={`hidden shrink-0 text-[9px] font-semibold sm:block ${levelStyles[skill.level]}`}
      >
        {skill.level}
      </span>
    </div>
  );
}

function SkillPanel({ category }) {
  const Icon = category.icon;

  return (
    <article
      className={`skill-panel theme-card-strong group/panel relative overflow-hidden rounded-[26px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:rounded-[30px] sm:p-6 ${
        category.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Accent detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[var(--accent)] opacity-[0.07] blur-[45px] transition-opacity duration-300 group-hover/panel:opacity-20"
      />

      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3.5">
            <div className="theme-chip flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
              <Icon size={22} className="text-accent" />
            </div>

            <div className="min-w-0">
              <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] text-ink-muted">
                MODULE / {category.id}
              </p>

              <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                {category.title}
              </h3>
            </div>
          </div>

          <ArrowUpRight
            size={18}
            className="shrink-0 text-ink-muted opacity-60 transition-all duration-300 group-hover/panel:-translate-y-1 group-hover/panel:translate-x-1 group-hover/panel:text-accent group-hover/panel:opacity-100"
          />
        </div>

        <p className="mb-5 text-xs leading-6 text-ink-muted sm:text-sm">
          {category.description}
        </p>

        <div
          className={`grid gap-2.5 ${
            category.featured
              ? "sm:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {category.skills.map((skill) => (
            <SkillChip key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.from(headingRef.current, {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(gridRef.current.children, {
        y: 28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(footerRef.current, {
        y: 15,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="theme-bg relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:py-32"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-[var(--accent)] opacity-[0.13] blur-[110px] sm:h-[28rem] sm:w-[28rem]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[var(--accent-light)] opacity-[0.12] blur-[120px]"
      />

      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 80%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div
          ref={headingRef}
          className="mb-12 flex flex-col items-center text-center sm:mb-16"
        >
          <div className="theme-card mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Sparkles size={15} />
            My Tech Stack
          </div>

          <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Tools behind the{" "}
            <span className="text-gradient">experience.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink-muted sm:text-base sm:leading-8">
            Technologies I use, concepts I practise, and tools I’m exploring
            to build better web applications.
          </p>
        </div>

        {/* Small developer status bar */}
        <div className="theme-card mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3.5 sm:px-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-accent">
              <Terminal size={18} />
            </span>

            <div>
              <p className="text-xs font-bold text-ink sm:text-sm">
                Developer toolkit
              </p>
              <p className="mt-0.5 text-[10px] text-ink-muted sm:text-xs">
                Frontend first · Expanding into MERN
              </p>
            </div>
          </div>

          <div className="theme-chip flex items-center gap-2 rounded-full px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-semibold text-ink-muted sm:text-xs">
              Always improving
            </span>
          </div>
        </div>

        {/* Skills dashboard */}
        <div
          ref={gridRef}
          className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => (
            <SkillPanel key={category.id} category={category} />
          ))}
        </div>

        {/* Learning footer */}
        <div
          ref={footerRef}
          className="theme-card-strong mt-6 flex flex-col gap-4 rounded-[24px] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-start gap-3.5">
            <div className="theme-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
              <GraduationCap size={21} className="text-accent" />
            </div>

            <div>
              <h3 className="font-display text-sm font-bold text-ink sm:text-base">
                Currently expanding my skills
              </h3>
              <p className="mt-1 text-xs leading-6 text-ink-muted sm:text-sm">
                Focusing on Node.js, Express.js and MongoDB to grow into
                full-stack development.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-[var(--card-border)] px-3 py-2 sm:self-center">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[10px] font-semibold text-ink-muted sm:text-xs">
              Learning in progress
            </span>
          </div>
        </div>

        <p className="mt-7 text-center text-xs text-ink-muted sm:mt-9 sm:text-sm">
          <Check
            size={14}
            className="mr-1.5 inline-block text-accent"
          />
          Built through practice, projects, and continuous learning.
        </p>
      </div>
    </section>
  );
}
