import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Bullet = ({ children }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
    <span className="text-sm text-emerald-100/85">{children}</span>
  </div>
);

const SecureEnterprise = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      {/* Section 1: Private and Secure */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Raiser for Enterprise
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-emerald-100/85">
          Governance, security, and observability — without sacrificing speed. Add 3D clarity to complex engineering.
        </p>
      </motion.div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/40 p-5"
        >
          <div className="text-sm font-semibold text-white">Complete Control</div>
          <p className="mt-2 text-sm text-emerald-100/80">Define autonomy, approval gates, and oversight per workspace.</p>
        </motion.div>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/40 p-5"
        >
          <div className="text-sm font-semibold text-white">Your data, secure and private</div>
          <p className="mt-2 text-sm text-emerald-100/80">No external training or cross-tenant data access. Full encryption at rest.</p>
        </motion.div>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/40 p-5"
        >
          <div className="text-sm font-semibold text-white">Full transparency</div>
          <p className="mt-2 text-sm text-emerald-100/80">Deep logs and telemetry give visibility into every action and change.</p>
        </motion.div>
      </div>

      {/* Enterprise Hero Card */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-5">
        <motion.div
          initial={{ x: -16, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-900/20 via-black to-black p-8 md:col-span-3"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.08),transparent_45%)]" />
          <div className="relative z-10">
            <div className="text-sm font-medium text-emerald-300">Raiser for Enterprise</div>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Ship faster with trust built‑in.</h3>
            <p className="mt-3 max-w-xl text-emerald-100/85">Streamline engineering workflows, adopt AI safely, and accelerate delivery with governance and observability built in.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 16, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:col-span-2"
          style={{ boxShadow: '0 0 40px rgba(255,255,255,0.08)' }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
          <div className="relative z-10 space-y-3">
            {[
              'Custom files per codebase',
              'Pay-as-you-go AI overages',
              'SAML-based SSO',
              'Zero Data Retention',
              'Dedicated account manager',
              'Bring your own LLM',
            ].map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecureEnterprise;
