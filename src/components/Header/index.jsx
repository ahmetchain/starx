import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/logos.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { title: "ANA SAYFA", to: "/" },
    { title: "ÇÖZÜMLER", action: () => scrollToSection("solutions") },
    { title: "ÜRÜNLER", action: () => scrollToSection("products") },
    { title: "DANIŞMANLIK", action: () => scrollToSection("consulting") },
    { title: "REFERANSLARIMIZ", action: () => scrollToSection("references") },
    { title: "HAKKIMIZDA", action: () => scrollToSection("about") },
    { title: "İLETİŞİM", to: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.15,
        ease: "easeOut",
        staggerChildren: 0.02,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.06,
        delayChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    closed: { 
      opacity: 0, 
      x: -10,
      transition: {
        duration: 0.1
      }
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const renderMenuItem = (item) => {
    if (item.to) {
      return (
        <Link to={item.to} className="relative z-10 text-sm text-white group-hover:text-indigo-300 
                                    transition-colors duration-300">
          {item.title}
        </Link>
      );
    }
    return (
      <button
        onClick={item.action}
        className="relative z-10 text-sm text-white group-hover:text-indigo-300 
                 transition-colors duration-300"
      >
        {item.title}
      </button>
    );
  };

  const renderMobileMenuItem = (item) => {
    if (item.to) {
      return (
        <Link
          to={item.to}
          className="block px-4 py-3 rounded-xl text-white text-sm font-medium
                    hover:bg-indigo-500/20 hover:text-indigo-300 
                    transition-all duration-200 relative overflow-hidden group"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative z-10">{item.title}</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          />
        </Link>
      );
    }
    return (
      <button
        onClick={() => {
          item.action();
          setIsMenuOpen(false);
        }}
        className="block w-full text-left px-4 py-3 rounded-xl text-white text-sm font-medium
                  hover:bg-indigo-500/20 hover:text-indigo-300 
                  transition-all duration-200 relative overflow-hidden group"
      >
        <span className="relative z-10">{item.title}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
      </button>
    );
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-50 bg-gradient-to-b from-black via-black/95 to-transparent"
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link to="/">
              <img src={logo} alt="STARX Logo" className="h-32" />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative group px-2 py-1"
              >
                {renderMenuItem(item)}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-300 
                               transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                </span>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:hidden text-white p-2 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-6 relative"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu Backdrop */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 backdrop-blur-sm bg-black/20 md:hidden"
              style={{ zIndex: -1 }}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 bg-gradient-to-b from-black/95 to-black/90 
                        rounded-2xl border border-indigo-500/20 overflow-hidden shadow-xl
                        shadow-indigo-500/10"
            >
              <motion.div className="py-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="px-2 py-1"
                  >
                    {renderMobileMenuItem(item)}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
