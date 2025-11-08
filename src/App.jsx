import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} Raiser — Built with love and great vibes.
        </div>
      </footer>
    </div>
  );
}

export default App;
