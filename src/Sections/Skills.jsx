
import { motion } from 'motion/react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiVite,
} from 'react-icons/si'

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Building modern user interfaces',
    skills: [
      { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
      { name: 'React', Icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux Toolkit', Icon: SiRedux, color: '#764ABC' },
    ],
  },
  {
    title: 'Backend & Services',
    description: 'Learning server-side development',
    skills: [
      { name: 'Node.js', Icon: FaNodeJs, color: '#5FA04E' },
      { name: 'Express.js', Icon: SiExpress, color: '#D1D5DB' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Tools',
    description: 'Development workflow',
    skills: [
      { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
      { name: 'Vite', Icon: SiVite, color: '#A78BFA' },
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070b12] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-cyan-400">
            MY TOOLKIT
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              work with.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            The tools and technologies I use while building projects and
            growing as a developer.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-2xl border border-white/[0.08] bg-[#0b111c]/80 p-6 transition duration-300 hover:border-cyan-400/20 sm:p-7"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {group.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {group.skills.map(({ name, Icon, color }) => (
                  <div
                    key={name}
                    className="group flex min-h-[94px] flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
                  >
                    <Icon
                      size={27}
                      style={{ color }}
                      className="transition duration-300 group-hover:scale-110"
                    />

                    <span className="text-center text-xs font-medium text-slate-300 transition group-hover:text-white">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
