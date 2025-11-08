import React from 'react';
import { Bot, Palette, ServerCog, Zap, Puzzle, Share2 } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Co‑Creation',
    desc: 'Turn natural language into production‑ready UI, APIs, and data models. Iterate conversationally.'
  },
  {
    icon: Palette,
    title: 'Instant UI Themes',
    desc: 'Switch vibes in a click: neon, minimal, dark, glass — applied consistently across your app.'
  },
  {
    icon: ServerCog,
    title: 'Full‑Stack Automation',
    desc: 'Databases, auth, payments, and integrations wired for you. No boilerplate, no hassle.'
  },
  {
    icon: Zap,
    title: 'One‑Click Deploy',
    desc: 'Preview, ship, and roll back instantly with built‑in CI/CD and staging environments.'
  },
  {
    icon: Puzzle,
    title: 'Plug‑and‑Play Integrations',
    desc: 'Bring your favorite tools: Stripe, Supabase, Firebase, Zapier, Make, and more.'
  },
  {
    icon: Share2,
    title: 'Real‑Time Collaboration',
    desc: 'Co‑edit with your team, share, remix, and showcase your creations live.'
  }
];

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
    <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl transition group-hover:scale-150" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex rounded-xl bg-violet-600/20 p-3 text-violet-300">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
    </div>
  </div>
);

const FeatureGrid = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-br from-white to-violet-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Build anything. No ceiling.
        </h2>
        <p className="mt-3 text-slate-300">
          Drag‑and‑drop meets AI codegen. Automations, real‑time sync, and data at your fingertips.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
