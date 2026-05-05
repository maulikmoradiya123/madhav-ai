
function Navbar() {
    return (
        <div className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/5 sticky top-0 z-50">
            <h1 className="font-bold text-xl text-white">
                Madhav AI Technologies
            </h1>

            <div className="space-x-6 text-sm">
                <a href="#" className="hover:text-blue-400">Home</a>
                <a href="#about" className="hover:text-blue-400">About</a>
                <a href="#services" className="hover:text-blue-400">Services</a>
                <a href="#contact" className="hover:text-blue-400">Contact</a>
            </div>
        </div>
    );
}

export default Navbar