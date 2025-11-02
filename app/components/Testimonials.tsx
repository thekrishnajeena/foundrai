'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, Synapz Labs',
    text: "FoundrAI felt less like a tool and more like a cofounder who actually gets my vision. Built our MVP landing in hours.",
  },
  {
    name: 'Lena Cruz',
    role: 'Product Designer, Orbital Studio',
    text: "The way it generates strategy, tone, and visuals—scary good. It's like working with an entire product team in one interface.",
  },
  {
    name: 'Taro Ishikawa',
    role: 'Startup Advisor, Nova Collective',
    text: "I tested FoundrAI on 3 idea pitches—each time it nailed investor-ready clarity and branding suggestions in seconds.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.15),transparent_50%)] pointer-events-none" />

      <h2 className="text-4xl font-bold text-center mb-16">Voices from the Founders</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            className={`
              relative p-8 rounded-3xl backdrop-blur-xl border border-gray-800
              bg-gradient-to-br from-gray-950 to-gray-900
              shadow-[0_0_25px_rgba(147,51,234,0.15)] hover:shadow-[0_0_35px_rgba(147,51,234,0.35)]
              transition-transform duration-300 hover:-translate-y-1
            `}
          >
            <Quote className="w-10 h-10 text-purple-400 mb-4 opacity-80" />
            <p className="text-gray-300 italic mb-6">"{t.text}"</p>
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>

            {/* glowing pulse */}
            <div className="absolute -bottom-6 right-6 w-16 h-16 bg-purple-500/20 blur-3xl rounded-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
