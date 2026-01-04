import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'

const GitHubActivity = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Example pinned repositories - replace with your actual GitHub data
  const pinnedRepos = [
    {
      id: 1,
      name: 'awesome-project',
      description: 'A full-stack application with modern tech stack',
      language: 'JavaScript',
      stars: 42,
      forks: 8,
      url: 'https://github.com/username/awesome-project',
    },
    {
      id: 2,
      name: 'ml-model-toolkit',
      description: 'Machine learning utilities and model implementations',
      language: 'Python',
      stars: 28,
      forks: 5,
      url: 'https://github.com/username/ml-model-toolkit',
    },
    {
      id: 3,
      name: 'portfolio-website',
      description: 'Modern portfolio website built with React and Tailwind',
      language: 'JavaScript',
      stars: 15,
      forks: 3,
      url: 'https://github.com/username/portfolio-website',
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
      id="github"
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
            <span className="text-white">GitHub </span>
            <span className="text-gradient">Activity</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-primary mx-auto mb-12"
          />

          <div className="text-center mb-12">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900/50 border border-primary-teal/20 hover:border-primary-teal/50 rounded-lg transition-all card-hover"
            >
              <Github className="w-6 h-6 text-primary-teal" />
              <span className="text-xl font-semibold text-white">
                View My GitHub Profile
              </span>
              <ExternalLink className="w-5 h-5 text-primary-yellow" />
            </motion.a>
          </div>

          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-primary-teal mb-6 text-center"
          >
            Pinned Repositories
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900/50 rounded-lg p-6 border border-primary-teal/20 hover:border-primary-teal/50 transition-all card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-white">{repo.name}</h4>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-teal hover:text-primary-yellow transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-primary-teal/20 text-primary-teal rounded-full text-sm">
                    {repo.language}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <GitFork className="w-4 h-4" />
                      <span className="text-sm">{repo.forks}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Contribution Graph Placeholder */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gray-900/50 rounded-lg p-8 border border-primary-teal/20"
          >
            <h3 className="text-2xl font-semibold text-primary-teal mb-4 text-center">
              Contribution Graph
            </h3>
            <div className="flex justify-center">
              <img
                src="https://ghchart.rshah.org/yourusername"
                alt="GitHub Contribution Graph"
                className="w-full max-w-4xl"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              Replace 'yourusername' with your actual GitHub username in the component code
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubActivity

