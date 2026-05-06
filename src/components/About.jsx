import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-30 px-6 bg-gradient-to-b from-[#111827] to-[#020617] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We build scalable, modern, and high-performance digital solutions for growing businesses.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left - Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Madhav AI Technologies is a technology-driven company focused on building
              modern, scalable, and high-performance digital solutions. We specialize
              in web, software, and AI-powered systems that help businesses grow faster.
            </p>

            <p>
              Our approach is simple understand the problem deeply and deliver
              practical, efficient, and future-ready solutions with clean code
              and great user experience.
            </p>

            <p>
              Whether you're a startup or an established business, we provide
              reliable and cost-effective solutions tailored to your needs.
            </p>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-1 gap-6">

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur hover:scale-105 transition">
              <h3 className="text-white font-semibold mb-2">🚀 Scalable Solutions</h3>
              <p className="text-gray-400 text-sm">
                Built to grow with your business using modern technologies.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur hover:scale-105 transition">
              <h3 className="text-white font-semibold mb-2">⚡ High Performance</h3>
              <p className="text-gray-400 text-sm">
                Optimized for speed, efficiency, and smooth user experience.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur hover:scale-105 transition">
              <h3 className="text-white font-semibold mb-2">🤖 AI Driven</h3>
              <p className="text-gray-400 text-sm">
                Smart solutions powered by AI to automate and scale operations.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;