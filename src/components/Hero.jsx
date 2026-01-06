import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import TypingEffect from './TypingEffect'

const Hero = () => {
  const heroRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/10 via-black to-primary-yellow/10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient">HESHAN JAYAWEERA</span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-primary-teal mb-4">
              <TypingEffect
                strings={[
                  'Full-Stack Developer',
                  'AI/ML Enthusiast',
                  'Web Developer',
                  'Problem Solver',
                  'Lifelong Learner',
                  'Mobile App Developer',
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Passionate about building innovative web solutions and exploring the
            intersection of technology and creativity.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-primary text-black font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-primary-teal/50 transition-all"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/Heshan_Jayaweera_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary-teal text-primary-teal font-semibold rounded-lg flex items-center gap-2 hover:bg-primary-teal/10 transition-all"
            >
              Download Resume
              <Download className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/heshan-jayaweera', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/heshan-jayaweera', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:heshandeeptha13@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-primary-teal/20 hover:bg-primary-teal/30 text-primary-teal transition-colors"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-teal rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary-teal rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

