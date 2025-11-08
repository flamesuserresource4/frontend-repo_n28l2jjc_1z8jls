import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/90" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.18),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 sm:py-32 lg:py-40">
        <motion.h1
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl"
        >
          Full development lifecycle. Complete tasks across the software lifecycle, without leaving the terminal.
        </motion.h1>
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.7, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-emerald-100/90"
        >
          Minimal, futuristic, and fast. Raiser fuses 3D transitions with a terminal-first workflow.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero3D;
