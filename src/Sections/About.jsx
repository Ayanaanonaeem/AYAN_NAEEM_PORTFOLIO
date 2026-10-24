import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { FaCode, FaLaptopCode, FaLightbulb, FaRocket } from "react-icons/fa";

const principles = [
  {
    icon: FaCode,
    number: "01",
    title: "Clean Code",
    description: "Building maintainable, reusable and scalable interfaces.",
  },
  {
    icon: FaLaptopCode,
    number: "02",
    title: "User Experience",
    description: "Turning complex ideas into intuitive digital experiences.",
  },
  {
    icon: FaLightbulb,
    number: "03",
    title: "Creative Thinking",
    description: "Exploring fresh ideas beyond ordinary layouts and designs.",
  },
  {
    icon: FaRocket,
    number: "04",
    title: "Always Evolving",
    description: "Learning new technologies and improving with every project.",
  },
];


function Crystal() {
  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.2}>
      <mesh rotation={[0.2, 0.3, 0]}>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#0077FF"
          emissiveIntensity={0.8}
          metalness={0.4}
          roughness={0.3}
          flatShading
        />
      </mesh>
    </Float>
  );
}


function AboutScene() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <pointLight position={[3, 3, 3]} intensity={25} color="#00D9FF" />

      <pointLight position={[-3, -2, 2]} intensity={20} color="#635BFF" />

      <Crystal />

      <Sparkles
  count={20}
  scale={3.5}
  size={1.5}
  speed={0.15}
  color="#00D9FF"
/>
    </>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const visible = useInView(sectionRef, { once: true, amount: 0.15 });
  const cardsVisible = useInView(cardsRef, { once: true, amount: 0.15 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [-12, 18]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080b12] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[130px]" />
        <div className="absolute bottom-0 right-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.06] blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.2) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-xs font-semibold tracking-[0.3em] text-cyan-300">
              GET TO KNOW ME
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Not just code.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              A way to create.
            </span>
          </h2>
        </motion.div>

        {/* Main About layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative border-l border-cyan-400/40 pl-6 sm:pl-8"
            >
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00d9ff]" />

              <p className="text-lg leading-9 text-gray-300 sm:text-xl sm:leading-10">
                I'm <span className="font-semibold text-white">Ayan Naeem</span>
                , an IT graduate and frontend developer passionate about
                creating{" "}
                <span className="text-cyan-300">
                  modern, interactive web experiences.
                </span>
              </p>

              <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
                I work with React to transform ideas into responsive interfaces,
                combining thoughtful UI design with smooth motion and meaningful
                interactions. I'm continuously growing my skills across the MERN
                stack and exploring the possibilities of 3D on the web.
              </p>

              <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
                For me, great development isn't only about making something
                work. It's about making it feel right, look memorable, and
                deliver a better experience to the people using it.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 grid grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                { value: "React", label: "Frontend Focus" },
                { value: "MERN", label: "Growing Skillset" },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors hover:border-cyan-400/30"
                >
                  <p className="text-2xl font-black tracking-tight text-cyan-300 sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs tracking-wide text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Three.js crystal */}
          <motion.div
            className="relative mx-auto h-[330px] w-full max-w-[440px] sm:h-[420px]"
          >
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.1] blur-[75px] sm:h-72 sm:w-72" />

            <div className="absolute inset-0 rounded-full border border-cyan-300/[0.09]" />
            <div className="absolute inset-[9%] rounded-full border border-dashed border-blue-400/[0.15]" />

            <Canvas
              camera={{ position: [0, 0, 5], fov: 40 }}
              dpr={[1, 1.5]}
              gl={{ alpha: true, antialias: true }}
            >
              <AboutScene />
              
            </Canvas>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-[17%] rounded-xl border border-white/10 bg-[#0b111d]/85 px-4 py-3 backdrop-blur-xl"
            >
              <p className="text-[9px] tracking-[0.2em] text-gray-500">
                MY MINDSET
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Build. Learn. Repeat.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[17%] right-0 rounded-xl border border-white/10 bg-[#0b111d]/85 px-4 py-3 backdrop-blur-xl"
            >
              <p className="text-[9px] tracking-[0.2em] text-gray-500">
                CURRENTLY EXPLORING
              </p>
              <p className="mt-1 text-sm font-semibold text-cyan-300">
                Motion + 3D
              </p>
            </motion.div>

            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.3em] text-gray-600">
              CREATIVITY MEETS TECHNOLOGY
            </p>
          </motion.div>
        </div>

        {/* Principles cards */}
        <div ref={cardsRef} className="mt-28 sm:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <p className="mb-3 text-xs tracking-[0.25em] text-cyan-300">
                WHAT DRIVES ME
              </p>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The way I work<span className="text-cyan-400">.</span>
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-7 text-gray-500">
              The principles behind every interface I build and every skill I
              develop.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 35 }}
                  animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-[#071018]">
                      <Icon size={19} />
                    </div>
                    <span className="text-xs tracking-widest text-gray-600">
                      /{item.number}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-gray-500 transition-colors group-hover:text-gray-400">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
