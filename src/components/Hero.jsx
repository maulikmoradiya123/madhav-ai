
import heroImage from "../assets/hero_img.jpg"; // add your image here


function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Blue Glow */}
      <div className="absolute w-96 h-96 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
          Build <span className="text-blue-500">Smart</span> Digital Solutions
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          We create powerful web, software, and AI solutions to help your business grow faster.
        </p>

        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-blue-500/30"
        >
          Get Started
        </a>

      </div>
    </section>
  );
}

export default Hero;











// // import heroImage from "../assets/hero_img.jpg"; // add your image here
// import heroImage from "../assets/home_icon.png"; // add your image here

// function Hero() {
//   return (
//     <section className="py-28 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//         {/* Left - Text */}
//         <div className="text-center md:text-left">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//             Build <span className="text-blue-500">Smart</span> Digital Solutions
//           </h1>

//           <p className="text-gray-300 max-w-xl mb-8">
//             We create powerful web, software, and AI solutions to help your business grow faster.
//           </p>

//           {/* Optional CTA */}
//           <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition">
//             Get Started
//           </a>
//         </div>

//         {/* Right - Image */}
//         <div className="flex justify-center">
//           <img
//             src={heroImage}
//             alt="AI Illustration"
//             className="w-full max-w-xlg rounded-xl shadow-lg transition transform border-0"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Hero;
