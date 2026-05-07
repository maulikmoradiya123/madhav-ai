import logo from "../assets/logo_new.png";

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 md:px-12 py-4 backdrop-blur-md bg-[#0f172a]/80 sticky top-0 z-50 border-b border-white/10">

            {/* Logo */}
            <a href="#" className="relative flex items-center group">

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition duration-500 rounded-full"></div>

                {/* Logo */}
                <img
                    src={logo}
                    alt="Madhav AI Technologies"
                    className="relative h-14 md:h-16 w-auto object-contain hover:scale-110 transition duration-300"
                />

            </a>

            {/* Nav Links */}
            <div className="space-x-6 md:space-x-8 text-sm md:text-base font-medium text-white">
                <a href="#" className="hover:text-blue-400 transition">
                    Home
                </a>

                <a href="#about" className="hover:text-blue-400 transition">
                    About
                </a>

                <a href="#services" className="hover:text-blue-400 transition">
                    Services
                </a>

                <a href="#contact" className="hover:text-blue-400 transition">
                    Contact
                </a>
            </div>
        </nav>
    );
}

export default Navbar;