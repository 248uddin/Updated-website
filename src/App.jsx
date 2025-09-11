import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />

      {/* Container that holds background + Hero content */}
      <div className="relative h-screen w-full">
        {/* Background image */}
        <img
          src="/og.png"
          alt="/og.png"
          className="fixed inset-0 w-full h-full object-cover -z-10"
        />

      {/* Hero section */}                      
        <Hero />
      </div>

      {/* About Section */}
      <About />

      {/* projects section */}
      <Projects />

      {/*Experince */}
      <Experience />

      {/*Experince */}
      <Contact />
    </>

    
  );
}
