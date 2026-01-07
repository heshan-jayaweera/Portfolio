import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Target, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="about"
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
            <span className="text-white">About </span>
            <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-primary mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with a strong interest in
                creating innovative web solutions. With expertise in modern
                JavaScript frameworks and a keen eye for design, I bring ideas
                to life through clean, efficient code.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a
                commitment to continuous learning. I'm particularly fascinated by
                AI/ML applications and their potential to solve real-world
                problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative z-10"
              >
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/id.jpeg"
                      alt="Heshan Jayaweera - Full Stack Developer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-primary-teal/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                icon: GraduationCap,
                title: 'Education',
                description: 'Bachelor’s in Information Technology Speacializing in Information Technology-Undergraduate',
              },
              {
                icon: Target,
                title: 'Career Goals',
                description: 'Build reliable and scalable web and mobile applications, continuously improve as a software engineer, contribute to collaborative projects, and grow into roles where I can deliver real-world solutions while learning from experienced professionals.',
              },
              {
                icon: Heart,
                title: 'Interests',
                description: 'Web Development, Mobile Application Development, AI & Data-Driven Systems, Full-Stack Technologies, and Emerging Tech Innovations.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg bg-gray-900/50 border border-primary-teal/20 hover:border-primary-teal/50 transition-all card-hover"
              >
                <item.icon className="w-10 h-10 text-primary-teal mb-4" />
                <h3 className="text-xl font-semibold text-primary-yellow mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

