import React from 'react';
import { MessageSquare, Layout, Database, Upload } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Describe the vibe',
    desc: 'Tell the AI what you want: features, style, integrations. The platform plans and scaffolds everything.'
  },
  {
    icon: Layout,
    title: 'See it appear',
    desc: 'UI, flows, and components render instantly with smooth transitions and live preview.'
  },
  {
    icon: Database,
    title: 'Wire the backend',
    desc: 'Database schemas, APIs, auth, payments and automations connect automatically.'
  },
  {
    icon: Upload,
    title: 'Deploy in one click',
    desc: 'Share a live link, collaborate in real time, and roll back with built‑in versioning.'
  }
];

const Step = ({ icon: Icon, title, desc, index }) => (
  <div className="relative flex items-start gap-4">
    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/10 text-violet-200">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-sm font-semibold text-white">{index}. {title}</div>
      <p className="mt-1 text-sm text-slate-300">{desc}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="bg-gradient-to-br from-white to-violet-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            From prompt to production in minutes
          </h2>
          <p className="mt-3 text-slate-300">
            Built for creators, founders, and teams who want to move fast without sacrificing quality.
          </p>
          <div className="mt-8 space-y-6">
            {steps.map((s, i) => (
              <Step key={s.title} index={i + 1} {...s} />
            ))}
          </div>
        </div>
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-violet-300/80">
            Live Console
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="rounded-md bg-black/40 p-3">> add chat support with file uploads</div>
            <div className="rounded-md bg-black/40 p-3">✔ backend route /chat created</div>
            <div className="rounded-md bg-black/40 p-3">✔ UI ChatPanel added with streaming responses</div>
            <div className="rounded-md bg-black/40 p-3">✔ Stripe checkout integrated</div>
            <div className="rounded-md bg-black/40 p-3">✔ Deploying preview...</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
