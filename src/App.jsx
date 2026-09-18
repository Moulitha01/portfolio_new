import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="bg-ink text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
}