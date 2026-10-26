
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  
  Heart,
  
  Mail,
  MapPin,
  Sparkles,
  Code2,
  ExternalLink,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", number: "01" },
  { name: "About", href: "#about", number: "02" },
  { name: "Skills", href: "#skills", number: "03" },
  { name: "Projects", href: "#projects", number: "04" },
  { name: "Contact", href: "#contact", number: "05" },
];

const contactDetails = {
  name: "Ayan Naeem",
  role: "Frontend Developer",
  email: "ayannaeem520@gmail.com",
  location: "Karachi, Pakistan",
  github: "https://github.com/Ayanaanonaeem",
  linkedin: "https://www.linkedin.com/in/ayan-naeem-70149131b/",
};




function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}


export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [year] = useState(() => new Date().getFullYear());

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="theme-bg relative isolate overflow-hidden pt-20 sm:pt-28">
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-36 left-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-20 -left-40 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-[110px]"
        />

        {/* Main container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Giant CTA card */}
          <div className="group relative mb-16 overflow-hidden rounded-[30px] border border-white/10 bg-[#080d18] p-7 shadow-2xl shadow-black/20 sm:rounded-[40px] sm:p-12 lg:p-16">
            {/* Gradient border effect */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-cyan-400/15 via-transparent to-blue-500/15"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-cyan-300/10 transition-transform duration-1000 group-hover:scale-125"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-20 h-64 w-64 rounded-full border border-blue-400/10 transition-transform duration-1000 group-hover:scale-110"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </span>
                  OPEN TO OPPORTUNITIES
                  <Sparkles size={14} />
                </div>

                <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                  HAVE A PROJECT IN MIND?
                </p>

                <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Let&apos;s build
                  <br />
                  something{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                    amazing.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Have an idea, an opportunity, or just want to connect?
                  My inbox is always open. Let&apos;s turn good ideas into
                  great digital experiences.
                </p>

                <a
                  href={`mailto:${contactDetails.email}?subject=${encodeURIComponent(
                    "Let's work together"
                  )}`}
                  className="group/btn mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  <Mail size={18} />
                  Let&apos;s Talk
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </a>
              </div>

              {/* Decorative code visual */}
              <div className="relative hidden h-64 w-64 items-center justify-center lg:flex">
                <div className="absolute inset-3 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-cyan-300/20" />
                <div className="absolute inset-9 rounded-full border border-blue-400/20" />
                <div className="absolute inset-14 rounded-full bg-cyan-400/[0.06] blur-xl" />

                <div className="relative flex h-28 w-28 items-center justify-center rounded-[28px] border border-cyan-200/20 bg-white/[0.04] shadow-2xl shadow-cyan-500/10 backdrop-blur-xl transition-transform duration-500 hover:rotate-6 hover:scale-110">
                  <Code2
                    size={52}
                    strokeWidth={1.3}
                    className="text-cyan-300"
                  />
                </div>

                <div className="absolute right-3 top-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-cyan-300 shadow-lg">
                  <Sparkles size={20} />
                </div>

                <div className="absolute bottom-7 left-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-blue-300 shadow-lg">
                  <Heart size={20} />
                </div>

                <span className="absolute bottom-0 right-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                  BUILD · CREATE · REPEAT
                </span>
              </div>
            </div>
          </div>

          {/* Footer columns */}
          <div className="grid gap-12 border-b border-white/[0.08] pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-5">
              <a
                href="#home"
                aria-label="Ayan Naeem home"
                className="group inline-flex items-center gap-3"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-300 transition-all duration-300 group-hover:rotate-6 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10">
                  <Code2 size={25} />
                </span>

                <span className="text-2xl font-black tracking-tight text-ink">
                  Ayan<span className="text-accent">.</span>
                </span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-ink-muted">
                {contactDetails.role} focused on building modern,
                responsive, and user-friendly web experiences with React
                and Tailwind CSS.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-ink-muted">
                <MapPin size={16} className="shrink-0 text-accent" />
                {contactDetails.location}
              </div>

              {/* Social buttons */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-accent"
                >
                  <GithubIcon size={19} />
                </a>

                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-accent"
                >
                  <LinkedinIcon size={19} />
                </a>

                <a
                  href={`mailto:${contactDetails.email}`}
                  aria-label="Send an email"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-accent"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3 lg:pl-8">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-ink">
                Explore
              </h3>

              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex w-fit items-center gap-3 text-sm text-ink-muted transition-colors duration-300 hover:text-accent"
                    >
                      <span className="font-mono text-[10px] text-ink-muted/50 transition-colors group-hover:text-accent">
                        {link.number}
                      </span>
                      <span>{link.name}</span>
                      <ArrowDownRight
                        size={14}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-[-2px] group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div className="lg:col-span-4">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-ink">
                Get in touch
              </h3>

              <p className="mb-5 max-w-xs text-sm leading-6 text-ink-muted">
                Looking for a developer or want to discuss a project?
                Feel free to reach out.
              </p>

              <a
                href={`mailto:${contactDetails.email}`}
                className="group inline-flex max-w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-accent">
                  <Mail size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                    Email me at
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-ink transition-colors group-hover:text-accent">
                    {contactDetails.email}
                  </span>
                </span>

                <ExternalLink
                  size={15}
                  className="ml-1 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </a>

              <p className="mt-5 flex items-center gap-2 text-xs text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                Always learning. Always building.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
            <p className="text-center text-xs leading-6 text-ink-muted sm:text-left">
              © {year} {contactDetails.name}. All rights reserved.
            </p>

            <a
              href="#home"
              className="group inline-flex items-center gap-2 text-xs text-ink-muted transition-colors hover:text-accent"
            >
              Crafted with
              <Heart
                size={13}
                className="fill-current text-rose-400 transition-transform duration-300 group-hover:scale-125"
              />
              and React
              <span className="font-semibold text-accent">↗</span>
            </a>

            <a
              href="#home"
              className="hidden items-center gap-2 text-xs text-ink-muted transition-colors hover:text-accent sm:inline-flex"
            >
              Back to beginning
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        {/* Large decorative background typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none overflow-hidden text-center"
        >
          <p className="translate-y-[18%] whitespace-nowrap text-[19vw] font-black leading-[0.8] tracking-[-0.09em] text-ink/[0.035]">
            LET&apos;S BUILD.
          </p>
        </div>
      </footer>

      {/* Floating back-to-top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-cyan-300 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900 sm:bottom-7 sm:right-7 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <ArrowUp
          size={19}
          className="transition-transform duration-300 hover:-translate-y-0.5"
        />
      </button>
    </>
  );
}
