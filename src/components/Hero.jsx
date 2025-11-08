import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-purple-900/20 via-slate-900 to-slate-950">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast; does not block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-28 lg:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-violet-300" />
          <span className="text-sm text-violet-200">Dream it. Build it. Ship it.</span>
        </div>

        <h1 className="mt-6 max-w-4xl bg-gradient-to-br from-white via-violet-100 to-fuchsia-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
          The Vibe Coding Platform for Instant Full‑Stack Creation
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          Describe what you want and watch it come alive — UI, backend, database, auth, payments, and deploy. All in one collaborative canvas.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#get-started"
            className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:translate-y-[-2px] hover:bg-violet-500"
          >
            <Rocket className="h-4 w-4 transition group-hover:rotate-6" />
            Start Building
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
