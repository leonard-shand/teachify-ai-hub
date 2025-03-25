
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
        >
          <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            TeachifyAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink to="/" active={isActive("/")}>
            Home
          </NavLink>
          <NavLink to="/lesson" active={isActive("/lesson")}>
            Free Lesson
          </NavLink>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="font-medium">
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
                Sign up
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 bottom-0 bg-white z-40 pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <MobileNavLink 
            to="/" 
            active={isActive("/")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </MobileNavLink>
          <MobileNavLink 
            to="/lesson" 
            active={isActive("/lesson")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Free Lesson
          </MobileNavLink>
          <MobileNavLink 
            to="/login" 
            active={isActive("/login")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Log in
          </MobileNavLink>
          <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6">
              Sign up
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={cn(
      "text-sm font-medium transition-colors duration-300 hover:text-primary",
      active ? "text-primary" : "text-gray-700"
    )}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, active, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn(
      "text-xl font-medium py-2 transition-colors duration-300",
      active ? "text-primary" : "text-gray-800"
    )}
  >
    {children}
  </Link>
);

export default NavBar;
