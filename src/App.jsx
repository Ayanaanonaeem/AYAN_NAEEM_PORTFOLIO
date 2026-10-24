import Navbar from "./Components/Navbar";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";


export default function App() {
  return (
    <main className="min-h-screen bg-[#080b12]">
      <Navbar/>
      <Hero/>
     <About/>
      <Projects/>
      <section id="skills" className="min-h-screen bg-[#080b12]" />
      <section id="contact" className="min-h-screen bg-[#080b12]" />
    </main>
  );
}
