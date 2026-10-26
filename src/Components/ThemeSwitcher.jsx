
    // import { useState, useEffect, useRef } from "react";
    // import { Palette, Sparkles, X, Check } from "lucide-react";

    // const themes = [
    // {
    //     id: "glass",
    //     label: "Glassmorphism",
    //     description: "Midnight · Electric Cyan",
    //     emoji: "✧",
    //     colors: ["#080B16", "#22D3EE", "#818CF8"],
    // },
    // {
    //     id: "clay",
    //     label: "Claymorphism",
    //     description: "Cream · Terracotta",
    //     emoji: "✿",
    //     colors: ["#FFF8EF", "#C96F45", "#F1D8BF"],
    // },
    // {
    //     id: "neu",
    //     label: "Neumorphism",
    //     description: "Silver · Royal Blue",
    //     emoji: "◈",
    //     colors: ["#E8EDF5", "#4F46E5", "#A5B4FC"],
    // },
    // {
    //     id: "flat",
    //     label: "Minimal",
    //     description: "Pure White · Charcoal",
    //     emoji: "◻",
    //     colors: ["#FFFFFF", "#111827", "#2563EB"],
    // },
    // ];

    // const particleColors = {
    // glass: ["#22D3EE", "#818CF8", "#FFFFFF", "#0891B2"],
    // clay: ["#C96F45", "#F6C9A8", "#FFF8EF", "#91452E"],
    // neu: ["#4F46E5", "#A5B4FC", "#FFFFFF", "#312E81"],
    // flat: ["#111827", "#2563EB", "#93C5FD", "#FFFFFF"],
    // };

    // function createSparkles(x, y, themeId) {
    // const layer = document.createElement("div");
    // layer.className = "theme-sparkle-layer";

    // const colors = particleColors[themeId] || particleColors.glass;
    // const count = 32;

    // for (let i = 0; i < count; i++) {
    //     const sparkle = document.createElement("div");

    //     sparkle.className = "theme-sparkle";

    //     const size = Math.random() * 9 + 4;
    //     const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
    //     const distance = Math.random() * 130 + 50;

    //     sparkle.style.width = `${size}px`;
    //     sparkle.style.height = `${size}px`;
    //     sparkle.style.left = `${x}px`;
    //     sparkle.style.top = `${y}px`;

    //     sparkle.style.background =
    //     colors[Math.floor(Math.random() * colors.length)];

    //     sparkle.style.setProperty(
    //     "--dx",
    //     `${Math.cos(angle) * distance}px`
    //     );

    //     sparkle.style.setProperty(
    //     "--dy",
    //     `${Math.sin(angle) * distance}px`
    //     );

    //     sparkle.style.animationDelay = `${Math.random() * 0.12}s`;

    //     if (i % 3 === 0) {
    //     sparkle.style.clipPath =
    //         "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";

    //     sparkle.style.borderRadius = "0";
    //     }

    //     layer.appendChild(sparkle);
    // }

    // document.body.appendChild(layer);

    // window.setTimeout(() => {
    //     layer.remove();
    // }, 1500);
    // }

    // export default function ThemeSwitcher({ theme, setTheme }) {
    // const [open, setOpen] = useState(false);
    // const menuRef = useRef(null);
    // const buttonRef = useRef(null);

    // useEffect(() => {
    //     function handlePointerDown(event) {
    //     if (!menuRef.current?.contains(event.target) &&
    //         !buttonRef.current?.contains(event.target)) {
    //         setOpen(false);
    //     }
    //     }

    //     function handleKeyDown(event) {
    //     if (event.key === "Escape") {
    //         setOpen(false);
    //     }
    //     }

    //     document.addEventListener("pointerdown", handlePointerDown);
    //     document.addEventListener("keydown", handleKeyDown);

    //     return () => {
    //     document.removeEventListener("pointerdown", handlePointerDown);
    //     document.removeEventListener("keydown", handleKeyDown);
    //     };
    // }, []);

    // const handleThemeChange = (event, newTheme) => {
    //     if (newTheme === theme) {
    //     setOpen(false);
    //     return;
    //     }

    //     const rect = event.currentTarget.getBoundingClientRect();

    //     const x = rect.left + rect.width / 2;
    //     const y = rect.top + rect.height / 2;

    //     createSparkles(x, y, newTheme);

    //     setTheme(newTheme);
    //     document.documentElement.setAttribute("data-theme", newTheme);

    //     setOpen(false);
    // };

    // return (
    //     <div className="fixed top-4 right-4 z-[100]">
    //     {/* Theme Toggle */}

    //     <button
    //         ref={buttonRef}
    //         type="button"
    //         onClick={() => setOpen((previous) => !previous)}
    //         aria-label={open ? "Close theme selector" : "Change design theme"}
    //         aria-expanded={open}
    //         aria-controls="theme-selector"
    //         className="
    //         group relative flex h-12 w-12 items-center justify-center
    //         overflow-hidden rounded-2xl theme-card-strong
    //         text-ink transition-all duration-300
    //         hover:-translate-y-0.5 hover:scale-105
    //         focus-visible:outline-2 focus-visible:outline-offset-4
    //         "
    //     >
    //         <span
    //         className="
    //             pointer-events-none absolute inset-0
    //             bg-gradient-to-br from-accent/15 to-transparent
    //             opacity-0 transition-opacity duration-300
    //             group-hover:opacity-100
    //         "
    //         />

    //         {open ? (
    //         <X size={20} className="relative z-10" />
    //         ) : (
    //         <Palette
    //             size={20}
    //             className="
    //             relative z-10 text-accent
    //             transition-transform duration-300
    //             group-hover:rotate-12
    //             "
    //         />
    //         )}

    //         <span className="sr-only">
    //         {open ? "Close theme menu" : "Open theme menu"}
    //         </span>
    //     </button>

    //     {/* Theme Menu */}

    //     <div
    //         ref={menuRef}
    //         id="theme-selector"
    //         aria-label="Choose a design theme"
    //         aria-hidden={!open}
    //         className={`
    //         absolute right-0 top-16 w-[min(19rem,calc(100vw-2rem))]
    //         origin-top-right theme-card-strong rounded-[24px] p-4
    //         shadow-2xl
    //         transition-all duration-300 ease-out
    //         ${
    //             open
    //             ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
    //             : "pointer-events-none -translate-y-2 scale-95 opacity-0"
    //         }
    //         `}
    //     >
    //         {/* Header */}

    //         <div className="mb-4 flex items-center justify-between">
    //         <div className="flex items-center gap-2.5">
    //             <div
    //             className="
    //                 flex h-9 w-9 items-center justify-center
    //                 rounded-xl bg-accent/10 text-accent
    //             "
    //             >
    //             <Sparkles size={17} />
    //             </div>

    //             <div>
    //             <h3 className="font-display text-sm font-bold text-ink">
    //                 Appearance
    //             </h3>

    //             <p className="text-xs text-ink-muted">
    //                 Personalize your experience
    //             </p>
    //             </div>
    //         </div>

    //         <span className="theme-chip rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
    //             {themes.length} styles
    //         </span>
    //         </div>

    //         {/* Theme Options */}

    //         <div className="space-y-2">
    //         {themes.map((item) => {
    //             const active = theme === item.id;

    //             return (
    //             <button
    //                 key={item.id}
    //                 type="button"
    //                 onClick={(event) => handleThemeChange(event, item.id)}
    //                 aria-pressed={active}
    //                 tabIndex={open ? 0 : -1}
    //                 className={`
    //                 group flex w-full items-center gap-3
    //                 rounded-2xl border p-3 text-left
    //                 transition-all duration-300
    //                 focus-visible:outline-2 focus-visible:outline-offset-2
    //                 ${
    //                     active
    //                     ? "border-accent/50 bg-accent/10"
    //                     : "border-transparent hover:border-accent/20 hover:bg-accent/5"
    //                 }
    //                 `}
    //             >
    //                 {/* Color Preview */}

    //                 <span
    //                 className="
    //                     relative flex h-12 w-12 shrink-0 items-center
    //                     justify-center overflow-hidden rounded-xl
    //                     border border-black/10 shadow-sm
    //                     transition-transform duration-300
    //                     group-hover:scale-105
    //                 "
    //                 style={{
    //                     background: item.colors[0],
    //                 }}
    //                 >
    //                 <span
    //                     className="absolute right-1.5 top-1.5 h-3 w-3 rounded-full"
    //                     style={{ background: item.colors[1] }}
    //                 />

    //                 <span
    //                     className="absolute bottom-1.5 left-1.5 h-4 w-4 rounded-md"
    //                     style={{ background: item.colors[2] }}
    //                 />

    //                 <span
    //                     className="absolute bottom-2 right-1.5 h-2 w-2 rounded-full"
    //                     style={{ background: item.colors[1] }}
    //                 />
    //                 </span>

    //                 {/* Theme Information */}

    //                 <span className="min-w-0 flex-1">
    //                 <span className="block text-sm font-semibold text-ink">
    //                     {item.label}
    //                 </span>

    //                 <span className="mt-1 block text-[11px] text-ink-muted">
    //                     {item.description}
    //                 </span>
    //                 </span>

    //                 {/* Active Indicator */}

    //                 <span
    //                 className={`
    //                     flex h-6 w-6 shrink-0 items-center justify-center
    //                     rounded-full transition-all duration-300
    //                     ${
    //                     active
    //                         ? "bg-accent text-white"
    //                         : "border border-ink-muted/20 text-transparent"
    //                     }
    //                 `}
    //                 >
    //                 {active && <Check size={14} strokeWidth={3} />}
    //                 </span>
    //             </button>
    //             );
    //         })}
    //         </div>

    //         {/* Footer */}

    //         <div className="mt-4 flex items-center gap-2 border-t border-ink-muted/15 pt-3">
    //         <span className="h-1.5 w-1.5 rounded-full bg-accent" />

    //         <p className="text-[11px] text-ink-muted">
    //             Currently using{" "}
    //             <span className="font-semibold text-ink">
    //             {themes.find((item) => item.id === theme)?.label || "Glassmorphism"}
    //             </span>
    //         </p>
    //         </div>
    //     </div>
    //     </div>
    // );
    // }

import { useState, useEffect, useRef } from "react";
import { Palette, X, Check } from "lucide-react";

const themes = [
  {
    id: "glass",
    label: "Glassmorphism",
    description: "Midnight · Electric Cyan",
    colors: ["#080B16", "#22D3EE", "#818CF8"],
  },
  {
    id: "clay",
    label: "Claymorphism",
    description: "Cream · Terracotta",
    colors: ["#FFF8EF", "#C96F45", "#F1D8BF"],
  },
  {
    id: "neu",
    label: "Neumorphism",
    description: "Silver · Royal Blue",
    colors: ["#E8EDF5", "#4F46E5", "#A5B4FC"],
  },
  {
    id: "flat",
    label: "Minimal",
    description: "Pure White · Charcoal",
    colors: ["#FFFFFF", "#111827", "#2563EB"],
  },
];

function getThemeColors(themeId) {
  const selected = themes.find((item) => item.id === themeId);
  return selected?.colors || themes[0].colors;
}

function animateThemeChange(newTheme, setTheme, setAnimating) {
  if (document.documentElement.dataset.theme === newTheme) {
    return;
  }

  const root = document.documentElement;
  const colors = getThemeColors(newTheme);

  // Create the theme transition overlay.
  const overlay = document.createElement("div");
  overlay.className = "theme-wipe-overlay";
  overlay.setAttribute("aria-hidden", "true");

  overlay.style.setProperty("--wipe-bg", colors[0]);
  overlay.style.setProperty("--wipe-accent", colors[1]);
  overlay.style.setProperty("--wipe-highlight", colors[2]);

  document.body.appendChild(overlay);
  setAnimating(true);

  // Animate a full-screen wave from top to bottom.
  const animation = overlay.animate(
    [
      {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      },
      {
        clipPath:
          "polygon(0 0, 100% 0, 100% 42%, 0 28%)",
        offset: 0.28,
      },
      {
        clipPath:
          "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        offset: 0.58,
      },
      {
        clipPath:
          "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        offset: 0.72,
      },
      {
        clipPath:
          "polygon(0 0, 100% 0, 100% 0, 0 0)",
      },
    ],
    {
  duration: 650,
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
  fill: "forwards",
}
  );

  // Change the actual theme after the wipe covers the page.
  const switchTimer = window.setTimeout(() => {
    root.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  }, 300);

  animation.onfinish = () => {
    window.clearTimeout(switchTimer);
    root.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
    overlay.remove();
    setAnimating(false);
  };

  animation.oncancel = () => {
    window.clearTimeout(switchTimer);
    overlay.remove();
    setAnimating(false);
  };
}

export default function ThemeSwitcher({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const animationLock = useRef(false);

  useEffect(() => {
    function handlePointerDown(event) {
      if (
        !menuRef.current?.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    animationLock.current = animating;
  }, [animating]);

  const handleThemeChange = (newTheme) => {
    if (newTheme === theme || animationLock.current) {
      setOpen(false);
      return;
    }

    animationLock.current = true;
    setOpen(false);

    animateThemeChange(newTheme, setTheme, setAnimating);

    window.setTimeout(() => {
      animationLock.current = false;
    }, 700);
  };

  return (
   <div className="relative z-[100] shrink-0">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-label={open ? "Close theme selector" : "Change design theme"}
        aria-expanded={open}
        aria-controls="theme-selector"
        className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl theme-card-strong text-ink transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {open ? (
          <X size={20} className="relative z-10" />
        ) : (
          <Palette
            size={20}
            className="relative z-10 text-accent transition-transform duration-300 group-hover:rotate-12"
          />
        )}
      </button>

      <div
        ref={menuRef}
        id="theme-selector"
        aria-label="Choose a design theme"
        aria-hidden={!open}
        className={`absolute right-0 top-16 w-[min(19rem,calc(100vw-2rem))] origin-top-right theme-card-strong rounded-[24px] p-4 shadow-2xl transition-all duration-300 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-display text-sm font-bold text-ink">
              Appearance
            </h3>
            <p className="mt-1 text-xs text-ink-muted">
              Choose your visual style
            </p>
          </div>

          <span className="theme-chip rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
            {themes.length} styles
          </span>
        </div>

        <div className="space-y-2">
          {themes.map((item) => {
            const active = theme === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleThemeChange(item.id)}
                aria-pressed={active}
                tabIndex={open ? 0 : -1}
                className={`group flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  active
                    ? "border-accent/50 bg-accent/10"
                    : "border-transparent hover:border-accent/20 hover:bg-accent/5"
                }`}
              >
                <span
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black/10 shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{ background: item.colors[0] }}
                >
                  <span
                    className="absolute right-1.5 top-1.5 h-3 w-3 rounded-full"
                    style={{ background: item.colors[1] }}
                  />
                  <span
                    className="absolute bottom-1.5 left-1.5 h-4 w-4 rounded-md"
                    style={{ background: item.colors[2] }}
                  />
                  <span
                    className="absolute bottom-2 right-1.5 h-2 w-2 rounded-full"
                    style={{ background: item.colors[1] }}
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-ink">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-[11px] text-ink-muted">
                    {item.description}
                  </span>
                </span>

                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    active
                      ? "bg-accent text-white"
                      : "border border-ink-muted/20 text-transparent"
                  }`}
                >
                  {active && <Check size={14} strokeWidth={3} />}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center gap-2 border-t border-ink-muted/15 pt-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="text-[11px] text-ink-muted">
            Currently using{" "}
            <span className="font-semibold text-ink">
              {themes.find((item) => item.id === theme)?.label ||
                "Glassmorphism"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
