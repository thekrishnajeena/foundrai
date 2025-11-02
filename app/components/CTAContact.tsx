'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

export default function CTAContact() {
  return (
    <section className="relative py-28 bg-black text-white text-center overflow-hidden">
      {/* Neon gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8 px-6"
      >
        <h2 className="text-4xl font-bold leading-tight">
          Built by <span className="text-cyan-400">Krishna Jeena</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-xl">
          I design and build modern landing pages, MVPs, and immersive web experiences for startups.  
          Fast. Functional. Aesthetically sharp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="mailto:iamjustkrishna@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold 
                       bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/30 
                       transition-all backdrop-blur-xl"
          >
            <Send className="w-5 h-5" /> Contact Me
          </a>

          <a
            href="https://x.com/iamjustkrishna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold 
                       bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800/70 
                       transition-all backdrop-blur-xl"
          >
            <ArrowRight className="w-5 h-5" /> DM on X
          </a>
        </div>

        <p className="text-sm text-gray-600 mt-10">
          Want a landing page like <span className="text-cyan-400">FoundrAI</span>? Let’s make your startup look as futuristic as your idea.
        </p>
      </motion.div>
    </section>
  );
}
