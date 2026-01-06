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
      liveUrl: 'https://learnlyticsfe.vercel.app/login',
      githubUrl: 'https://github.com/heshan-jayaweera/Learnlytics',
      category: 'Web App',
      credentials: [
        { role: 'Lecturer — marks entry only', email: 'lecturer@gmail.com' },
        { role: 'Student', email: 'shehan@gmail.com' },
        { role: 'Student', email: 'ashen@gmail.com' },
        { role: 'Student', email: 'dilukshan@gmail.com' },
        { role: 'Student', email: 'dineth@gmail.com' },
        { role: 'Student', email: 'dinil@gmail.com' },
      ],
      password: '123456',
    },
    {
      id: 2,
      title: 'Aqualink',
      description: 'Smart water management platform integrating sustainability and real-time emergency response.',
      longDescription: 'AquaLink is an integrated smart water management system that handles drinking water delivery, filter production, recycling, and emergency water supply. It connects customers, factories, branches, drivers, and fire brigades through role-based dashboards, real-time tracking, and intelligent emergency dispatch to ensure efficiency, sustainability, and rapid response during critical situations.',
      image: 'Aqualink.png',
      techStack: ['React.js', 'MongoDB', 'Javascript', 'Node.js','Leaflet'],
      liveUrl: 'https://aqualinkfe.vercel.app/',
      githubUrl: 'https://github.com/heshan-jayaweera/Aqualink',
      category: 'Web App',
      credentials: [
        { role: 'Customer', email: 'customer@gmail.com' },
        { role: 'Factory', email: 'factory@gmail.com' },
        { role: 'Branch Manager', email: 'bm@aqualink.com' },
        { role: 'Driver', email: 'driver@aqualink.com' },
        { role: 'Fire Brigade', email: 'fire@gmail.com' },
      ],
      password: 'password123',
    },
    {
      id: 3,
      title: 'WellnessHub ',
      description: 'Android wellness app for tracking habits, hydration, mood, and activity.',
      longDescription: 'WellnessHub is an Android-based wellness tracking application designed to monitor hydration, mood, daily habits, and physical activity. The app features goal setting, progress visualization, and daily reminders to encourage healthy routines. With an intuitive UI and shared preferences, it provides personalized insights to support long-term wellness management.',
      image: 'wellnesshub.png',
      techStack: ['Android Studio', 'Kotlin', 'Shared Preferences'],
      
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
      
      githubUrl: 'https://github.com/heshan-jayaweera/Hydrateplus-Mobile-App',
      category: 'Mobile Application',
    },
    {
      id: 5,
      title: 'Supportify',
      description: 'Web-based customer support system with role-based ticket management and analytics.',
      longDescription: 'This is a web-based customer support system developed using PHP and MySQL, designed to manage support tickets, users, and customer interactions through role-based access. As my first-ever software project, it represents a foundational learning experience in full-stack development, database design, authentication, and building real-world web applications.',
      image: 'supportify.png',
      techStack: ['php', 'phpMyadmin', 'xampp', 'CSS', 'HTML'],
      
      githubUrl: 'https://github.com/heshan-jayaweera/Customer-Support-System',
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
                    {project.credentials && project.password && (
                      <div className="mb-4 rounded-lg border border-primary-teal/30 bg-gray-800/40 p-3">
                        <p className="text-sm font-semibold text-primary-yellow mb-2">
                          Demo Credentials
                        </p>
                        <ul className="space-y-1 text-xs text-gray-300">
                          {project.credentials.map((c) => (
                            <li key={c.role} className="flex items-center justify-between gap-3">
                              <span className="text-gray-400 w-32 shrink-0">{c.role}</span>
                              <span className="font-medium break-all">{c.email}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-2 text-xs text-gray-400">
                          Password: <span className="text-gray-200 font-medium">{project.password}</span>
                        </p>
                      </div>
                    )}
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
                {selectedProject.credentials && selectedProject.password && (
                  <div className="mb-6 rounded-lg border border-primary-teal/40 bg-gray-800/50 p-4">
                    <h4 className="text-lg font-semibold text-primary-yellow mb-3">
                      Demo Credentials
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {selectedProject.credentials.map((c) => (
                        <div key={c.role} className="flex items-center gap-3">
                          <span className="text-sm text-gray-400 w-36 shrink-0">{c.role}</span>
                          <span className="text-sm font-medium text-gray-100 break-all">{c.email}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-gray-300">
                      Password: <span className="font-semibold text-white">{selectedProject.password}</span>
                    </p>
                  </div>
                )}
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

