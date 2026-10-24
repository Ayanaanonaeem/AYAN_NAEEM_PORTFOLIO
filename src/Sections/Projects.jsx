
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    number: "01",
    name: "StreamXCoder",
    category: "FINAL YEAR PROJECT",
    description:
      "A collaborative online coding platform where developers can write, execute, and test code directly in the browser.",
    image: "/projects/streamXcoder.png",
    tech: ["React", "Tailwind CSS", "Firebase", "Judge0 API"],
    live: "https://streamxcoder.onrender.com",
    github: "https://github.com/ssuetfyp2022f/streamXcoder",
    color: "#00e5ff",
  },
  {
  number: "02",
  name: "Netflix Landing Page",
  category: "FRONTEND PROJECT",
  description:
    "A Netflix-inspired landing page recreated using HTML and CSS, focusing on a cinematic dark UI, clean layouts, responsive styling, and a visually engaging streaming platform design.",
  image: "/projects/netflix.png",
  tech: ["HTML5", "CSS3", "Responsive Design"],
  live: "https://ayanaanonaeem.github.io/Netflix/",
  github: "https://github.com/Ayanaanonaeem",
  color: "#e50914",
},
  {
    number: "03",
    name: "FITX",
    category: "GYM WEBSITE",
    description:
      "A modern fitness website featuring a bold visual identity, responsive layouts, and an engaging user experience.",
    image: "/projects/fitx.png",
    tech: ["React", "Vite", "Tailwind CSS"],
    live: "https://fit-flax-one.vercel.app",
    github: "https://github.com/Ayanaanonaeem/FITX",
    color: "#ff4545",
  },
  {
  number: "04",
  name: "Todo Project",
  category: "PERSONAL PROJECT",
  description:
    "A responsive task management application built with React and Redux for centralized state management, allowing users to add, complete, delete, and manage tasks through a clean and intuitive interface.",
  image: "/projects/redux-todo.png",
  tech: ["React", "Redux", "JavaScript", "Tailwind CSS"],
  live: "#home",
  github: "https://github.com/Ayanaanonaeem",
  color: "#8b5cf6",
},
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 65 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0c111b]"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-[100px] transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: project.color }}
      />

      <div className="relative overflow-hidden border-b border-white/10 bg-[#080b12]">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <span className="font-mono text-xs tracking-widest text-gray-500">
            PROJECT_{project.number}
          </span>
        </div>

        <div className="relative aspect-[18/8] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.opacity = "0";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0c111b]/70 via-transparent to-transparent" />

          <span
            className="absolute bottom-4 left-4 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-md"
            style={{
              color: project.color,
              borderColor: `${project.color}55`,
              backgroundColor: "#080b12cc",
            }}
          >
            {project.category}
          </span>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} live demo`}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-cyan-400 hover:text-black group-hover:opacity-100"
          >
            <FaExternalLinkAlt size={13} />
          </a>
        </div>
      </div>

      <div className="relative p-6 sm:p-7">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-sm" style={{ color: project.color }}>
            /{project.number}
          </span>

          <span className="h-px w-12 bg-white/15 transition-all duration-300 group-hover:w-20"
            style={{ backgroundColor: `${project.color}70` }}
          />
        </div>

        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-3xl">
          {project.name}
        </h3>

        <p className="mb-6 min-h-[72px] text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        <div className="mb-7 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 border-t border-white/[0.08] pt-5">
          <a
            href={project.live}
            target={project.live.startsWith("#") ? "_self" : "_blank"}
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-300"
          >
            Live Demo <FaExternalLinkAlt size={11} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <FaGithub size={16} /> Source Code
          </a>

          <FaArrowRight className="ml-auto text-sm text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080b12] px-5 py-24 sm:px-8 sm:py-32 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-40 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="font-mono text-xs tracking-[0.3em] text-cyan-300">
                SELECTED WORK
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Things I've
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                built in code.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-gray-400 md:text-base">
            A collection of projects where ideas become interactive digital
            experiences, built with modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.a
          href="https://github.com/Ayanaanonaeem"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mx-auto mt-12 flex w-fit items-center gap-3 rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-gray-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
        >
          Explore More on GitHub <FaGithub size={17} />
        </motion.a>
      </div>
    </section>
  );
}
