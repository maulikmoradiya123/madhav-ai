
import heroImage from "../assets/hero_img.jpg"; // add your image here

function Hero() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build <span className="text-blue-500">Smart</span> Digital Solutions
          </h1>

          <p className="text-gray-300 max-w-xl mb-8">
            We create powerful web, software, and AI solutions to help your business grow faster.
          </p>

          {/* Optional CTA */}
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition">
            Get Started
          </a>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="AI Illustration"
            className="w-full max-w-xlg rounded-xl shadow-lg transition transform hover:scale-105 border-0"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;























// import React from 'react'

// function Hero() {
//   return (
//     <section className="text-center py-28 px-6">
//       <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//         Build <span className="text-blue-500">Smart</span> Digital Solutions
//       </h1>

//       <p className="text-gray-400 max-w-xl mx-auto mb-8">
//         We create powerful web, software, and AI solutions to help your business grow faster.
//       </p>

//       {/* <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition">
//         Get Started
//       </button> */}
//     </section>
//   );
// }

// export default Hero