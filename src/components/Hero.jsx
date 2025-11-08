import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlays for contrast – non-interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.1),transparent_45%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center sm:py-32 lg:py-40">
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-emerald-300" />
          <span className="text-sm text-emerald-100">Meet Raiser</span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.7, ease: 'easeOut' }}
          className="mt-6 max-w-5xl bg-gradient-to-br from-white via-emerald-100 to-emerald-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl"
        >
          Raiser — a 3D full‑stack AI platform with warp‑speed workflows
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          className="mt-6 max-w-2xl text-base text-emerald-100/90 sm:text-lg"
        >
          Green‑on‑black, glossy, and seriously fast. Speak your idea, and Raiser generates UI, APIs, data, and deploys with buttery 3D transitions.
        </motion.p>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#get-started"
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-400/30 transition hover:translate-y-[-2px] hover:bg-emerald-300"
          >
            <Rocket className="h-4 w-4 transition group-hover:rotate-6" />
            Launch Raiser
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
