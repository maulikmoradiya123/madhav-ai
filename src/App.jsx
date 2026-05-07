import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";
import logo from './assets/logo_new.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#111827] overflow-hidden">

        {/* Glow Background */}
        <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center">

          {/* Logo */}
          <div className="animate-pulse">
            <img
              src={logo}
              alt="Logo"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Company Name */}
          <h1 className="text-3xl font-bold text-white mt-4 tracking-wide">
            Madhav AI Technologies
          </h1>

          {/* Loading Bar */}
          <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden mt-6">
              <div className="h-full bg-blue-500 rounded-full animate-progressBar"></div>
          </div>

          {/* Small Text */}
          <p className="text-gray-400 text-sm mt-4 tracking-widest">
            INITIALIZING EXPERIENCE...
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="text-white bg-[#0b1220]">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#0b1220] to-[#0f172a]">

        {/* Glow Effect */}
        <div className="absolute w-96 h-96 bg-blue-500 blur-3xl opacity-20 rounded-full top-20 left-1/2 -translate-x-1/2"></div>

        <Hero />
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Services */}
      <div className="bg-[#0f172a]">
        <About />
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* About */}
      <div className="bg-[#111827]">
        <Services />
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Contact */}
      <div className="bg-[#0f179a]">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      {/* <WhatsAppButton /> */}

    </div>
  );
}

export default App;





// import './App.css'

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import About from "./components/About";
// import Contact from "./components/Contact";
// // import WhatsAppButton from "./components/WhatsAppButton";

// function App() {
//   return (
//     <div className="bg-[#0f172a] text-white min-h-screen">
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Contact />
//       {/* <WhatsAppButton /> */}
//     </div>
//   );
// }

// export default App;
