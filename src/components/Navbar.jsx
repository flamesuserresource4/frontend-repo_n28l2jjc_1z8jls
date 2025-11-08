import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
              <Rocket className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-white">Raiser</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#get-started" className="hover:text-white">Get Started</a>
            <a href="#" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white/90 hover:bg-white/10">Sign In</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
