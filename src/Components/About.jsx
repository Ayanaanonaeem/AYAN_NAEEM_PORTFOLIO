
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Award,
  MapPin,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Projects Built", value: "5+", icon: Code2 },
  { label: "Core Technology", value: "React.js", icon: Code2 },
  { label: "Education", value: "IT Graduate", icon: Award },
  { label: "Mindset", value: "Always Learning", icon: Sparkles },
];

const skills = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "GSAP",
  "Responsive UI",
  "Firebase",
];

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.from(headingRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(imageRef.current, {
        x: -35,
        opacity: 0,
        scale: 0.96,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(textRef.current, {
        x: 35,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(statsRef.current.children, {
        y: 22,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="theme-bg relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:py-32"
    >
      {/* Theme-aware ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-[var(--accent)] opacity-[0.12] blur-[110px] sm:h-[28rem] sm:w-[28rem]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-[var(--accent-light)] opacity-[0.13] blur-[120px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 80%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="theme-card mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            <Sparkles size={15} />
            A little introduction
          </div>

          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            More than just{" "}
            <span className="text-gradient">writing code.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink-muted sm:text-base sm:leading-8">
            A little about the developer behind the pixels,
            interactions, and ideas.
          </p>
        </div>

        {/* Main about card */}
        <div className="theme-card-strong relative overflow-hidden rounded-[28px] p-5 sm:rounded-[36px] sm:p-8 lg:rounded-[40px] lg:p-12">
          {/* Top accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70"
          />

          <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-16">
            {/* Profile visual */}
            <div
              ref={imageRef}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-[340px]">
                {/* Portrait glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-8 rounded-full bg-[var(--accent)] opacity-20 blur-[55px]"
                />

                {/* Profile frame */}
                <div className="theme-card relative flex flex-col overflow-hidden rounded-[30px] p-3 sm:rounded-[36px] sm:p-4">
                  {/* Fixed image area */}
                  <div
                    className="relative flex h-[300px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[23px] sm:h-[360px] sm:rounded-[28px]"
                    style={{
                      background:
                        "linear-gradient(145deg, var(--bg-secondary), var(--surface), var(--bg-primary))",
                    }}
                  >
                    {/* Top-left corner */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-4 top-4 z-20 h-8 w-8 rounded-tl-xl border-l-2 border-t-2 border-[var(--accent)] opacity-70"
                    />

                    {/* Bottom-right corner */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-4 right-4 z-20 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-[var(--accent)] opacity-70"
                    />

                    <img
                      src="/projects/Ayanpic.png"
                      alt="Illustrated developer avatar"
                      loading="lazy"
                      className="relative z-10 block h-full w-full object-contain p-2"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/4 bg-gradient-to-t from-[var(--accent)]/10 to-transparent"
                    />
                  </div>

                  {/* Caption: always directly below the image */}
                  <div className="flex min-h-[68px] shrink-0 items-center justify-between gap-3 px-2 pb-1 pt-4">
                    <div className="flex min-w-0 flex-col">
                      <p className="font-display text-base font-bold leading-5 text-ink">
                        Ayan Naeem
                      </p>

                      <p className="mt-1 text-xs leading-4 text-ink-muted">
                        Frontend Developer
                      </p>
                    </div>

                    <div className="theme-chip flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl">
                      <Terminal size={19} className="text-accent" />
                    </div>
                  </div>
                </div>

                {/* Location badge */}
                <div className="theme-card absolute -bottom-4 left-3 z-20 flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-ink shadow-lg sm:left-0 sm:text-sm">
                  <MapPin size={15} className="text-accent" />
                  Pakistan
                </div>

                {/* Floating status badge */}
                <div className="theme-card absolute -right-2 top-5 z-20 flex items-center gap-2 rounded-2xl px-3 py-2.5 shadow-lg sm:-right-4 sm:top-8">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                    <Code2 size={16} className="text-accent" />
                  </span>

                  <div>
                    <p className="text-xs font-bold text-ink">
                      Building
                    </p>
                    <p className="mt-0.5 text-[10px] text-ink-muted">
                      One project at a time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About text */}
            <div ref={textRef} className="pt-2 md:pt-0">
              <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-px w-7 bg-[var(--accent)]" />
                Who I am
              </div>

              <h3 className="mb-5 font-display text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl">
                Turning ideas into{" "}
                <span className="text-gradient">meaningful</span>{" "}
                digital experiences.
              </h3>

              <p className="mb-4 text-sm leading-7 text-ink-muted sm:text-base sm:leading-8">
                Hey, I’m Ayan — an IT graduate and frontend
                developer who enjoys building modern, responsive,
                and user-friendly web experiences with React.
              </p>

              <p className="mb-7 text-sm leading-7 text-ink-muted sm:text-base sm:leading-8">
                I care about the details that make a website feel
                right: thoughtful layouts, clean components, smooth
                interactions, and interfaces that work beautifully
                across screen sizes. I’m continuously learning and
                turning new concepts into practical projects.
              </p>

              {/* Personal strengths */}
              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      User-focused UI
                    </p>
                    <p className="mt-1 text-xs leading-5 text-ink-muted">
                      Clear, responsive interfaces
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Always learning
                    </p>
                    <p className="mt-1 text-xs leading-5 text-ink-muted">
                      Improving through hands-on work
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology chips */}
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted sm:text-xs">
                  Technologies I use
                </p>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="theme-chip rounded-xl px-3 py-2 text-xs font-semibold text-ink-muted transition-colors duration-200 hover:text-accent sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#projects"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:opacity-75"
              >
                See what I’ve been building
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="mt-12 grid grid-cols-2 gap-3 border-t border-[var(--card-border)] pt-8 sm:mt-14 sm:gap-4 sm:pt-10 md:grid-cols-4"
          >
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="theme-card group rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="theme-chip flex h-10 w-10 items-center justify-center rounded-xl">
                    <Icon size={19} className="text-accent" />
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-ink-muted opacity-50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
                  />
                </div>

                <p className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  {value}
                </p>

                <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-ink-muted sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <p className="mt-7 text-center text-xs leading-6 text-ink-muted sm:mt-9 sm:text-sm">
          <Sparkles
            size={14}
            className="mr-1.5 inline-block text-accent"
          />
          Curious by nature. Developer by choice. Better with every build.
        </p>
      </div>
    </section>
  );
}
