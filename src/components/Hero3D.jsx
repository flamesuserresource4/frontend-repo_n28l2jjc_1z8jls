import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.15),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 sm:py-32 lg:py-40">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-black/40 px-3 py-1 text-xs text-emerald-200/90 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live 3D Workspace — interactive and smooth
        </motion.div>
        <motion.h1
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.7, ease: 'easeOut' }}
          className="mt-5 max-w-4xl bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl"
        >
          Raiser — the 3D‑native developer platform.
        </motion.h1>
        <motion.p
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-emerald-100/90"
        >
          Secure, cinematic, and fast. Build full‑stack apps with a live 3D workspace, precision controls, and enterprise‑grade guardrails.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero3D;
