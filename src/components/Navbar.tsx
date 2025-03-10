
import { useEffect, useState } from "react";
import { Menu, X, LogIn, LogOut, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      closeMenu();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
    closeMenu();
  };

  const handleSignupClick = () => {
    navigate("/signup");
    closeMenu();
  };

  const handleDashboardClick = () => {
    if (currentUser) {
      if (currentUser.role === "admin") {
        navigate("/admin-dashboard");
      } else if (currentUser.role === "supplier") {
        navigate("/supplier-dashboard");
      } else if (currentUser.role === "investor") {
        navigate("/investor-dashboard");
      } else {
        navigate("/business-dashboard");
      }
    }
    closeMenu();
  };

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
            {currentUser ? (
              <>
                <Button 
                  onClick={handleDashboardClick}
                  className="px-4 py-2 text-neutral-700 dark:text-neutral-200 hover:text-guardian-600 dark:hover:text-guardian-400 transition"
                >
                  Dashboard
                </Button>
                <Button 
                  onClick={handleLogout}
                  className="px-4 py-2 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:border-guardian-300 dark:hover:border-guardian-700 rounded-md transition flex items-center gap-2"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </Button>
              </>
            ) : (
              <>
                <Button 
                  onClick={handleLoginClick}
                  className="px-4 py-2 text-neutral-700 dark:text-neutral-200 hover:text-guardian-600 dark:hover:text-guardian-400 transition flex items-center gap-2"
                >
                  <LogIn size={16} />
                  <span>Login</span>
                </Button>
                <Button 
                  onClick={handleSignupClick}
                  className="px-4 py-2 bg-guardian-600 hover:bg-guardian-700 text-white rounded-md transition shadow-sm hover:shadow flex items-center gap-2"
                >
                  <UserPlus size={16} />
                  <span>Get Started</span>
                </Button>
              </>
            )}
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
              {currentUser ? (
                <>
                  <Button 
                    onClick={handleDashboardClick}
                    className="px-4 py-3 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-md transition w-full flex items-center justify-center gap-2"
                  >
                    Dashboard
                  </Button>
                  <Button 
                    onClick={handleLogout}
                    className="px-4 py-3 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-md transition w-full flex items-center justify-center gap-2"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    onClick={handleLoginClick}
                    className="px-4 py-3 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-md transition w-full flex items-center justify-center gap-2"
                  >
                    <LogIn size={18} />
                    <span>Login</span>
                  </Button>
                  <Button 
                    onClick={handleSignupClick}
                    className="px-4 py-3 bg-guardian-600 hover:bg-guardian-700 text-white rounded-md transition shadow-sm hover:shadow w-full flex items-center justify-center gap-2"
                  >
                    <UserPlus size={18} />
                    <span>Get Started</span>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
