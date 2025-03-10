
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
    isScrolled 
      ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-md" 
      : "bg-transparent"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-guardian-600 text-white p-1.5 rounded-md font-bold text-xl">G</span>
          <span className="font-medium text-lg text-neutral-900 dark:text-white">Guardian-IO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-neutral-700 dark:text-neutral-200 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Features</a>
            <a href="#dashboard" className="text-neutral-700 dark:text-neutral-200 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Dashboard</a>
            <a href="#technology" className="text-neutral-700 dark:text-neutral-200 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Technology</a>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-neutral-700 dark:text-neutral-200 hover:text-guardian-600 dark:hover:text-guardian-400 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-guardian-600 hover:bg-guardian-700 text-white rounded-md transition shadow-sm hover:shadow">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-neutral-900 dark:text-white" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white dark:bg-neutral-900 z-50 transition-transform duration-300 transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="bg-guardian-600 text-white p-1.5 rounded-md font-bold text-xl">G</span>
              <span className="font-medium text-lg text-neutral-900 dark:text-white">Guardian-IO</span>
            </div>
            <button className="text-neutral-900 dark:text-white" onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-lg">
            <a href="#features" className="text-neutral-700 dark:text-neutral-200 hover:text-guardian-600 dark:hover:text-guardian-400 transition" onClick={closeMenu}>Features</a>
            <a href="#dashboard" className="text-neutral-700 dark:text-neutral-200 hover:text-guardian-600 dark:hover:text-guardian-400 transition" onClick={closeMenu}>Dashboard</a>
            <a href="#technology" className="text-neutral-700 dark:text-neutral-200 hover:text-guardian-600 dark:hover:text-guardian-400 transition" onClick={closeMenu}>Technology</a>
            <div className="pt-6 flex flex-col space-y-4 w-full">
              <button className="px-4 py-3 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-md transition w-full">
                Login
              </button>
              <button className="px-4 py-3 bg-guardian-600 hover:bg-guardian-700 text-white rounded-md transition shadow-sm hover:shadow w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
