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
    // Loader timing (you can reduce to 1500 for better UX)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // 🔄 Loader Screen
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0b1220] text-white">
        {/* <h1 className="text-3xl font-bold mb-4">Madhav AI Technologies</h1> */}
        <img src={logo} className="w-50 h-50"/>
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
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
