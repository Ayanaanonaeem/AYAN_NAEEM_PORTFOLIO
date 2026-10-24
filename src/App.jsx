import Navbar from "./Components/Navbar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <main className="min-h-screen bg-[#080b12]">
      <Navbar/>
      <Hero/>
     <About/>
      <Projects/>
      <Skills/> 
      <Contact/>
      <Footer/>
    </main>
  );
}
