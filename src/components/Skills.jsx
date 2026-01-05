import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact,
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiC,
  SiCplusplus,
  SiKotlin,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiR,
  SiGit,
  SiVisualstudiocode,
  SiEclipseide,
  SiAndroidstudio,
  SiTailwindcss,
  SiExpress,
  SiMicrosoftsqlserver,
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, level: 90, color: 'text-yellow-400' },
        { name: 'C', icon: SiC, level: 80, color: 'text-blue-400' },
        { name: 'C++', icon: SiCplusplus, level: 80, color: 'text-slate-400' },
        { name: 'Python', icon: SiPython, level: 70, color: 'text-blue-500' },
        { name: 'Kotlin', icon: SiKotlin, level: 60, color: 'text-blue-500' },
        { name: 'PHP', icon: SiPhp, level: 70, color: 'text-purple-500' },
        { name: 'R', icon: SiR, level: 75, color: 'text-blue-400' },
        { name: 'HTML5', icon: SiHtml5, level: 90, color: 'text-orange-500' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: SiReact, level: 95, color: 'text-cyan-400' },
        { name: 'Node.js', icon: SiNodedotjs, level: 85, color: 'text-green-500' },
        { name: 'Express', icon: SiExpress, level: 80, color: 'text-gray-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: 'text-teal-400' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: SiGit, level: 90, color: 'text-orange-500' },
        { name: 'VS Code', icon: SiVisualstudiocode, level: 90, color: 'text-blue-500' },
        { name: 'Eclipse', icon: SiEclipseide, level: 80, color: 'text-purple-500' },
        { name: 'Android Studio', icon: SiAndroidstudio, level: 75, color: 'text-green-400' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: 'text-green-400' },
        { name: 'SSMS', icon: SiMicrosoftsqlserver, level: 80, color: 'text-red-500' },

        
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-black"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-white">My </span>
            <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-primary mx-auto mb-12"
          />

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-primary-teal">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-6 rounded-lg bg-gray-900/50 border border-primary-teal/20 hover:border-primary-teal/50 transition-all card-hover group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <skill.icon className={`w-8 h-8 ${skill.color}`} />
                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-primary-yellow font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-primary rounded-full"
                        />
                      </div>
                      <p className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.level >= 90
                          ? 'Expert'
                          : skill.level >= 75
                          ? 'Advanced'
                          : 'Intermediate'}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

