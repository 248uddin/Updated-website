import { motion } from 'framer-motion';

   const Schaeffler = {
  title: "Aerospace Production Support",
  subHeading: "May 2025 - Aug 2025 ",
  description: [
    "Measured 250+ aerospace components using Prismo CMM, ensuring sub-millimeter precision.",
    "Entered technical specs from blueprints into structured Excel sheets, improving traceability.",
    "Flagged measurement discrepancies that prevented non-conforming parts from reaching assembly.",
    "Collaborated with Auto Gauging teams to understand Python scripts for automating quality checks."
  ]
};

const Majorel = {
    title: "Technical Support Speacialist",
    subHeading: "Jan 2023 - Aug 2023",
    description: [ 
    "Resolved 50+ customer inquiries daily, improving satisfaction by 30%",
    "Streamlined account onboarding using Salesforce, reducing resolution time by 20%",
    "Managed service requests in Jira Service Desk, ensuring 100% were tracked",
    "Used Microsoft Office Suite to document calls and automate processes"
    ]
};

  const InfoCard = ({ logo, title, subHeading, period, description }) => (
  <div className="flex flex-col items-start 
           bg-black/70 border border-green-500 rounded-2xl p-8
           shadow-[0_0_35px_10px_rgba(0,255,0,0.6)]
           hover:shadow-[0_0_50px_15px_rgba(0,255,0,0.8)]                 
           transition-all duration-300
           w-full max-w-xl">
    {/* Logo */}
    <img src={logo} alt={title} className="w-100 h-20 object-contain mb-4" />

    {/* Job Info */}
    <h3 className="text-White-400 text-2xl font-bold">{title}</h3>
    <p className="text-gray-400 text-sm italic mb-2">{subHeading}</p>
    

    
     {/* Description */}
   {description && (
  <ul className="list-disc list-inside text-gray-200 text-base leading-relaxed">
    {description.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
)}
  </div>
);


const Experience  = () => {
return( 
    <section
  id="experience"
  className="relative min-h-screen flex flex-col lg:px-48 px-10 pt-32 gap-12"
>
  {/* Heading + Card in the same column */}
  <motion.h2 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      viewport={{ once: true }} 
      className="text-4xl md:text-6xl font-bold mb-6 text-white-500"
    >
      Experience
    </motion.h2>


     <motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.7 }}
  viewport={{ once: true }}
  className="flex flex-col lg:flex-row justify-content:center align-items: flex-start gap-80"
>
{/* Majorel Info card */}
<InfoCard
    title={Majorel.title}
    subHeading={Majorel.subHeading}
    description={Majorel.description}
    logo="/Majorel.png"
/>

  {/* Schaeffler Info Card */}
  <InfoCard 
    title={Schaeffler.title} 
    subHeading={Schaeffler.subHeading} 
    description={Schaeffler.description} 
    logo="/Schaeffler.png"
  />
</motion.div>
</section>
 )


}; 

export default Experience;