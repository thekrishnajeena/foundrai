'use client';

import { motion } from 'framer-motion';
import { Brain, Rocket, LineChart, Palette } from 'lucide-react';

const capabilities = [
  {
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    title: 'Strategic Intelligence',
    desc: 'Understands your vision and builds step-by-step execution plans like a real cofounder.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: 'Instant Launch',
    desc: 'Generates MVP-ready apps and landing pages within minutes using your brief.',
  },
  {
    icon: <LineChart className="w-8 h-8 text-green-400" />,
    title: 'Market Insight',
    desc: 'Scans trends and competitors to give you edge and clarity before execution.',
  },
  {
    icon: <Palette className="w-8 h-8 text-pink-400" />,
    title: 'Brand Creation',
    desc: 'Designs your brand kit—logo, palette, tone, everything—autonomously.',
  },
];

export default function Features() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden" id='features'>
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.15),transparent_50%)] pointer-events-none" />

      <h2 className="text-4xl font-bold text-center mb-16">What FoundrAI Can Do</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {capabilities.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className={`
              relative p-8 rounded-[2rem] backdrop-blur-xl border border-gray-800
              ${i % 2 === 0 ? 'bg-gradient-to-br from-gray-900 to-gray-950' : 'bg-gradient-to-br from-gray-950 to-gray-900'}
              shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.25)]
            `}
          >
            <div className="flex flex-col items-start gap-4">
              {f.icon}
              <h3 className="text-2xl font-semibold">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>

            {/* glowing accent on one corner */}
            <div className={`absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 blur-2xl rounded-full ${i % 2 === 0 ? '' : 'left-0 right-auto'}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
