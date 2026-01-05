import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const GitHubActivity = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [languageMix, setLanguageMix] = useState([])
  const [loadingMix, setLoadingMix] = useState(true)
  const [mixError, setMixError] = useState(null)

  // Exclude noisy/irrelevant languages from the chart
  const excludedLanguages = new Set(['Hack'])

  const languageColors = {
    JavaScript: 'from-yellow-400 to-amber-500',
    TypeScript: 'from-blue-400 to-cyan-400',
    Python: 'from-emerald-400 to-teal-400',
    Ruby: 'from-rose-400 to-pink-500',
    Go: 'from-sky-400 to-blue-500',
    Java: 'from-orange-500 to-amber-500',
    PHP: 'from-indigo-400 to-purple-500',
    HTML: 'from-orange-400 to-orange-500',
    CSS: 'from-blue-300 to-blue-500',
    'C++': 'from-slate-400 to-slate-500',
    C: 'from-gray-400 to-gray-500',
  }

  useEffect(() => {
    let cancelled = false

    const fetchLanguageMix = async () => {
      try {
        setLoadingMix(true)
        setMixError(null)

        const repoRes = await fetch(
          'https://api.github.com/users/heshan-jayaweera/repos?per_page=100&sort=updated'
        )
        if (!repoRes.ok) {
          throw new Error('Repo fetch failed')
        }
        const repos = await repoRes.json()
        const activeRepos = repos.filter((repo) => !repo.fork)
        const languageResponses = await Promise.all(
          activeRepos.map((repo) => fetch(repo.languages_url))
        )
        const languageData = await Promise.all(
          languageResponses.map((res) => (res.ok ? res.json() : {}))
        )

        const totals = {}
        const repoCounts = {}

        languageData.forEach((langObj) => {
          Object.entries(langObj).forEach(([name, bytes]) => {
            totals[name] = (totals[name] || 0) + bytes
            repoCounts[name] = (repoCounts[name] || 0) + 1
          })
        })

        const totalBytes = Object.values(totals).reduce((sum, v) => sum + v, 0)
        if (!totalBytes) {
          throw new Error('No language data')
        }

        const mix = Object.entries(totals)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 8)
          .filter(([name]) => !excludedLanguages.has(name))
          .map(([name, bytes]) => {
            const percent = Math.max(1, Math.round((bytes / totalBytes) * 100))
            return {
              id: name.toLowerCase().replace(/[^a-z0-9]/g, ''),
              name,
              percent,
              repos: repoCounts[name] || 1,
              color: languageColors[name] || 'from-primary-teal to-primary-yellow',
              trend: 'recent activity',
            }
          })

        if (!cancelled) {
          setLanguageMix(mix)
          setLoadingMix(false)
        }
      } catch (err) {
        if (!cancelled) {
          setMixError('Could not load language mix from GitHub')
          setLoadingMix(false)
        }
      }
    }

    fetchLanguageMix()

    return () => {
      cancelled = true
    }
  }, [])

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
              href="https://github.com/heshan-jayaweera"
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
            Tech Mix (by language)
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadingMix && (
              <div className="col-span-full text-center text-gray-400">Loading language mix...</div>
            )}
            {mixError && !loadingMix && (
              <div className="col-span-full text-center text-red-400 text-sm">{mixError}</div>
            )}
            {!loadingMix && !mixError && languageMix.length === 0 && (
              <div className="col-span-full text-center text-gray-400 text-sm">No language data found yet.</div>
            )}
            {!loadingMix && !mixError &&
              languageMix.map((lang) => (
                <motion.div
                  key={lang.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-900/50 rounded-lg p-6 border border-primary-teal/20 hover:border-primary-teal/50 transition-all card-hover"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white">{lang.name}</h4>
                      <p className="text-gray-400 text-sm">{lang.repos} repos · {lang.trend}</p>
                    </div>
                    <span className="text-primary-yellow text-lg font-semibold">{lang.percent}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-gray-800 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${lang.color}`}
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </motion.div>
              ))}
          </div>

          
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gray-900/50 rounded-lg p-8 border border-primary-teal/20"
          >
            <h3 className="text-2xl font-semibold text-primary-teal mb-4 text-center">
              Contribution Graph
            </h3>
            <div className="flex justify-center">
              <img
                src="https://ghchart.rshah.org/heshan-jayaweera"
                alt="GitHub Contribution Graph"
                className="w-full max-w-4xl"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubActivity

