'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo / Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tight text-white"
        >
          <Link href="/">Foundr<span className="text-blue-400">AI</span></Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-300">
          <Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-blue-500/30">
            Get Early Access
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center bg-black/90 backdrop-blur-xl border-t border-white/10 py-4 space-y-4 text-gray-300"
        >
          <Link href="#features" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-blue-500/30">
            Get Early Access
          </button>
        </motion.nav>
      )}
    </header>
  );
}
