import { motion } from "framer-motion";

const About = () => {
  const frontend = {
    title: "Languages",
    subHeading: "Technologies I use to build user interfaces",
    content: [
      { icon: "public/pythonLogo.png", title: "Python"},
      { icon: "public/jsLogo.png", title: "JavaScript"},
      { icon: "public/reactLogo.png", title: "React"},
      { icon: "public/javaLogo.png", title: "Java"}
      
    ]
  };

  const backend = {
    title: "Frameworks & Tools",
    subHeading: "Technologies I use to build servers & databases",
    content: [
      { icon: "public/firebaseLogo.png", title: "Firebase" },
      { icon: "public/nodeLogo.png", title: "Node.js" },
      { icon: "public/mongodbLogo.png", title: "MongoDB" },
      { icon: "public/jira.png", title: "Jira"}
    ]
  };


{/*info card layout and details*/}
  const InfoCard = ({ title, subHeading, content }) => (
    <div className="flex flex-col items-center
             bg-black/60 border border-green-500 rounded-xl p-6
             shadow-[0_0_25px_5px_rgba(0,255,0,0.5)]
             hover:shadow-[0_0_35px_10px_rgba(0,255,0,0.7)]
             transition max-w-sm w-full glow">
      <h3 className="text-green-400 text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{subHeading}</p>
      <div className="grid grid-cols-2 gap-4">
        {content.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-1" />
            <p className="text-white text-xs">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );


  return (
    <section
  id="about"
  className="relative min-h-screen flex flex-col lg:flex-row justify-start items-start lg:px-48 px-10 pt-32 gap-12"
>
  {/* LEFT SIDE: Heading + Intro */}
  <div className="flex-1 flex flex-col justify-start">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      viewport={{ once: true }} 
      className="text-4xl md:text-6xl font-bold mb-6 text-green-500"
    >
      About Me
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
      viewport={{ once: true }}
      className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed"
    >
      Hey there! I’m Qasim Naeemuddin,

I’m a third-year Computer Science student at Wilfrid Laurier University. I recently completed a 4-month internship at Schaeffler Aerospace in Production Support, 
where I worked with precision measurement tools, Excel, and Python to improve quality and streamline processes. 
Previously, I worked at Majorel as a Technical Support Specialist, resolving customer inquiries, optimizing workflows in Salesforce and Jira, and improving overall efficiency.

I’m passionate about programming, problem-solving, and building meaningful projects. I’m always eager to learn new skills and tackle new challenges as I grow in my career.
    </motion.p>
  </div>



  {/* RIGHT SIDE: InfoCards */}
  <motion.div className="flex flex-col gap-20 flex-1 items-center lg:items-end justify-start">
    <InfoCard {...frontend} />
    <InfoCard {...backend} />
  </motion.div>
</section>

  );
};

export default About;
