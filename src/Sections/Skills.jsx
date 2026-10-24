
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaPalette,
  FaServer,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "Building interactive interfaces",
    icon: FaCode,
    color: "#00e5ff",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Redux", icon: SiRedux, color: "#a78bfa" },
      { name: "Vite", icon: SiVite, color: "#bd34fe" },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Learning server-side development",
    icon: FaServer,
    color: "#818cf8",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
      { name: "Express.js", icon: SiExpress, color: "#d1d5db" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    ],
  },
  {
    title: "Tools & Workflow",
    subtitle: "Development and collaboration",
    icon: FaTools,
    color: "#22d3ee",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "GitHub", icon: FaGithub, color: "#f3f4f6" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "VS Code", icon: FaCode, color: "#38bdf8" },
    ],
  },
];

function SkillCard({ skill, index, visible }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.035 }}
      whileHover={{ y: -4 }}
      className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-4"
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-[#080b12] transition-transform duration-300 group-hover:scale-110"
      >
        <Icon size={21} style={{ color: skill.color }} />
      </div>

      <div className="min-w-0">
        <h4 className="truncate text-sm font-semibold text-gray-200 transition-colors group-hover:text-white">
          {skill.name}
        </h4>
        <p className="mt-1 text-[10px] tracking-wider text-gray-600">
          TECHNOLOGY
        </p>
      </div>

      <div className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/30 transition-all group-hover:bg-cyan-300 group-hover:shadow-[0_0_8px_#00e5ff]" />
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, {
    once: true,
    amount: 0.08,
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080b12] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="pointer-events-none absolute right-[-150px] top-[15%] h-96 w-96 rounded-full bg-blue-600/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-150px] h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

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
              MY TECH STACK
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Tools of my
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                craft.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-gray-400 sm:text-base">
              The technologies I use to build responsive interfaces, develop
              web applications, and keep growing as a developer.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1019]/90 p-5 sm:p-6"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.08] blur-[60px]"
                  style={{ backgroundColor: group.color }}
                />

                <div className="relative mb-6 flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border"
                    style={{
                      color: group.color,
                      borderColor: `${group.color}35`,
                      backgroundColor: `${group.color}10`,
                    }}
                  >
                    <GroupIcon size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {group.skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index + groupIndex * 2}
                      visible={visible}
                    />
                  ))}
                </div>

                <div
                  className="mt-6 h-px w-full opacity-40"
                  style={{
                    background: `linear-gradient(to right, ${group.color}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.035] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#00e5ff]" />
            <p className="text-sm font-medium text-gray-200">
              Always learning, always building.
            </p>
          </div>

          <p className="text-xs leading-6 text-gray-500">
            Currently focused on React and growing my MERN stack skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
