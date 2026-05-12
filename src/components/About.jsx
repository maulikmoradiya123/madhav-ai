import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#020617] border-t border-white/10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            About <span className="text-blue-500">Madhav AI Technologies</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            We help businesses transform ideas into scalable digital products
            through modern web development, software solutions, and AI-powered innovation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div className="space-y-7">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 hover:border-blue-500/40 transition duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Who We Are
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Madhav AI Technologies is a modern technology company focused on
                building high-performance digital solutions for startups,
                businesses, and enterprises. We specialize in scalable web
                applications, software systems, automation tools, and AI-powered
                platforms designed to improve business efficiency and user experience.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 hover:border-cyan-500/40 transition duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">
                What We Do
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Our team focuses on creating reliable and future-ready solutions
                using modern technologies like React, Laravel, PHP, MySQL, and AI integrations.
                From business websites to SaaS applications and automation systems,
                we deliver solutions that help businesses grow faster in the digital world.
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            {/* Mission */}
            <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-xl hover:scale-[1.02] transition duration-300 shadow-lg shadow-blue-500/10">

              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full"></div>

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                🚀 Our Mission
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Our mission is to help businesses leverage modern technology
                and AI solutions to build smarter digital experiences and
                achieve sustainable growth in the digital world.
              </p>
            </div>

            {/* Vision */}
            <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-xl hover:scale-[1.02] transition duration-300 shadow-lg shadow-cyan-500/10">

              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 blur-2xl rounded-full"></div>

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                🌍 Our Vision
              </h3>

              <p className="text-gray-300 leading-relaxed">
                To become a trusted technology partner for businesses by
                delivering innovative, scalable, and impactful digital solutions
                powered by modern web technologies and artificial intelligence.
              </p>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-blue-500/30 transition">
                <h4 className="text-2xl font-bold text-blue-400">50+</h4>
                <p className="text-gray-400 text-sm mt-1">Projects</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-blue-500/30 transition">
                <h4 className="text-2xl font-bold text-cyan-400">5+</h4>
                <p className="text-gray-400 text-sm mt-1">Years Exp.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-blue-500/30 transition">
                <h4 className="text-2xl font-bold text-blue-400">24/7</h4>
                <p className="text-gray-400 text-sm mt-1">Support</p>
              </div>

            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}
export default About;