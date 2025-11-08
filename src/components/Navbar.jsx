import React from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-400/10 bg-black/60 px-4 py-3 shadow-[0_0_40px_-20px_rgba(16,185,129,0.6)] backdrop-blur-xl"
        >
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-black shadow-inner">
              <Rocket className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-white">Raiser</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="relative hover:text-white">
              <span className="after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all hover:after:w-full">Features</span>
            </a>
            <a href="#how" className="relative hover:text-white">
              <span className="after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all hover:after:w-full">How it works</span>
            </a>
            <a href="#get-started" className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-white hover:bg-emerald-400/20">Sign In</a>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
