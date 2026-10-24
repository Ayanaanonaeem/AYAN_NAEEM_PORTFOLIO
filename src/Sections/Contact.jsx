import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUpRightFromSquare,
  FaPaperPlane,
  FaCheck,
  FaCopy,
} from "react-icons/fa6";

const EMAIL = "ayannaeem520@gmail.com";

export default function Contact() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, { once: true, amount: 0.1 });
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ayanaano5@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080b12] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="pointer-events-none absolute left-[-150px] top-[20%] h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="font-mono text-xs tracking-[0.3em] text-cyan-300">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Have an idea?
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Let's connect.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
            Looking for a frontend developer, have a project in mind, or simply
            want to connect? My inbox is open.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c111b] p-6 sm:p-7">
              <p className="text-xs tracking-[0.2em] text-gray-500">
                DIRECT CONTACT
              </p>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300">
                  <FaEnvelope size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Email me at</p>
                  <p className="mt-1 break-all text-sm font-medium text-white">
                    {EMAIL}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                </button>
              </div>

              {copied && (
                <p className="mt-3 text-xs text-cyan-300">
                  Email copied to clipboard.
                </p>
              )}

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=ayannaaem520@gmail.com&su=${encodeURIComponent("Portfolio Contact")}&body=${encodeURIComponent("Hi Ayan,\n\nI visited your portfolio and would like to connect with you.\n\n")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-cyan-400/30 bg-white/[0.04] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10 sm:w-auto"
              >
                <FaPaperPlane className="text-cyan-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                Send an Email
                <FaArrowUpRightFromSquare className="text-sm text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
              </a>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0c111b] p-6 sm:p-7">
              <p className="text-xs tracking-[0.2em] text-gray-500">
                FIND ME ONLINE
              </p>

              <a
                href="https://github.com/Ayanaanonaeem"
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center gap-4 rounded-xl border border-white/[0.06] p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.025]"
              >
                <FaGithub size={23} className="text-white" />
                <div>
                  <p className="text-sm font-semibold">GitHub</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Explore my projects
                  </p>
                </div>
                <FaArrowUpRightFromSquare
                  size={12}
                  className="ml-auto text-gray-500"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/ayan-naeem-70149131b/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center gap-4 rounded-xl border border-white/[0.06] p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.025]"
              >
                <FaLinkedinIn size={23} className="text-[#0A9FE8]" />
                <div>
                  <p className="text-sm font-semibold">LinkedIn</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Let's connect professionally
                  </p>
                </div>
                <FaArrowUpRightFromSquare
                  size={12}
                  className="ml-auto text-gray-500"
                />
              </a>
            </div>

            <div className="flex items-center gap-3 px-2 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
              </span>
              <p className="text-xs text-gray-400">
                Open to frontend opportunities and collaborations
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 25 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.08] bg-[#0c111b] p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Send a message
                </h3>
                <p className="mt-2 text-xs leading-6 text-gray-500">
                  Fill in the details and your email app will open.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                <FaPaperPlane size={18} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-medium text-gray-400"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-[#080b12] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-medium text-gray-400"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#080b12] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-xs font-medium text-gray-400"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project inquiry / Job opportunity"
                className="w-full rounded-xl border border-white/10 bg-[#080b12] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-medium text-gray-400"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me a little about your idea..."
                className="w-full resize-y rounded-xl border border-white/10 bg-[#080b12] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ayannaeem520@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 font-semibold text-[#080b12] shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              <FaEnvelope className="text-lg transition-transform duration-300 group-hover:scale-110" />
              Compose Email
              <FaArrowUpRightFromSquare className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <p className="mt-4 text-center text-[11px] leading-5 text-gray-600">
              This form opens your email application. It does not send messages
              directly from the website.
            </p>
          </motion.form>
        </div>

        <div className="mt-20 border-t border-white/[0.08] pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <a
              href="#home"
              className="text-lg font-black tracking-tight text-white"
            >
              AYAN<span className="text-cyan-400">.</span>
            </a>

            <p className="text-xs text-gray-600">
              Designed & built with React by Ayan Naeem.
            </p>

            <a
              href="#home"
              className="text-xs text-gray-500 transition hover:text-cyan-300"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
