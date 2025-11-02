'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$19/mo',
    color: 'cyan',
    features: [
      'AI website copy generation',
      '1 project workspace',
      'Email support',
      'Community access',
    ],
  },
  {
    name: 'Standard',
    price: '$49/mo',
    color: 'purple',
    features: [
      'Everything in Basic',
      'Smart branding toolkit',
      '3 active projects',
      'Priority response time',
    ],
  },
  {
    name: 'Pro',
    price: '$99/mo',
    color: 'green',
    features: [
      'Everything in Standard',
      'Advanced cofounder analytics',
      'Unlimited projects',
      'Dedicated AI model tuning',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden" id='pricing'>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.08),transparent_50%)] pointer-events-none" />
      <h2 className="text-4xl font-bold text-center mb-16">Choose Your FoundrAI Plan</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, type: 'spring', stiffness: 120 }}
            className={`
              relative p-10 rounded-3xl backdrop-blur-xl border border-gray-800
              bg-gradient-to-br from-gray-950 to-gray-900
              shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]
              transition-transform duration-300 hover:-translate-y-1
            `}
          >
            {/* Highlight ring */}
            <div
              className={`absolute inset-0 rounded-3xl border-2 border-transparent 
                bg-gradient-to-br from-${plan.color}-400/30 to-transparent opacity-50`}
            />

            <div className="relative z-10 flex flex-col items-start gap-6">
              <h3 className={`text-2xl font-bold text-${plan.color}-400`}>{plan.name}</h3>
              <p className="text-4xl font-bold">{plan.price}</p>

              <ul className="space-y-3">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className={`w-5 h-5 text-${plan.color}-400`} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`
                  mt-8 w-full py-3 rounded-xl font-semibold transition-all
                  bg-${plan.color}-500/20 text-${plan.color}-300 border border-${plan.color}-400/30
                  hover:bg-${plan.color}-500/30 hover:text-${plan.color}-200
                `}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
