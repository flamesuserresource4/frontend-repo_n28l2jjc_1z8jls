import React from 'react';
import { Bot, Palette, ServerCog, Zap, Puzzle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Bot,
    title: 'AI Co‑Creation',
    desc: 'Describe, refine, and ship. Raiser codes UI, APIs, and data live with 3D feedback.'
  },
  {
    icon: Palette,
    title: 'Warp Themes',
    desc: 'Toggle neon/terminal vibes with consistent tokens and glossy dark surfaces.'
  },
  {
    icon: ServerCog,
    title: 'Automated Backend',
    desc: 'Schemas, auth, payments, and webhooks — wired instantly with true persistence.'
  },
  {
    icon: Zap,
    title: 'One‑Click Deploy',
    desc: 'Preview, ship, and roll back with baked‑in CI/CD and staging environments.'
  },
  {
    icon: Puzzle,
    title: 'Integrations',
    desc: 'Stripe, Supabase, Postgres, Mongo, Zapier, Make, Slack — connect in seconds.'
  },
  {
    icon: Share2,
    title: 'Live Collaboration',
    desc: 'Co‑edit with your team, branch, merge, and showcase changes in real time.'
  }
];

const FeatureCard = ({ icon: Icon, title, desc, i }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
    className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-black/60 to-black/40 p-6 shadow-[inset_0_0_40px_rgba(16,185,129,0.08)] transition hover:border-emerald-400/40"
  >
    <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl transition group-hover:scale-150" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex rounded-xl bg-emerald-400/15 p-3 text-emerald-300">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-emerald-100/80">{desc}</p>
    </div>
  </motion.div>
);

const FeatureGrid = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Build anything with Raiser. In 3D.
        </h2>
        <p className="mt-3 text-emerald-100/80">
          Every action gives visual 3D feedback. Snappy, cinematic, and tangible.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <FeatureCard key={f.title} i={idx} {...f} />
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
