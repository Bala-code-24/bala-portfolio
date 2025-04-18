"use client"

import { useEffect, useState } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

import { styles } from "../styles"
import { projects } from "../constants"
import { fadeIn, textVariant, staggerContainer } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { github} from "../assets"


const ProjectDetails = () => {
  const { projectId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [activeImage, setActiveImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Debug logging
  useEffect(() => {
    console.log("ProjectDetails mounted")
    console.log("projectId from params:", projectId)
    console.log("location.state:", location.state)

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [projectId, location.state])

  // Get project data either from location state or find in projects array
  const projectData =
    location.state?.project || projects.find((p) => p.name.toLowerCase().replace(/\s+/g, "-") === projectId)

  // If project not found, show error and return button
  if (!projectData && !isLoading) {
    return (
      <div className="relative w-full h-screen mx-auto bg-gradient-to-b from-black to-[#0a0a1a]">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center`}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className={styles.sectionHeadText}>Project Not Found</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
          >
            Sorry, we couldn't find details for this project.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 bg-gradient-to-r from-purple-500 to-cyan-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/")}
          >
            Back to Home
          </motion.button>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="relative w-full h-screen mx-auto flex items-center justify-center bg-gradient-to-b from-black to-[#0a0a1a]">
        <div className="loader">
          <div className="w-16 h-16 border-4 border-t-purple-500 border-r-transparent border-b-cyan-500 border-l-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  const {
    name,
    description,
    tags,
    image,
    source_code_link,
    live_demo_link = "",
    competitions = [],
    team_members = [],
    gallery = [],
    features = [],
    timeline = [],
  } = projectData

  const openLightbox = (img) => {
    setActiveImage(img)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setActiveImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      {/* Hero Section with Full-width Image */}
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.div
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            {name}
          </motion.h1>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-2 justify-center"
          >
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[14px] ${tag.color} bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full font-medium`}
              >
                #{tag.name}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050816] to-transparent z-10" />
      </div>

      <div className="relative w-full bg-gradient-to-b from-[#050816] to-[#0a0a1a]">
        <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
          {/* Overview Section */}
          <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="py-16"
          >
            <motion.div variants={textVariant(0.1)}>
              <h2 className="text-3xl font-bold text-white">Overview</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 mb-8" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <motion.div variants={fadeIn("right", "spring", 0.2, 1)} className="lg:col-span-2">
                <p className="text-secondary text-[17px] leading-[30px] whitespace-pre-line">{description}</p>

                {features.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-white font-bold text-[20px] mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {features.map((feature, index) => (
                        <motion.li
                          key={index}
                          variants={fadeIn("up", "spring", 0.3 + index * 0.1, 0.75)}
                          className="flex items-start gap-2"
                        >
                          <span className="text-purple-500 text-xl">•</span>
                          <span className="text-secondary">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>

              <motion.div
                variants={fadeIn("left", "spring", 0.3, 1)}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 shadow-xl shadow-purple-500/5"
              >
                <h3 className="text-white font-bold text-[20px] mb-4">Project Details</h3>

                <div className="space-y-4">
                  {timeline.length > 0 && (
                    <div>
                      <p className="text-white font-medium">Timeline</p>
                      <p className="text-secondary">{timeline.join(" - ")}</p>
                    </div>
                  )}

                  {competitions.length > 0 && (
                    <div>
                      <p className="text-white font-medium">Achievements</p>
                      <ul className="mt-1 space-y-1">
                        {competitions.map((competition, index) => (
                          <li key={index} className="text-secondary text-[15px]">
                            {competition.award && <span className="text-cyan-400">{competition.award}</span>}
                            {competition.award && " in "}
                            {competition.name}
                            {competition.year && ` (${competition.year})`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-4 flex flex-wrap gap-4">
                    {source_code_link && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#1d1836] px-4 py-2 rounded-xl text-white hover:bg-[#292356] transition-colors"
                      >
                        <img src={github || "/placeholder.svg"} alt="GitHub" className="w-5 h-5" />
                        <span>Source Code</span>
                      </motion.a>
                    )}

                    {live_demo_link && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={live_demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2 rounded-xl text-white hover:from-purple-700 hover:to-cyan-700 transition-colors"
                      >
                        <img src={external || "/placeholder.svg"} alt="Live Demo" className="w-5 h-5" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Team Members Section */}
          {team_members.length > 0 && (
            <motion.section
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="py-16"
            >
              <motion.div variants={textVariant(0.1)}>
                <h2 className="text-3xl font-bold text-white">Team</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 mb-8" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {team_members.map((member, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", "spring", 0.2 + index * 0.1, 0.75)}
                    className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/10 group hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      {member.avatar ? (
                        <img
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-900 to-cyan-900 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white/70">{member.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold text-xl">{member.name}</h3>
                      {member.role && <p className="text-cyan-400 text-sm mt-1">{member.role}</p>}
                      {member.bio && <p className="text-secondary text-sm mt-3">{member.bio}</p>}
                      {member.links && (
                        <div className="mt-4 flex gap-3">
                          {member.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/70 hover:text-white transition-colors"
                            >
                              <img src={link.icon || "/placeholder.svg"} alt={link.name} className="w-5 h-5" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Gallery Section */}
          {gallery.length > 0 && (
            <motion.section
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="py-16"
            >
              <motion.div variants={textVariant(0.1)}>
                <h2 className="text-3xl font-bold text-white">Gallery</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 mb-8" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", "spring", 0.2 + index * 0.1, 0.75)}
                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => openLightbox(item)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.src || "/placeholder.svg"}
                        alt={item.caption || `Project image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      {item.caption && <p className="text-white font-medium">{item.caption}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Call to Action */}
          <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="py-16"
          >
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 1)}
              className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-purple-500/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interested in this project?</h2>
              <p className="text-secondary text-[17px] max-w-2xl mx-auto mb-8">
                Feel free to reach out if you'd like to learn more about this project or discuss potential
                collaborations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 py-3 px-8 rounded-xl text-white font-bold shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  onClick={() => navigate("/contact")}
                >
                  Contact Me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border border-white/20 py-3 px-8 rounded-xl text-white font-bold hover:bg-white/10 transition-all duration-300"
                  onClick={() => navigate("/")}
                >
                  Back to Projects
                </motion.button>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.src || "/placeholder.svg"}
                alt={activeImage.caption || "Project image"}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              {activeImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                  <p className="text-center">{activeImage.caption}</p>
                </div>
              )}
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
                onClick={closeLightbox}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SectionWrapper(ProjectDetails, "")
