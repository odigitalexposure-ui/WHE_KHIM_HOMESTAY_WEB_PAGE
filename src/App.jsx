import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import VideoGallery from "./components/VideoGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PopupBanner from "./components/PopupBanner";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return (
    <div className="w-full min-h-screen font-sans selection:bg-accent-orange selection:text-white">
      <Navbar />
      <PopupBanner />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Gallery />
        <Pricing />
        <VideoGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
