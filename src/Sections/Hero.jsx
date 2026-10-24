
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { ArrowDown, ArrowUpRight} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Orb() {
  const orbRef = useRef();

  useFrame((state, delta) => {
    if (orbRef.current) {
      orbRef.current.rotation.x += delta * 0.12;
      orbRef.current.rotation.y += delta * 0.2;
      orbRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.5}>
      <mesh ref={orbRef} scale={1.45}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial
          color="#00d9ff"
          emissive="#003b66"
          emissiveIntensity={1.5}
          roughness={0.16}
          metalness={0.8}
          distort={0.32}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 4]} intensity={35} color="#00d9ff" />
      <pointLight position={[-4, -2, 2]} intensity={18} color="#344bff" />

      <Orb />

      <Sparkles
        count={100}
        scale={5}
        size={2}
        speed={0.3}
        opacity={0.65}
        color="#65eaff"
      />
    </>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#080b12] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
            maskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 75%)",
          }}
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-12"
      >
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-gray-300 sm:text-xs">
                Available for opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-3 text-sm tracking-[0.25em] text-gray-400 sm:text-base"
            >
              HELLO, I'M AYAN NAEEM
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-6xl font-black leading-[0.95] tracking-[-0.07em] sm:text-8xl xl:text-[112px]"
              >
                CREATIVE
              </motion.h1>
            </div>

            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.35,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-6xl font-black leading-[1.05] tracking-[-0.07em] sm:text-8xl xl:text-[112px]"
              >
                <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  DEVELOPER
                </span>
                <span className="text-cyan-400">.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-7 max-w-lg text-sm leading-7 text-gray-400 sm:text-base sm:leading-8"
            >
              I craft modern digital experiences with{" "}
              <span className="text-white">React</span>, thoughtful design, and
              interactive motion — turning ideas into experiences people
              remember.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 text-sm font-bold text-[#061018] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(0,217,255,0.22)]"
              >
                Explore My Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                Let's Connect
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex items-center gap-4"
            >
              <a
                href="https://github.com/Ayanaanonaeem"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
              >
               <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ayan-naeem-70149131b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
              >
               <FaLinkedin size={18} />
              </a>

              <span className="h-px w-12 bg-white/15" />
              <span className="text-xs tracking-widest text-gray-500">
                REACT · UI · MOTION
              </span>
            </motion.div>
          </div>

          {/* Right 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 0.4,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto h-[300px] w-full max-w-[500px] sm:h-[420px] lg:h-[560px]"
          >
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.09] blur-[75px] sm:h-80 sm:w-80" />

            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              dpr={[1, 1.5]}
              gl={{ alpha: true, antialias: true }}
            >
              <Scene />
            </Canvas>

            {/* Floating UI labels */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 top-[18%] rounded-2xl border border-white/10 bg-[#0d1420]/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:left-0"
            >
              <p className="text-[9px] tracking-[0.2em] text-gray-500">
                CURRENT FOCUS
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                <span className="text-cyan-400">{"</>"}</span> React.js
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[17%] right-0 rounded-2xl border border-white/10 bg-[#0d1420]/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:right-2"
            >
              <p className="text-[9px] tracking-[0.2em] text-gray-500">
                BUILDING
              </p>
              <p className="mt-1 text-sm font-semibold text-cyan-300">
                Digital Experiences
              </p>
            </motion.div>

            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-[1px]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.8 },
          y: { delay: 1.2, duration: 1.8, repeat: Infinity },
        }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-cyan-300"
      >
        <span className="text-[9px] tracking-[0.3em]">SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
