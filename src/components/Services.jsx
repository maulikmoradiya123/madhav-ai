import React from 'react'

const services = [
  { title: "Web Development", desc: "Modern responsive websites and apps" },
  { title: "AI Development", desc: "AI-powered smart solutions" },
  { title: "Software Development", desc: "Custom scalable software" },
  { title: "SEO Optimization", desc: "Rank higher and grow online" },
];

function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <h2 className="text-4xl text-center font-bold mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl 
hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 
transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {s.title}
            </h3>
            <p className="text-gray-400">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services