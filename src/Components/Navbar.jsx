
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10"
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.09] bg-[#080b12]/75 px-5 py-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:px-7">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/30 bg-cyan-400/[0.08]">
            <span className="text-lg font-black tracking-tighter text-cyan-300">
              AN
            </span>
            <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-bold tracking-[0.15em] text-white">
              AYAN<span className="text-cyan-400">.</span>
            </p>
            <p className="mt-1 text-[9px] tracking-[0.2em] text-gray-500">
              CREATIVE DEVELOPER
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative rounded-lg px-4 py-2 text-[13px] font-medium text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}
              <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.07] px-4 py-2.5 text-xs font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-[#080b12] sm:flex"
        >
          Let's Talk
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:border-cyan-400/40 hover:text-cyan-300 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f18]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm text-gray-300 transition-colors hover:bg-cyan-400/[0.07] hover:text-cyan-300"
                >
                  {link.name}
                  <ArrowUpRight size={15} className="opacity-50" />
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-[#080b12]"
              >
                Let's Talk <ArrowUpRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
