import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Text top-left but padded correctly for MacBook */}
      <div className="absolute top-32 md:top-40 lg:top-48 left-6 md:left-12 z-10">
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
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 drop-shadow-lg"
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
          className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md"
        >
          Aspiring Software Developer!
        </motion.p>
      </div>

      {/* Centered Spline */}
      <div className="w-full h-full flex items-center justify-center">
        <Spline
        className="relative top-32 md:top-40 lg:top-48 left-6 md:left-12 z-10"
          scene="https://prod.spline.design/JdNKEiEnTh3MTXtY/scene.splinecode"
        />
      </div>
    </section>
  );
};

export default Hero;
