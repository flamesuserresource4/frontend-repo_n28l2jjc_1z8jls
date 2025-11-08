import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-emerald-100">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <CTA />
      </main>
      <footer className="border-t border-emerald-400/20 py-10 text-center text-sm text-emerald-200/70">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} Raiser — Warp‑speed 3D building.
        </div>
      </footer>
    </div>
  );
}

export default App;
