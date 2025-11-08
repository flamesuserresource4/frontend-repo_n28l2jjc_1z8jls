import React from 'react';
import { Rocket, Github, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-emerald-500/10 p-8 shadow-xl backdrop-blur">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to vibe‑code your next big idea with Raiser?
            </h3>
            <p className="mt-2 max-w-xl text-slate-200">
              Start free. Build faster with AI, automate the backend, and deploy in a click.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:translate-y-[-2px]"
            >
              <Rocket className="h-4 w-4" />
              Launch Raiser Studio
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-slate-400">
        By continuing, you agree to our Terms and Privacy Policy.
      </p>
    </section>
  );
};

export default CTA;
