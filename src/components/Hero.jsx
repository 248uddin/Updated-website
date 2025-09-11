import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline"
const Hero = () => {
  return (
   <section id="home" className="relative h-full flex flex-col justify-center items-start lg:px-48 px-10 pt-32">
    

  <motion.h1
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 40,  
      damping: 25,
      delay: 1.3,
      duration: 1.5,
    }}
    className="relative z-10 text-White-500 text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-left drop-shadow-lg"
  >
    Hi, I'm Qasim Naeemuddin!
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 40,  
      damping: 25,
      delay: 1.8,
      duration: 1.5,
    }}
    className="relative z-10 text-gray-200 text-lg md:text-2xl text-left drop-shadow-md"
  >

  Aspiring Software Developer!  
  </motion.p>

    {/*Spline */}
    
    
    <Spline scene="https://prod.spline.design/JdNKEiEnTh3MTXtY/scene.splinecode" />

    </section>
  );
};

export default Hero;
