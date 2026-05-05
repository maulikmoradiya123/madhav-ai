import React from 'react'

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#020617] to-[#000000] border-t border-white/10 text-gray-400">

            <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

                {/* Company */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">
                        Madhav AI Technologies
                    </h2>
                    <p className="text-sm">
                        Building modern web, software and AI solutions to help businesses grow faster.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-medium mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-400">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-400">About</a></li>
                        <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-medium mb-4">Contact</h3>
                    <p className="text-sm">Email : dhruvang.moradiya17@gmail.com</p>
                    <p className="text-sm">Phone : +44 7442 070305</p>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-white/10 text-center py-4 text-sm">
                © {new Date().getFullYear()} Madhav AI Technologies. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer
