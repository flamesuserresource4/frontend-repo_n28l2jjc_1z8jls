import React from 'react';
import { MessageSquare, Layout, Database, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: MessageSquare,
    title: 'Describe the vibe',
    desc: 'Tell Raiser the product, flows, and integrations. The plan renders in 3D.'
  },
  {
    icon: Layout,
    title: 'UI materializes',
    desc: 'Screens and components animate in with smooth, warp‑like transitions.'
  },
  {
    icon: Database,
    title: 'Backend auto‑wired',
    desc: 'Schemas, routes, auth, and automations get created and linked to the UI.'
  },
  {
    icon: Upload,
    title: 'Deploy instantly',
    desc: 'Preview, invite collaborators, merge changes, and ship.'
  }
];

const Step = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ x: -12, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
    className="relative flex items-start gap-4"
  >
    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-200">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-sm font-semibold text-white">{index}. {title}</div>
      <p className="mt-1 text-sm text-emerald-100/80">{desc}</p>
    </div>
  </motion.div>
);

const HowItWorks = () => {
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            From prompt to production
          </h2>
          <p className="mt-3 text-emerald-100/80">
            Designed for founders and teams who crave speed without losing craft.
          </p>
          <div className="mt-8 space-y-6">
            {steps.map((s, i) => (
              <Step key={s.title} index={i + 1} {...s} />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-black/60 to-black/40 p-6 shadow-[0_0_60px_-20px_rgba(16,185,129,0.5)]"
        >
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-emerald-300/90">
            Raiser Console
          </div>
          <div className="space-y-3 text-xs text-emerald-100/90">
            <div className="rounded-md bg-black/50 p-3">&gt; add chat support with file uploads</div>
            <div className="rounded-md bg-black/50 p-3">✔ backend route /chat created</div>
            <div className="rounded-md bg-black/50 p-3">✔ UI ChatPanel added with streaming responses</div>
            <div className="rounded-md bg-black/50 p-3">✔ Stripe checkout integrated</div>
            <div className="rounded-md bg-black/50 p-3">✔ Deploying preview...</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
