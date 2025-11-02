"use client";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    // mock submission — in real life send to API or Zapier/Formspree
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 2500);
  }

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4 neon text-white">Join the waitlist</h3>
        <p className="mb-6 text-gray-300">Be first to test FoundrAI and get early pricing.</p>

        <form onSubmit={submit} className="flex gap-3 justify-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            type="email"
            required
            className="px-4 py-3 rounded-full min-w-[260px] bg-white/6 border border-white/6 placeholder:text-gray-200 text-white outline-none"
          />
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 font-semibold">
            {sent ? "Thanks!" : "Get Early Access"}
          </button>
        </form>
      </div>
    </section>
  );
}
