import { motion } from 'framer-motion';


const ChitChats = {
    title: "ChitChats",
    description: "chat application where users can create accounts, send messages, share images, and manage their profiles."
};



const ProjectCard = ({image, title, description, githubLink}) => (
      <div className="relative group w-[1000px] h-[600px] rounded-2xl overflow-hidden shadow-lg">
    {/* Project Image */}
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 ">
      <h3 className="text-white-400 text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 text-sm mb-4">{description}</p>
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-black font-semibold px-4 py-2 rounded-lg
                   hover:bg-green-400 hover:scale-105 transition-transform"
      >
        View on GitHub
      </a>
    </div>
  </div>
);



const Projects = () => {
    return <section
    id="projects"
    className="relative min-h-screen flex flex-col lg:px-48 px-10 pt-32 gap-12"
    >
    <motion.h2 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      viewport={{ once: true }} 
      className="text-4xl md:text-6xl font-bold mb-6 text-white-500"
    >
      Projects
    </motion.h2>

    {/*Project info card*/}
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9, duration: 0.7 }}
    viewport={{ once: true }} 
    
    >
    <ProjectCard
    title={ChitChats.title}
    description={ChitChats.description}
    image="/ChitChats.png"
    githubLink="https://github.com/248uddin/ChitChats-FullStack-App-"
    />
    </motion.div>
    </section>



}

export default Projects;