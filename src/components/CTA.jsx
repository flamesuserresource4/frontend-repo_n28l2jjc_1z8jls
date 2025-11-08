import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-emerald-300/5 p-8 shadow-[0_0_80px_-30px_rgba(16,185,129,0.6)] backdrop-blur"
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Raiser — Build in 3D
            </h3>
            <p className="mt-2 max-w-xl text-emerald-100/90">
              A full‑stack workspace with immersive scenes, live code, and deploy — unified.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6 text-xs text-emerald-200/70">
          © {new Date().getFullYear()} Raiser. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default CTA;
