
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";
import {
  ArrowRight,
  Download,
  Sparkles,
  Zap,
  Code2,
  MousePointer2,
} from "lucide-react";

const techStack = ["React.js", "JavaScript", "Tailwind CSS", "GSAP"];

export default function Hero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const cardRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const techRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(badgeRef.current, {
        y: 18,
        opacity: 0,
        duration: 0.65,
        delay: 0.15,
      })
        .from(
          cardRef.current,
          {
            y: 36,
            opacity: 0,
            scale: 0.98,
            duration: 0.85,
          },
          "-=0.3"
        )
        .from(
          nameRef.current,
          { y: 22, opacity: 0, duration: 0.7 },
          "-=0.45"
        )
        .from(
          taglineRef.current,
          { y: 16, opacity: 0, duration: 0.65 },
          "-=0.4"
        )
        .from(
          ctaRef.current.children,
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .from(
          techRef.current,
          { y: 10, opacity: 0, duration: 0.5 },
          "-=0.2"
        )
        .from(
          scrollRef.current,
          { opacity: 0, duration: 0.5 },
          "-=0.1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="theme-bg relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:pt-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-[var(--accent)] opacity-20 blur-[100px] sm:h-[28rem] sm:w-[28rem] sm:blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-[var(--accent-dark)] opacity-20 blur-[100px] sm:h-[32rem] sm:w-[32rem] sm:blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-light)] opacity-[0.09] blur-[100px] sm:h-[32rem] sm:w-[32rem]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 78%)",
        }}
      />

      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[23%] hidden h-24 w-24 rounded-full border border-[var(--accent)] opacity-20 md:block lg:h-36 lg:w-36"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[20%] left-[7%] hidden h-16 w-16 rounded-2xl border border-[var(--accent-light)] opacity-30 md:block"
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        {/* Availability badge */}
        <div
          ref={badgeRef}
          className="theme-card mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full px-4 py-2.5 text-xs font-medium text-ink shadow-sm sm:mb-9 sm:text-sm"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>

          <span>Open to opportunities</span>

          <Sparkles size={15} className="shrink-0 text-accent" />
        </div>

        {/* Main card */}
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glareEnable={false}
          scale={1.005}
          transitionSpeed={1200}
          className="w-full"
        >
          <div
            ref={cardRef}
            className="theme-card-strong relative overflow-hidden rounded-[28px] px-5 py-10 sm:rounded-[36px] sm:px-10 sm:py-14 lg:rounded-[44px] lg:px-16 lg:py-16"
          >
            {/* Card lighting */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[var(--accent)] opacity-[0.08] blur-[70px] sm:h-72 sm:w-72"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-[var(--accent-light)] opacity-[0.09] blur-[65px] sm:h-64 sm:w-64"
            />

            <div className="relative">
              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-ink-muted sm:text-sm">
                <Code2 size={16} className="text-accent" />
                <span>Frontend Developer</span>
              </div>

              {/* Name */}
              <h1
                ref={nameRef}
                className="text-gradient mx-auto mb-5 max-w-4xl break-words font-display text-5xl font-extrabold leading-[1.06] tracking-[-0.055em] sm:text-7xl lg:text-8xl"
              >
                Ayan Naeem<span className="text-accent">.</span>
              </h1>

              {/* Tagline */}
              <p
                ref={taglineRef}
                className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-ink-muted sm:text-base sm:leading-8 lg:text-lg"
              >
                I build{" "}
                <span className="font-semibold text-ink">
                  modern, responsive
                </span>{" "}
                web experiences with{" "}
                <span className="font-semibold text-accent">React</span>,
                thoughtful UI, and smooth interactions — turning ideas into
                websites people love to use.
              </p>

              {/* Small expertise label */}
              <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
                <span className="theme-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
                  <Zap size={13} className="text-accent" />
                  Clean UI
                </span>

                <span className="theme-chip rounded-full px-3 py-1.5 text-xs font-medium">
                  Responsive Design
                </span>

                <span className="theme-chip rounded-full px-3 py-1.5 text-xs font-medium">
                  Interactive Web
                </span>
              </div>

              {/* CTA buttons */}
            
{/* CTA buttons */}
<div
  ref={ctaRef}
  className="relative z-20 mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
>
  <a
    href="#projects"
    style={{
      background: "var(--gradient)",
      color: "#ffffff",
      opacity: 1,
      visibility: "visible",
    }}
    className="group inline-flex min-h-[52px] w-full max-w-[280px] items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
  >
    Explore My Projects
    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </a>

  <a
    href="/projects/AyanCV.pdf"
    download
    className="theme-card inline-flex min-h-[52px] w-full max-w-[280px] items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-1 sm:w-auto"
  >
    <Download size={18} />
    Download CV
  </a>
</div>


              {/* Tech stack */}
              <div
                ref={techRef}
                className="mt-9 border-t border-[var(--card-border)] pt-6 sm:mt-11 sm:pt-7"
              >
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-muted sm:text-xs">
                  Tools I work with
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="theme-chip rounded-xl px-3 py-2 text-xs font-medium text-ink-muted transition-colors duration-200 hover:text-accent sm:px-4 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Tilt>

        {/* Scroll indicator */}
        <a
          ref={scrollRef}
          href="#about"
          aria-label="Scroll to About section"
          className="group mt-9 inline-flex flex-col items-center gap-2 text-ink-muted transition-colors hover:text-accent sm:mt-11"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] sm:text-xs">
            Scroll to explore
          </span>

          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-[var(--accent)]/40 p-1.5 transition-all duration-300 group-hover:border-[var(--accent)] group-hover:shadow-md">
            <span className="h-2 w-1 rounded-full bg-accent transition-transform duration-300 group-hover:translate-y-2" />
          </span>

          <MousePointer2
            size={13}
            className="opacity-50 transition-transform duration-300 group-hover:translate-y-1"
          />
        </a>
      </div>
    </section>
  );
}
