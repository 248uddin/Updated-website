import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react"
import { HashLink } from "react-router-hash-link";

const Header = () => {
    //toggle the menu
    const[isOpen, setIsOpen] = useState(false); 
    const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-10 py-4 bg-transparent">
      

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-20">   
       
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/*logo*/}
        <motion.div 
        initial={{opacity: 0, x: -100}}
        animate={{ opacity: 1, x: 0}}
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
        }}
        
        className="flex items-center">

        <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-black-500 to-black-100 flex items-center justify-center 
               text-green-600 font-bold text-xl mr-3 
               shadow-lg shadow-green-500/60 animate-pulse">
                Q
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
        
        </span>
        </motion.div>

        {/* desktop nav */}
        <nav className="lg:flex hidden space-x-8 ">
      {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
     <motion.div
      key={item}
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.7 + index * 0.2,
         }}
    >
      <HashLink
        smooth
        to={`#${item.toLowerCase()}`} // ex: #home, #about
        className="relative text-black-800 dark:text-gray-200
        hover:text-green-600 dark:hover:text-green-400 hover:shadow-lg hover:text-shadow-green-500/60 font-medium
        transition-colors duration-300 group"
      >
        {item}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black-600 group-hover:w-full transition-all duration-300"></span>
            </HashLink>
        </motion.div>
        ))}
        </nav>

        {/* social icons - deskptop */}
        <div className="md:flex hidden items-center space-x-4">

            <motion.a 
            initial={{ opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1}}
            transition={{delay: 1.3, duration: 0.8}}
            className="text-white-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300" href="https://github.com/248uddin">
            <FiGithub className="w-5 h-5"/>

            
            </motion.a>

            <motion.a 
            initial={{ opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1}}
            transition={{delay: 1.3, duration: 0.8}}
            className="text-white-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300" href="https://www.linkedin.com/in/qasimnaeemuddin/">
            <FiLinkedin className="w-5 h-5"/>

            
            </motion.a>

        </div>
        

        {/* mobile nav*/}
        <div className="md:hidden flex items-center">
            <button 
            className="text-green-300">
                { isOpen ? <FiX className="h-6 w-6"/> : <FiMenu className="h-6 w-6"/> }
            </button>
        </div>

       </div>

      </nav>


    </header>
  );
};

export default Header;
