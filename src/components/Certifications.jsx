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
      title: 'Introduction to Data Science',
      organization: 'Cisco',
      date: '2025',
      credentialUrl: 'https://www.credly.com/badges/5db3f06d-ea5a-4753-ab7c-6452678db996/linked_in_profile',
      logo: 'datascience.png',
    },
    {
      id: 2,
      title: 'Introduction to Modern AI',
      organization: 'Cisco',
      date: '2025',
      credentialUrl: 'https://www.credly.com/badges/13035157-cbfc-4716-b183-7cc449b2d0d4/linked_in_profile',
      logo: 'AI.png',
    },

    {
      id: 3,
      title: 'Artificial Intelligence Fundamentals',
      organization: 'IBM',
      date: '2026',
      credentialUrl: 'https://www.credly.com/badges/4d8f0068-da9f-4bce-b943-ac5557a67e8e/linked_in_profile',
      logo: 'AI Fundamentals.png',
    },


    {
      id: 4,
      title: 'Power BI for Beginners',
      organization: 'Simplilearn',
      date: '2025',
      credentialId: '9624982',
      credentialUrl: 'https://simpli-web.app.link/e/0NnoQ1VWFZb',
      logo: 'simplilearn.png',
    },
    {
      id: 5,
      title: 'Python for Beginners',
      organization: 'University of Moratuwa',
      date: '2025',
      credentialId: 'HzuQx95Nwb',
      credentialUrl: 'https://open.uom.lk/lms/mod/customcert/verify_certificate.php',//code:HzuQx95Nwb
      logo: 'uom.png',
    },
    {
      id: 6,
      title: 'AI/ML Engineer - Stage 1',
      organization: 'Sri Lanka Institute of Information Technology',
      date: '2025',
      credentialId: 'zxafdg2ltb',
      credentialUrl: 'https://code.sliit.org/courses/take/ai-ml-stage1/completion',
      logo: 'sliit.png',
    },
    {
      id: 7,
      title: 'AI/ML Engineer - Stage 2',
      organization: 'Sri Lanka Institute of Information Technology',
      date: '2026',
      credentialId: 'sy1znpqpdu',
      credentialUrl: 'https://code.sliit.org/certificates/sy1znpqpdu',
      logo: 'sliit.png',
    },
    {
      id: 8,
      title: 'Getting Started with Docker',
      organization: 'Simplilearn',
      date: '2026',
      credentialId: '9726466',
      credentialUrl: 'https://simpli-web.app.link/e/TPUqTTH8ZZb',
      logo: 'simplilearn.png',
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
                    <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {cert.logo ? (
                        <img
                          src={cert.logo.startsWith('http') ? cert.logo : `/${cert.logo}`}
                          alt={`${cert.title} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <Award className="w-8 h-8 text-primary-teal" />
                      )}
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

