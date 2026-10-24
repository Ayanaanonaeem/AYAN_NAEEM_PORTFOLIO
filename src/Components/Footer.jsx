import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#080b12] px-5 pt-16 pb-8 sm:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/[0.08] pb-12 md:grid-cols-2 md:items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-xl font-bold text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/15">
                A.
              </span>

              <span className="text-2xl font-bold tracking-tight text-white">
                Ayan<span className="text-cyan-400">.</span>
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
              Building modern, responsive, and meaningful digital experiences
              with React and a passion for clean UI.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
              <FaCode className="text-cyan-400" />
              <span>Designed & developed with passion.</span>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:justify-self-end"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Let’s Connect
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Ayanaanonaeem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/ayan-naeem-70149131b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ayannaeem520@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <FaEnvelope size={18} />
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/15 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <FaArrowUp size={18} />
              </button>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Open to opportunities and collaborations.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {currentYear}{" "}
            <span className="font-medium text-gray-300">Ayan Naeem</span>. All
            rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-500">
            Made with <FaHeart className="text-red-400" /> and{" "}
            <span className="font-medium text-cyan-400">React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
