import { useState, useEffect } from "react";
import logoPath from "@assets/480176787_122103918212795332_6131134995016059852_n.jpg";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img 
              src={logoPath} 
              alt="S Tech Solution" 
              className="h-10 w-10 rounded-lg shadow-md object-cover"
            />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-brand-navy">
                S Tech Solution
              </h1>
              <p className="text-xs text-gray-600 font-medium">
                Digital Marketing Excellence
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-brand-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-orange p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-orange font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-orange font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-orange font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-orange font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 bg-brand-orange text-white rounded-lg mx-3 font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
