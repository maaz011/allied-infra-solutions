import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "@/assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu(); // Close on route change
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-3 md:py-4">
          {/* Logo & Title */}
          <NavLink to="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <img 
              src={logo}
              alt="Allied Infra Solutions Logo"
              width={60}
              height={60}
              className="object-contain w-12 h-12 md:w-16 md:h-16"
            />
            <span className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 leading-tight whitespace-nowrap">
              ALLIED INFRA SOLUTIONS
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['/', '/about', '/projects', '/contact'].map((path, index) => {
              const label = ['Home', 'About Us', 'Projects', 'Contact Us'][index];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 text-sm lg:text-base group focus:outline-none focus-visible:outline-none focus:ring-0 ${
                      isActive ? 'text-blue-600 font-semibold' : ''
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{label}</span>
                      <motion.span
                        className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-cyan-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ originX: 0.5 }}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden border-t border-gray-200 bg-white overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col py-2">
                {['/', '/about', '/projects', '/contact'].map((path, index) => {
                  const label = ['Home', 'About Us', 'Projects', 'Contact Us'][index];
                  return (
                    <motion.div
                      key={path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block text-gray-700 font-medium px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 focus:outline-none focus-visible:outline-none focus:ring-0 ${
                            isActive ? 'text-blue-600 font-semibold bg-blue-50' : ''
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
