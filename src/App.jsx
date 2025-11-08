import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Showcase from './components/Showcase';
import SecureEnterprise from './components/SecureEnterprise';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-emerald-100">
      <Navbar />
      <main className="pt-24">
        <Hero3D />
        <Showcase />
        <SecureEnterprise />
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
