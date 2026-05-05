import React from 'react'
import whatsappIcon from "../assets/whatsapp.png";

function Contact() {
  const handleWhatsApp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const phoneNumber = "447442070305";

    const text = `Hello, I am ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-white/10 bg-gradient-to-b from-[#0f172a] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300">
            Let’s discuss your project and build something amazing together
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left - Form */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-6">Send Message</h3>

            <form onSubmit={handleWhatsApp} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-[#020617] border border-white/10 focus:border-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-[#020617] border border-white/10 focus:border-blue-500 outline-none"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-[#020617] border border-white/10 focus:border-blue-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl 
                  flex items-center justify-center gap-3 
                  transition-all duration-300 
                  shadow-lg hover:shadow-green-500/30 
                  transform hover:scale-[1.02]"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                <span className="font-medium">Send on WhatsApp</span>
              </button>

            </form>
          </div>

          {/* Right - Info + Map */}
          <div className="flex flex-col space-y-6">

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-300">dhruvang.moradiya17@gmail.com</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-gray-300">+44 7442 070305</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-gray-300">Surat, Gujarat, India</p>
            </div>

            {/* Google Map */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Surat,Gujarat,India&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;