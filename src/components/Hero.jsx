import { motion } from "framer-motion";
import { styles } from "../styles";
import balajiImg from "../assets/n1.png";
// Import social media icons (assuming you're using a library like react-icons)
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";

const Hero = () => {
  const socialMedia = [
    { name: "LinkedIn", icon: <FaLinkedin size={20} />, color: "#0077B5", url: "https://www.linkedin.com/in/balaji-santhanam-97452b2aa/" },
    { name: "GitHub", icon: <FaGithub size={20} />, color: "#333", url: "https://github.com/Bala-code-24" },
    { name: "Twitter", icon: <FaTwitter size={20} />, color: "#1DA1F2", url: "https://x.com/im_Speedater?t=Qn27qX4pAlmjex-P7Vljdg&s=09" },
    { name: "Instagram", icon: <FaInstagram size={20} />, color: "#E4405F", url: "https://www.instagram.com/balaji_santhanam_?igsh=cXp5czA0bHEyNW9q" },

  ];

  const techStack = [
    { name: "HTML", color: "#E44D26" },
    { name: "CSS", color: "#264DE4" },
    { name: "JS", color: "#F0DB4F" },
    { name: "React", color: "#61DAFB" },
    { name: "IOT", color: "#000000" },
  ];

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full opacity-30"
            style={{
              background: "linear-gradient(180deg, #915EFF 0%, #4731B6 100%)",
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-5 h-5 rounded-full bg-[#915EFF]"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "40vh" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-1 sm:h-80 h-40 violet-gradient"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className={`${styles.heroHeadText} text-white flex items-center gap-4`}>
              Hi, I'm{" "}
              <motion.span
                className="text-[#915EFF]"
                animate={{ 
                  color: ["#915EFF", "#4731B6", "#915EFF"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Balaji
              </motion.span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
  I craft modern user interfaces, <br className="sm:block hidden" />
  responsive web apps & smart IoT solutions
</p>
            
            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex mt-6 gap-4"
            >
              {socialMedia.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm text-white overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background pulse effect on hover/tap */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-75"
                    style={{ backgroundColor: social.color }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                    whileTap={{ scale: 1.8, opacity: 0.5 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 10 }}
                    whileTap={{ rotate: -10, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {social.icon}
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
            <a href="#project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 py-3 px-6 rounded-full bg-[#915EFF] text-white font-bold text-lg hover:bg-opacity-80 transition-all"
            >
              View my work
            </motion.button>
            </a>
            
          </motion.div>

          {/* Image with gradient border and animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex-shrink-0"
          >
            {/* Rotating gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full p-3"
              style={{
                background: "linear-gradient(90deg, #915EFF, #4731B6, #8844FF, #915EFF)",
                backgroundSize: "300% 300%",
                padding: "4px",
                transform: "scale(1.1)",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-md"
              style={{
                background: "rgba(145, 94, 255, 0.3)",
                transform: "scale(1.15)",
              }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* The actual image */}
            <motion.div
              className="relative w-36 h-36 sm:w-52 sm:h-52 rounded-full overflow-hidden"
              animate={{ rotateY: [0, 10, 0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={balajiImg}
                alt="Balaji"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Improved and better aligned floating tech icons */}
      <div className="absolute bottom-24 w-full flex justify-center">
        <motion.div
          className="flex justify-center flex-wrap gap-5 px-4 max-w-md mx-auto"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.2, rotate: 5, backgroundColor: tech.color, color: "#fff" }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.2
                }
              }}
              style={{
                boxShadow: `0 5px 20px rgba(0,0,0,0.1), 0 0 0 1px rgba(145,94,255,0.1)`,
              }}
            >
              <span className="font-bold text-sm" style={{ color: tech.color }}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;