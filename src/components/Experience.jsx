import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #2a2352 100%)",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
      }}
      contentArrowStyle={{ 
        borderRight: "10px solid #2a2352",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
      }}
      date={experience.date}
      dateClassName="text-white font-medium"
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: "0 0 0 4px rgba(255,255,255,0.2)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <motion.img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold mb-3'>
          {experience.company_name}
        </p>
      </div>

      <ul className='list-disc ml-5 space-y-2 mb-4'>
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {point}
          </motion.li>
        ))}
      </ul>

      {/* Hover-triggered image gallery */}
      <motion.div 
        className="relative"
        initial={{ height: 0 }}
        whileHover={{ height: "auto" }}
        transition={{ duration: 0.3 }}
      >
        {experience.images && experience.images.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {experience.images.map((img, i) => (
              <motion.div
                key={`experience-image-${i}`}
                className="overflow-hidden rounded-lg border border-gray-700/50 bg-gray-900/20"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={img}
                  alt={`experience-img-${i}`}
                  className="w-full h-40 object-contain bg-black/20 p-1"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My professional journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience <span className="text-[#915eff]">✨</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-center mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]"
      >
        Here's a timeline of my professional experience. Hover over each card to 
        see project visuals and detailed accomplishments.
      </motion.p>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="rgba(145, 94, 255, 0.3)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: '#915eff', color: '#fff' }}
            icon={<span className="text-white font-bold">+</span>}
          />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");