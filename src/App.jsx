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
    </div>
  );
}

export default App;
