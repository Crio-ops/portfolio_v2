import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import IntroSection from "./components/sections/IntroSection";
import AboutSection from "./components/sections/AboutSection";
import PassionSection from "./components/sections/PassionSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import WorkSection from "./components/sections/WorkSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  useEffect(() => {
    document.title = "Hermant Kevin - Portfolio";
  }, []);
  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <IntroSection />
        <AboutSection />
        <PassionSection />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
