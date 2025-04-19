import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const isEven = index % 2 === 0;

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  const openImageModal = (img) => {
    setSelectedImage(img);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: `linear-gradient(135deg, ${isEven ? "#1d1836 0%, #2a2352" : "#292360 0%, #1e1940"} 100%)`,
        color: "#fff",
        borderRadius: "12px",
        boxShadow: `0 10px 20px rgba(0,0,0,0.3), 0 0 ${isEven ? "15px" : "10px"} rgba(145, 94, 255, 0.${isEven ? "2" : "15"})`,
        transition: "all 0.4s ease",
      }}
      contentArrowStyle={{ 
        borderRight: isEven ? "10px solid #2a2352" : "none",
        borderLeft: !isEven ? "10px solid #1e1940" : "none",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
      }}
      date={experience.date}
      dateClassName={`text-white font-medium ${isEven ? "text-right" : "text-left"}`}
      position={isEven ? "left" : "right"}
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: `0 0 0 4px rgba(145, 94, 255, 0.3), 0 0 15px rgba(145, 94, 255, ${isEven ? "0.4" : "0.3"})`,
      }}
      icon={
        <motion.div 
          className='flex justify-center items-center w-full h-full'
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className='text-white text-[24px] font-bold group relative'>
          {experience.title}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-500"></span>
        </h3>
        <p className='text-secondary text-[16px] font-semibold mb-3'>
          {experience.company_name}
        </p>
      </motion.div>

      <ul className='list-disc ml-5 space-y-2 mb-4'>
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {point}
          </motion.li>
        ))}
      </ul>

      {/* Gallery button that works on both mobile and desktop */}
      {experience.images && experience.images.length > 0 && (
        <motion.button
          className={`w-full py-2 px-4 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 rounded-lg text-white font-medium mb-4 flex items-center justify-center gap-2 overflow-hidden relative`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={toggleGallery}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          {showGallery ? "Hide Gallery" : "View Gallery"}
        </motion.button>
      )}

      {/* Expandable image gallery */}
      <AnimatePresence>
        {showGallery && experience.images && experience.images.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {experience.images.map((img, i) => (
              <motion.div
                key={`experience-image-${i}`}
                className="overflow-hidden rounded-lg border border-purple-500/40 bg-gray-900/40 relative group"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(145, 94, 255, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openImageModal(img)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <img
                  src={img}
                  alt={`experience-img-${i}`}
                  className="w-full h-40 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3"
                >
                  <span className="text-white text-sm font-medium">Click to expand</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen image modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full h-full object-contain"
              />
              <motion.button
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  closeImageModal();
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInView(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My professional journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center flex items-center justify-center flex-wrap`}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            Achievements
            <motion.span 
              className="absolute bottom-1 left-0 h-1 bg-purple-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.span>
          <motion.span 
            className="text-[#915eff] ml-2"
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              delay: 0.7,
              duration: 0.8
            }}
          >
            ✨
          </motion.span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-center mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]"
      >
        Here's a timeline of my professional experience. Click on "View Gallery" to 
        see project visuals and tap on images to enlarge.
      </motion.p>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="rgba(145, 94, 255, 0.6)">
          {experiences.map((experience, index) => (
            <motion.div
              key={`experience-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <ExperienceCard experience={experience} index={index} />
            </motion.div>
          ))}
          <VerticalTimelineElement
            iconStyle={{ 
              background: 'linear-gradient(135deg, #915eff 0%, #7e45e0 100%)', 
              color: '#fff',
              boxShadow: '0 0 0 4px rgba(145, 94, 255, 0.3), 0 0 15px rgba(145, 94, 255, 0.3)',
            }}
            icon={
              <motion.div 
                className="flex items-center justify-center w-full h-full text-white font-bold text-2xl"
                whileHover={{ scale: 1.2, rotate: 90 }}
                transition={{ duration: 0.4 }}
                animate={isInView ? { 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360, 0],
                  transition: { 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 15
                  }
                } : {}}
              >
                +
              </motion.div>
            }
          />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");