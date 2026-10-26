
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);

  const navRef = useRef(null);
  const linksRef = useRef(null);
  const pillRef = useRef(null);
  const linkRefs = useRef({});
  const mobileMenuRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect the currently visible section
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length) {
          const currentId = visibleSections[0].target.id;

          const currentLink = navLinks.find(
            (link) => link.href === `#${currentId}`
          );

          if (currentLink) {
            setActive(currentLink.name);
          }
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Position the animated navigation indicator
  useLayoutEffect(() => {
    const target = hovered || active;
    const element = linkRefs.current[target];

    if (!element || !pillRef.current || !linksRef.current) {
      return;
    }

    const parentRect = linksRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    gsap.to(pillRef.current, {
      x: elementRect.left - parentRect.left,
      width: elementRect.width,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
      overwrite: true,
    });
  }, [hovered, active, scrolled]);

  // Recalculate indicator position when viewport changes
  useEffect(() => {
    const handleResize = () => {
      const element = linkRefs.current[hovered || active];

      if (!element || !pillRef.current || !linksRef.current) {
        return;
      }

      const parentRect = linksRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      gsap.set(pillRef.current, {
        x: elementRect.left - parentRect.left,
        width: elementRect.width,
        opacity: 1,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [active, hovered]);

  // Navbar entrance animation
  useEffect(() => {
    if (!navRef.current) return;

    const animation = gsap.fromTo(
      navRef.current,
      {
        y: -35,
        opacity: 0,
        scale: 0.97,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      }
    );

    return () => animation.kill();
  }, []);

  // Lock body scrolling when the mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  // Animate mobile menu
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    const menu = mobileMenuRef.current;
    const items = menu.querySelectorAll("[data-menu-item]");

    if (mobileOpen) {
      gsap.fromTo(
        menu,
        {
          opacity: 0,
          y: -12,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        items,
        {
          opacity: 0,
          x: -10,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.045,
          delay: 0.06,
          ease: "power2.out",
        }
      );
    }
  }, [mobileOpen]);

  const handleNavigation = (name) => {
    setActive(name);
    setHovered(null);
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-5">

      {/* Ambient background glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-0
          h-24 w-[min(90vw,760px)]
          -translate-x-1/2
          opacity-40 blur-3xl
        "
        style={{
          background:
            "radial-gradient(ellipse, var(--glow), transparent 70%)",
        }}
      />

      {/* Main navbar */}

      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`
          relative mx-auto flex
          w-full max-w-6xl items-center justify-between
          gap-3 rounded-[22px] border
          border-ink-muted/15
          theme-card-strong
          transition-all duration-300
          ${
            scrolled
              ? "px-3 py-2 shadow-xl sm:px-4"
              : "px-3 py-3 shadow-lg sm:px-5 sm:py-3.5"
          }
        `}
      >
        {/* Subtle top highlight */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-8 top-0
            h-px bg-gradient-to-r
            from-transparent via-accent/60 to-transparent
          "
        />

        {/* Logo */}

        <a
          href="#home"
          onClick={() => handleNavigation("Home")}
          className="
            group relative z-10 flex shrink-0
            items-center gap-2.5 rounded-xl
          "
          aria-label="Ayan — Home"
        >
          <span
            className="
              relative flex h-10 w-10 items-center
              justify-center overflow-hidden rounded-xl
              border border-accent/25 bg-accent/10
              transition-all duration-300
              group-hover:border-accent/50
              group-hover:bg-accent/15
            "
          >
            <span
              className="
                absolute inset-0 bg-gradient-to-br
                from-accent/15 to-transparent
              "
            />

            <span
              className="
                relative font-display text-lg
                font-extrabold tracking-tighter text-accent
              "
            >
              A.
            </span>
          </span>

          <span className="flex flex-col">
            <span
              className="
                font-display text-base font-bold
                leading-tight tracking-tight text-ink
                sm:text-lg
              "
            >
              Ayan<span className="text-accent">.</span>
            </span>

            <span
              className="
                mt-0.5 hidden text-[9px] font-semibold
                uppercase tracking-[0.18em] text-ink-muted
                sm:block
              "
            >
              Frontend Developer
            </span>
          </span>
        </a>

        {/* Desktop navigation */}

        <div
          ref={linksRef}
          className="
            relative hidden items-center gap-0.5
            rounded-full p-1 md:flex
          "
          onMouseLeave={() => setHovered(null)}
        >
          {/* Sliding active indicator */}

          <span
            ref={pillRef}
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-y-1 left-0
              rounded-full theme-chip
              opacity-0
            "
          />

          {navLinks.map((link) => {
            const isActive = active === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                ref={(element) => {
                  linkRefs.current[link.name] = element;
                }}
                onMouseEnter={() => setHovered(link.name)}
                onFocus={() => setHovered(link.name)}
                onBlur={() => setHovered(null)}
                onClick={() => handleNavigation(link.name)}
                aria-current={isActive ? "location" : undefined}
                className={`
                  relative z-10 rounded-full
                  px-3 py-2 text-[13px] font-semibold
                  transition-colors duration-200
                  lg:px-4
                  ${
                    isActive
                      ? "text-accent"
                      : "text-ink-muted hover:text-ink"
                  }
                `}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right side actions */}

        <div className="flex shrink-0 items-center gap-2">

          {/* Availability indicator */}

          <div
            className="
              hidden items-center gap-2 rounded-full
              border border-ink-muted/15
              bg-accent/5 px-3 py-2
              lg:flex
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute inline-flex h-full w-full
                  animate-ping rounded-full bg-accent opacity-40
                "
              />

              <span
                className="
                  relative inline-flex h-2 w-2
                  rounded-full bg-accent
                "
              />
            </span>

            <span className="text-[11px] font-semibold text-ink-muted">
              Open to opportunities
            </span>
          </div>

          {/* Hire Me CTA */}

          <a
            href="#contact"
            onClick={() => handleNavigation("Contact")}
            className="
              group hidden items-center gap-2
              rounded-full bg-gradient-to-r
              from-accent to-accent-dark
              px-4 py-2.5 text-sm font-bold
              text-white shadow-md
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-lg hover:shadow-accent/20
              sm:inline-flex
            "
          >
            Hire Me

            <ArrowUpRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          {/* Mobile menu toggle */}

          <button
            type="button"
            onClick={() => setMobileOpen((previous) => !previous)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl border border-ink-muted/15
              bg-accent/5 text-ink
              transition-all duration-200
              hover:border-accent/30 hover:bg-accent/10
              sm:hidden
            "
          >
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}

      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={mobileOpen ? 0 : -1}
        onClick={() => setMobileOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/30 backdrop-blur-sm
          transition-opacity duration-300 sm:hidden
          ${
            mobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Mobile menu */}

      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className={`
          absolute left-4 right-4 top-[88px] z-50
          rounded-[26px] border border-ink-muted/15
          theme-card-strong p-3 shadow-2xl
          sm:hidden
          ${
            mobileOpen
              ? "pointer-events-auto"
              : "pointer-events-none invisible"
          }
        `}
      >
        {/* Mobile menu heading */}

        <div
          className="
            mb-2 flex items-center justify-between
            border-b border-ink-muted/10 px-3 py-3
          "
        >
          <div className="flex items-center gap-2">
            <Sparkles size={15} className="text-accent" />

            <span
              className="
                text-[11px] font-bold uppercase
                tracking-[0.16em] text-ink-muted
              "
            >
              Navigation
            </span>
          </div>

          <span className="text-[10px] font-medium text-ink-muted">
            Explore
          </span>
        </div>

        {/* Mobile navigation links */}

        <div className="space-y-1">
          {navLinks.map((link, index) => {
            const isActive = active === link.name;

            return (
              <a
                key={link.name}
                data-menu-item
                href={link.href}
                tabIndex={mobileOpen ? 0 : -1}
                onClick={() => handleNavigation(link.name)}
                aria-current={isActive ? "location" : undefined}
                className={`
                  flex items-center justify-between
                  rounded-2xl border px-4 py-3.5
                  text-sm font-semibold
                  transition-colors duration-200
                  ${
                    isActive
                      ? "border-accent/20 bg-accent/10 text-accent"
                      : "border-transparent text-ink hover:bg-accent/5"
                  }
                `}
              >
                <span className="flex items-center gap-3">
                  <span
                    className="
                      font-mono text-[10px]
                      tracking-wider text-ink-muted/70
                    "
                  >
                    0{index + 1}
                  </span>

                  {link.name}
                </span>

                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile CTA */}

        <a
          data-menu-item
          href="#contact"
          tabIndex={mobileOpen ? 0 : -1}
          onClick={() => handleNavigation("Contact")}
          className="
            mt-3 flex w-full items-center justify-center
            gap-2 rounded-2xl
            bg-gradient-to-r from-accent to-accent-dark
            px-4 py-3.5 text-sm font-bold text-white
            shadow-md transition-all duration-300
            hover:shadow-lg hover:shadow-accent/20
          "
        >
          Let's Work Together

          <ArrowUpRight size={17} />
        </a>

        {/* Availability */}

        <div
          data-menu-item
          className="
            mt-3 flex items-center justify-center
            gap-2 py-2 text-xs text-ink-muted
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          Open to opportunities
        </div>
      </div>
    </header>
  );
}
