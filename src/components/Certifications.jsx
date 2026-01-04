import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink, Calendar } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-SA-12345',
      credentialUrl: 'https://aws.amazon.com/verification',
      logo: 'https://via.placeholder.com/100/14b8a6/ffffff?text=AWS',
    },
    {
      id: 2,
      title: 'Meta Front-End Developer',
      organization: 'Meta (Facebook)',
      date: '2023',
      credentialId: 'META-FE-67890',
      credentialUrl: 'https://coursera.org/verify',
      logo: 'https://via.placeholder.com/100/eab308/000000?text=Meta',
    },
    {
      id: 3,
      title: 'Google Cloud Professional',
      organization: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-PRO-11111',
      credentialUrl: 'https://cloud.google.com/certification',
      logo: 'https://via.placeholder.com/100/14b8a6/ffffff?text=GCP',
    },
    {
      id: 4,
      title: 'React Developer Certification',
      organization: 'freeCodeCamp',
      date: '2023',
      credentialId: 'FCC-REACT-22222',
      credentialUrl: 'https://freecodecamp.org/certification',
      logo: 'https://via.placeholder.com/100/eab308/000000?text=FCC',
    },
    {
      id: 5,
      title: 'Machine Learning Specialization',
      organization: 'Stanford University',
      date: '2022',
      credentialId: 'STAN-ML-33333',
      credentialUrl: 'https://coursera.org/verify',
      logo: 'https://via.placeholder.com/100/14b8a6/ffffff?text=Stanford',
    },
    {
      id: 6,
      title: 'Full Stack Web Development',
      organization: 'The Odin Project',
      date: '2022',
      credentialId: 'TOP-FS-44444',
      credentialUrl: 'https://theodinproject.com',
      logo: 'https://via.placeholder.com/100/eab308/000000?text=TOP',
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
      id="certifications"
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
            <span className="text-white">Certifications & </span>
            <span className="text-gradient">Credentials</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-primary mx-auto mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900/50 rounded-lg p-6 border border-primary-teal/20 hover:border-primary-teal/50 transition-all card-hover relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-teal/10 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-primary-teal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-primary-yellow font-medium">
                        {cert.organization}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Issued: {cert.date}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">Credential ID: </span>
                      <span className="text-primary-teal">{cert.credentialId}</span>
                    </div>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-teal hover:text-primary-yellow transition-colors text-sm font-medium"
                  >
                    Verify Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

