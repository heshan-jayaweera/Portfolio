import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Learnlytics',
      description: 'Learnlytics is a MERN-based academic management system with real-time analytics.',
      longDescription: 'Learnlytics is a MERN stack-based academic management and analytics platform. It provides role-based access for administrators, lecturers, and students to manage and view academic records securely. Power BI dashboards connected to live MongoDB data via ODBC enable real-time performance tracking, trend analysis, and actionable insights.',
      image: 'learnlytics.png',
      techStack: ['React.js', 'Javascript', 'Power BI', 'Node.js', 'Express.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/heshan-jayaweera/Learnlytics',
      category: 'Web App',
    },
    {
      id: 2,
      title: 'Aqualink',
      description: 'Smart water management platform integrating sustainability and real-time emergency response.',
      longDescription: 'AquaLink is an integrated smart water management system that handles drinking water delivery, filter production, recycling, and emergency water supply. It connects customers, factories, branches, drivers, and fire brigades through role-based dashboards, real-time tracking, and intelligent emergency dispatch to ensure efficiency, sustainability, and rapid response during critical situations.',
      image: 'Aqualink.png',
      techStack: ['React.js', 'MongoDB', 'Javascript', 'Node.js','Leaflet'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/heshan-jayaweera/Aqualink',
      category: 'Web App',
    },
    {
      id: 3,
      title: 'WellnessHub ',
      description: 'Android wellness app for tracking habits, hydration, mood, and activity.',
      longDescription: 'WellnessHub is an Android-based wellness tracking application designed to monitor hydration, mood, daily habits, and physical activity. The app features goal setting, progress visualization, and daily reminders to encourage healthy routines. With an intuitive UI and shared preferences, it provides personalized insights to support long-term wellness management.',
      image: 'wellnesshub.png',
      techStack: ['Android Studio', 'Kotlin', 'Shared Preferences'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/heshan-jayaweera/WellnessHub-mobile-application',
      category: 'Mobile Application',
    },
    {
      id: 4,
      title: 'Hydrate +',
      description: 'Hydrate+ is a Kotlin-based mobile app that tracks daily water intake and sends reminders.',
      longDescription: 'Hydrate+ is a lightweight Android mobile application developed using Kotlin to help users maintain healthy hydration habits. The app allows users to easily track their daily water intake and set personalized reminders to drink water throughout the day. With a simple, intuitive interface, Hydrate+ promotes consistency and awareness, supporting better health through effective hydration monitoring.',
      image: 'hydrate+.png',
      techStack: ['Kotlin', 'Android Studio'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/heshan-jayaweera/Hydrateplus-Mobile-App',
      category: 'Mobile Application',
    },
    {
      id: 5,
      title: 'Machine Learning Model',
      description: 'Image classification model using deep learning for medical diagnosis assistance.',
      longDescription: 'Built with TensorFlow and Keras, this model assists in medical image classification with high accuracy. Includes a web interface for easy interaction and detailed analytics.',
      image: 'https://placehold.co/600x400/14b8a6/ffffff?text=ML+Model',
      techStack: ['Python', 'TensorFlow', 'Flask', 'React'],
      
      githubUrl: 'https://github.com/example',
      category: 'AI/ML',
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with real-time data visualization.',
      longDescription: 'Comprehensive analytics platform that aggregates data from multiple social media platforms, provides insights, scheduling capabilities, and automated reporting.',
      image: 'https://placehold.co/600x400/eab308/000000?text=Social+Dashboard',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      githubUrl: 'https://github.com/example',
      category: 'Full-Stack',
    },
  ]

  const categories = ['All', ...new Set(projects.map((p) => p.category))]

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter)

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
      id="projects"
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
            <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-primary mx-auto mb-12"
          />

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-gradient-primary text-black'
                    : 'bg-gray-900 text-white border border-primary-teal/20 hover:border-primary-teal/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-900/50 rounded-lg overflow-hidden border border-primary-teal/20 hover:border-primary-teal/50 transition-all card-hover cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-primary-teal/20 text-primary-teal rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-primary-teal hover:text-primary-yellow transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-primary-teal hover:text-primary-yellow transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary-teal/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary-yellow mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-teal/20 text-primary-teal rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-primary text-black font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-primary-teal text-primary-teal font-semibold rounded-lg flex items-center gap-2 hover:bg-primary-teal/10 transition-all"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects

