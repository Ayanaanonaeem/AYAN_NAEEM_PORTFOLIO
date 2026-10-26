
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderCode,
  ImageIcon,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "StreamXCoder",
    subtitle: "Code. Execute. Create.",
    description:
      "A browser-based coding platform with an integrated Monaco code editor, Firebase authentication, and code execution powered by Judge0.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Monaco Editor",
      "Judge0 API",
      "React Router",
    ],
    category: "Full Stack",
    type: "FINAL YEAR PROJECT",
    liveLink: "https://streamxcoder.onrender.com",
    githubLink: "https://github.com/ssuetfyp2022f/streamXcoder",
    image: "/projects/streamXcoder.png",
    featured: true,
    number: "01",
  },
  {
    id: 2,
    title: "FITX Gym",
    subtitle: "Built for fitness",
    description:
      "A modern, responsive gym website featuring bold typography, a black-and-red visual identity, and a fitness-focused user experience.",
    technologies: ["React.js", "Vite", "Tailwind CSS"],
    category: "Frontend",
    type: "GYM WEBSITE",
    liveLink: "https://fit-flax-one.vercel.app",
    githubLink: "https://github.com/Ayanaanonaeem/FITX",
    image: "/projects/fitx.png",
    number: "02",
  },
  {
    id: 3,
    title: "Netflix Clone",
    subtitle: "A streaming-inspired UI",
    description:
      "A Netflix-inspired movie browsing interface built to practise React components, dynamic content rendering, and responsive layouts.",
    technologies: ["React.js", "JavaScript", "CSS", "API"],
    category: "Frontend",
    type: "STREAMING UI",
    liveLink: "https://ayanaanonaeem.github.io/Netflix/",
    githubLink: "https://github.com/Ayanaanonaeem",
    image: "/projects/netflix.png",
    number: "03",
  },
  {
    id: 4,
    title: "Redux Toolkit Todo",
    subtitle: "Tasks with global state",
    description:
      "A task management app using Redux Toolkit to manage application state, add and remove tasks, and practise predictable state updates.",
    technologies: ["React.js", "Redux Toolkit", "JavaScript", "CSS"],
    category: "Frontend",
    type: "STATE MANAGEMENT",
    liveLink: "https://todo-project-redux-tool-kit.vercel.app/",
    githubLink: "https://github.com/Ayanaanonaeem/Todo-Project-Redux-tool-kit",
    image: "/projects/redux-todo.png",
    number: "04",
  },
  {
    id: 5,
    title: "React Product Store",
    subtitle: "Products from a REST API",
    description:
      "A product browsing application that fetches product data from an API and supports cart management with localStorage persistence.",
    technologies: [
      "React.js",
      "JavaScript",
      "REST API",
      "Context API",
      "localStorage",
    ],
    category: "Frontend",
    type: "E-COMMERCE",
    liveLink: "https://shopora-ecommerce-tawny.vercel.app/",
    githubLink: "https://github.com/Ayanaanonaeem/shopora-ecommerce",
    image: "/projects/shopora.png",
    number: "05",
  },
  
];

const filters = ["All", "Frontend", "Full Stack", "AI & Backend"];

function ProjectImage({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="project-preview relative h-54 w-full overflow-hidden sm:h-64">
      {imageError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--surface)] text-[var(--ink-muted)]">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--card-border)] bg-[var(--accent-light)]/30">
            <ImageIcon
              size={25}
              className="text-[var(--accent)]"
            />
          </div>
          <span className="text-xs font-medium">
            Preview unavailable
          </span>
        </div>
      ) : (
        <img
          src={project.image}
          alt={`${project.title} website preview`}
          loading="lazy"
          onError={() => setImageError(true)}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
        {project.type}
      </span>

      <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-[-45deg]">
        <ArrowDownRight size={19} />
      </span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const featured = project.featured;

  return (
    <article
      className={`project-card group flex h-full min-w-0 ${
        featured ? "lg:col-span-2" : ""
      }`}
      data-index={index}
    >
      <Tilt
        tiltEnable={false}
        glareEnable={false}
        style={{ height: "100%", width: "100%" }}
      >
        <div className="project-shell theme-card-strong relative flex h-full flex-col overflow-hidden rounded-[26px]">
          <div className="pointer-events-none absolute right-0 top-0 z-0 h-32 w-32 rounded-full bg-[var(--accent)] opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

          <ProjectImage project={project} />

          <div className="relative z-[1] flex flex-1 flex-col p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Project / {project.number}
              </span>

              {featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-[var(--accent-light)]/20 px-3 py-1.5 text-[10px] font-semibold text-[var(--ink)]">
                  <Sparkles
                    size={12}
                    className="text-[var(--accent)]"
                  />
                  Featured
                </span>
              )}
            </div>

            <div className="mb-2">
              <h3 className="font-display text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                {project.subtitle}
              </p>
            </div>

            <p className="mb-5 text-sm leading-7 text-[var(--ink-muted)]">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[var(--card-border)] bg-[var(--surface)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--ink-muted)] transition-colors duration-200 group-hover:border-[var(--accent)]/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[var(--card-border)] pt-4">
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: "var(--gradient)" }}
                >
                  Live Preview
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-[var(--card-border)] px-3 py-2 text-xs font-medium text-[var(--ink-muted)]">
                  <Code2 size={14} />
                  In development
                </span>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[var(--card-border)] px-4 py-2.5 text-xs font-semibold text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-light)]/20"
                >
                  Source Code
                </a>
              )}

              <span className="ml-auto hidden items-center gap-1 text-[10px] font-medium uppercase tracking-widest text-[var(--ink-muted)] sm:inline-flex">
                {project.category}
                <ArrowUpRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </Tilt>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;

    return projects.filter(
      (project) => project.category === filter
    );
  }, [filter]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll(".project-card");
    if (!cards.length) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(cards, { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.09,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: grid,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="theme-bg relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[var(--accent)] opacity-[0.09] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[var(--accent-dark)] opacity-[0.08] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div
          ref={headingRef}
          className="mb-12 flex flex-col justify-between gap-7 md:mb-14 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              <FolderCode size={14} />
              Selected work
            </div>

            <h2 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              Ideas turned into
              <span className="block text-gradient">
                real projects.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
              A collection of applications and interfaces I’ve built
              while exploring modern web development, creative UI,
              and useful digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3 md:self-auto">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-light)]/30 text-[var(--accent)]">
              <Code2 size={19} />
            </div>
            <div>
              <p className="text-xl font-bold text-[var(--ink)]">
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                Projects showcased
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-2">
          {filters.map((item) => {
            const active = filter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={active}
                className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  active
                    ? "border-transparent text-white shadow-lg"
                    : "border-[var(--card-border)] bg-[var(--surface)] text-[var(--ink-muted)] hover:border-[var(--accent)]/50 hover:text-[var(--ink)]"
                }`}
                style={
                  active
                    ? { background: "var(--gradient)" }
                    : undefined
                }
              >
                {item}
                {item === "All" && (
                  <span className="ml-2 opacity-75">
                    {projects.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div
          ref={gridRef}
          className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--card-border)] pt-6 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Always building. Always learning.
          </p>
          <p>Designed with purpose · Built with code</p>
        </div>
      </div>

      <style>{`
        .project-shell {
          width: 100%;
          border: 1px solid var(--card-border);
          transition:
            border-color 300ms ease,
            box-shadow 300ms ease,
            transform 300ms ease;
        }

        .project-shell:hover {
          border-color: var(--accent);
          box-shadow: 0 18px 55px -28px var(--glow);
        }

        .project-preview {
          flex-shrink: 0;
          background: var(--surface);
        }

        .project-preview img {
          display: block;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-shell,
          .project-preview img {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
