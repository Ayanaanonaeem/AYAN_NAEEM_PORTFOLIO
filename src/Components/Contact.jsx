
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Confetti from "react-confetti";
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  User,
  MessageSquare,
  

  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = {
  name: "Ayan Naeem",
  role: "Frontend Developer",
  email: "ayannaeem520@gmail.com",
  location: "Karachi, Pakistan",
  github: "https://github.com/Ayanaanonaeem",
  linkedin: "https://www.linkedin.com/in/ayan-naeem-70149131b/",
};

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const timeoutRef = useRef(null);

  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // Confetti viewport dimensions
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        leftRef.current,
        { x: -35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { x: 35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError("");
  };

  // Send actual email using EmailJS
 
const handleSubmit = (e) => {
  e.preventDefault();

  const subject = encodeURIComponent(
    `Portfolio Contact - ${form.name}`
  );

  const body = encodeURIComponent(
    `Name: ${form.name}\n` +
    `Email: ${form.email}\n\n` +
    `Message:\n${form.message}`
  );

  window.location.href = `mailto:ayannaeem520@gmail.com?subject=${subject}&body=${body}`;
};

  const handleReset = () => {
    setSubmitted(false);
    setForm(initialForm);
    setError("");
    setShowConfetti(false);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="theme-bg relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Confetti */}
      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 z-50">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={220}
            gravity={0.18}
            colors={[
              "#3F72AF",
              "#112D4E",
              "#6EA8D9",
              "#DBE2EF",
              "#F9F7F7",
            ]}
          />
        </div>
      )}

      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-32 top-[5%] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-[0.13] blur-[130px]" />
      <div className="pointer-events-none absolute -left-32 bottom-[5%] h-[440px] w-[440px] rounded-full bg-[var(--accent-dark)] opacity-[0.12] blur-[140px]" />
      <div className="pointer-events-none absolute left-[42%] top-[42%] h-[300px] w-[300px] rounded-full bg-[var(--accent-light)] opacity-[0.10] blur-[110px]" />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute left-[7%] top-[22%] h-12 w-12 rotate-12 rounded-2xl border border-[var(--card-border)] bg-[var(--accent-light)]/20 sm:h-16 sm:w-16" />
      <div className="pointer-events-none absolute bottom-[20%] right-[6%] h-16 w-16 rounded-full border border-[var(--card-border)] bg-[var(--accent)]/10 sm:h-20 sm:w-20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div
          ref={headingRef}
          className="mb-12 text-center md:mb-14"
        >
          <div className="theme-card mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            <Sparkles size={14} />
            Get in touch
          </div>

          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="text-gradient"> amazing.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
            Have an idea, a project, or an opportunity in mind?
            Let's connect and create something meaningful together.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Contact information */}
          <div
            ref={leftRef}
            className="flex min-w-0 flex-col gap-5"
          >
            {/* Profile card */}
            <div className="theme-card-strong relative overflow-hidden rounded-[28px] p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--accent)] opacity-[0.10] blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[var(--card-border)] bg-[var(--accent-light)]/30 text-2xl font-extrabold text-[var(--accent)] shadow-lg">
                    AN
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--ink)]">
                      {contactDetails.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                      {contactDetails.role}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-2 text-xs text-[var(--ink-muted)]">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Open to opportunities
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Email */}
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="group flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/50"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)]/30 text-[var(--accent)]">
                      <Mail size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--ink-muted)]">
                        Email me
                      </p>
                      <p className="truncate text-sm font-medium text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                        {contactDetails.email}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-[var(--ink-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                    />
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] p-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)]/30 text-[var(--accent)]">
                      <MapPin size={19} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--ink-muted)]">
                        Location
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-[var(--ink)]">
                        {contactDetails.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="theme-card-strong rounded-[28px] p-6 sm:p-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                Find me online
              </p>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] px-3 py-3.5 text-[var(--ink)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                >
                  
                  <span className="text-sm font-semibold">GitHub</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] px-3 py-3.5 text-[var(--ink)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                >
                 
                  <span className="text-sm font-semibold">LinkedIn</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <p className="mt-5 text-sm leading-6 text-[var(--ink-muted)]">
                Interested in frontend development, React applications,
                and building clean, responsive user experiences.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div
            ref={formRef}
            className="theme-card-strong relative min-w-0 overflow-hidden rounded-[28px] p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--accent)] opacity-[0.09] blur-3xl" />

            {submitted ? (
              <div
                role="status"
                className="relative flex min-h-[480px] flex-col items-center justify-center px-3 py-10 text-center"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-500 shadow-lg">
                  <CheckCircle2 size={42} />
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                  Successfully submitted
                </p>

                <h3 className="font-display text-3xl font-bold text-[var(--ink)]">
                  Message sent!
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--ink-muted)]">
                  Thank you, {form.name.trim().split(/\s+/)[0]}!
                  Your email has been submitted successfully. I'll
                  get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 rounded-xl border border-[var(--card-border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative space-y-5"
              >
                <div className="mb-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Contact form
                  </p>
                  <h3 className="font-display text-2xl font-bold text-[var(--ink)] sm:text-3xl">
                    Send me a message
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                    Fill in the details below and I'll get back to you.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]"
                  >
                    <User size={14} />
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)]/60 outline-none transition-all duration-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]"
                  >
                    <Mail size={14} />
                    Your email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)]/60 outline-none transition-all duration-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]"
                  >
                    <MessageSquare size={14} />
                    Your message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={5}
                    maxLength={4000}
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-y rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3.5 text-sm leading-6 text-[var(--ink)] placeholder:text-[var(--ink-muted)]/60 outline-none transition-all duration-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                  />
                  <p className="mt-2 text-right text-[10px] text-[var(--ink-muted)]">
                    {form.message.length}/4000
                  </p>
                </div>

                {/* Error state */}
                {error && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm leading-6 text-red-500"
                  >
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ background: "var(--gradient)" }}
                >
                  {sending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending message...
                    </>
                  ) : (
                    <>
                      <Send
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      />
                      Send message
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-6 text-[var(--ink-muted)]">
                  Prefer email?{" "}
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    Email me directly
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--card-border)] pt-6 text-center text-xs text-[var(--ink-muted)] sm:flex-row sm:text-left">
          <p>Designed with purpose · Built with code</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Let's create something great.
          </p>
        </div>
      </div>
    </section>
  );
}
