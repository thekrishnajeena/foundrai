import Hero3D from "./components/Hero3D";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTAContact from "./components/CTAContact";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero3D />
      <Features />
      <section className="py-12 px-6 text-center text-gray-400 bg-black">
        <blockquote className="max-w-3xl mx-auto italic text-lg">
          “Feels like having a CTO, analyst, and strategist, all in one chat.” Beta founder
        </blockquote>
      </section>
      <Testimonials/>
      <Pricing/>
      <CTA />
      <CTAContact/>
      <footer className="py-8 text-center text-sm text-gray-500 bg-black">
        © {new Date().getFullYear()} FoundrAI — made by me
      </footer>
    </main>
  );
}
