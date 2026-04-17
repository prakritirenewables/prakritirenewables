import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Imported mobile icons
import logo from "../assets/logo.png"; 

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile state

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Commercial", path: "/commercial" },
    { name: "Residential", path: "/residential" },
    { name: "Contact", path: "/contact" },
  ];

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO + BRAND NAME GROUP */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
             <img 
               src={logo} 
               alt="Prakriti Logo" 
               className="w-full h-full object-contain"
             />
          </div>
          <h1 className="text-primary font-black tracking-tighter text-xl shrink-0">
            Prakriti <span className="text-stone-400 font-light italic">Renewables</span>
          </h1>
        </Link>

        {/* DESKTOP NAVIGATION (Hidden on mobile via 'hidden lg:flex') */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path}
                to={link.path}
                className={`relative text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-primary" : "text-stone-400 hover:text-primary"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
          
          <Link to="/readiness">
            <button className="bg-primary text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-lg shadow-primary/10">
              Check Readiness
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON (Visible only on mobile via 'lg:hidden') */}
        <button 
          className="lg:hidden p-2 text-primary hover:bg-stone-50 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-stone-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                      isActive ? "text-primary" : "text-stone-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <Link to="/readiness" onClick={closeMenu} className="mt-2">
                <button className="w-full bg-primary text-white px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-lg shadow-primary/10">
                  Check Readiness
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}