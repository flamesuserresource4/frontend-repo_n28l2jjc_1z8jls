import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Lock } from 'lucide-react';

const Bullet = ({ children }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
    <span className="text-sm text-emerald-100/85">{children}</span>
  </div>
);

const TiltCard = ({ children, className = '' }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55, ease: 'easeOut' }}
    whileHover={{ rotateX: 3, rotateY: -3, translateZ: 10 }}
    className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/40 p-6 shadow-[0_20px_90px_-40px_rgba(16,185,129,0.5)] [transform-style:preserve-3d] ${className}`}
  >
    {children}
  </motion.div>
);

const Pricing = () => (
  <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
    {/* Starter */}
    <TiltCard>
      <div className="mb-2 flex items-center gap-2 text-emerald-200"><Zap className="h-4 w-4" /> Starter</div>
      <div className="text-3xl font-bold text-white">Free</div>
      <p className="mt-1 text-sm text-emerald-100/80">Personal projects and prototypes.</p>
      <div className="mt-4 space-y-2 text-sm text-emerald-100/85">
        <Bullet>Live 3D workspace</Bullet>
        <Bullet>Community support</Bullet>
        <Bullet>Bring your own models</Bullet>
      </div>
    </TiltCard>

    {/* Team */}
    <TiltCard className="border-emerald-400/30 ring-1 ring-emerald-400/20">
      <div className="mb-2 flex items-center gap-2 text-emerald-200"><ShieldCheck className="h-4 w-4" /> Team</div>
      <div className="text-3xl font-bold text-white">$29<span className="text-base font-medium text-emerald-200/80">/user/mo</span></div>
      <p className="mt-1 text-sm text-emerald-100/80">High‑velocity teams shipping weekly.</p>
      <div className="mt-4 space-y-2 text-sm text-emerald-100/85">
        <Bullet>Role‑based access control</Bullet>
        <Bullet>Integrations: GitHub, Slack, Notion, Jira</Bullet>
        <Bullet>Audit logs & approvals</Bullet>
      </div>
    </TiltCard>

    {/* Enterprise */}
    <TiltCard>
      <div className="mb-2 flex items-center gap-2 text-emerald-200"><Lock className="h-4 w-4" /> Enterprise</div>
      <div className="text-3xl font-bold text-white">Custom</div>
      <p className="mt-1 text-sm text-emerald-100/80">Security, scale, and support.</p>
      <div className="mt-4 space-y-2 text-sm text-emerald-100/85">
        <Bullet>SAML/SCIM, SSO, SSO‑protected workspaces</Bullet>
        <Bullet>Dedicated VPC & data residency</Bullet>
        <Bullet>Premium support & onboarding</Bullet>
      </div>
    </TiltCard>
  </div>
);

const PrivacyPolicy = () => (
  <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-900/10 via-black to-black p-6 md:p-8">
    <div className="mb-4 text-sm font-semibold text-emerald-300">Our Platform’s Privacy & Data Safety Policy</div>
    <h3 className="text-xl font-bold text-white">Your privacy and your data belong to you.</h3>
    <p className="mt-2 text-sm text-emerald-100/85">Our platform is designed so that AI does not have direct permission to modify, delete, or access your database in a destructive way. Everything is protected by architecture, guardrails, encryption, and human confirmation.</p>

    <div className="mt-6 space-y-6 text-emerald-100/85">
      <div>
        <h4 className="text-base font-semibold text-white">1. AI Cannot Directly Touch Your Production Database</h4>
        <p className="mt-1 text-sm">The AI inside our platform is not connected directly to your live data. It only generates recommended changes, and these changes are reviewed through a secure approval system before anything is applied.</p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold text-emerald-300">The AI can:</div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
              <li>Suggest UI changes</li>
              <li>Suggest component additions</li>
              <li>Suggest workflow logic</li>
              <li>Suggest data structure updates</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-rose-300">The AI cannot:</div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
              <li>Directly delete tables</li>
              <li>Drop databases</li>
              <li>Execute destructive SQL</li>
              <li>Modify user records without human approval</li>
            </ul>
          </div>
        </div>
        <p className="mt-2 text-sm">All AI actions are routed through a safe command gateway with a strict allow‑list, meaning only approved, reversible actions are allowed.</p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white">2. Staging First, Production Only After Confirmation</h4>
        <p className="mt-1 text-sm">Every change is first applied in a sandbox preview mode, not the live environment.</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
          <li>You see the result first</li>
          <li>You choose whether to apply it</li>
          <li>Nothing changes without your explicit approval</li>
        </ul>
        <p className="mt-2 text-sm">This prevents mistakes, accidents, or unwanted edits.</p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white">3. Soft‑Delete + Version History + Undo</h4>
        <p className="mt-1 text-sm">We use soft deletion instead of permanent deletion. Nothing is ever instantly erased.</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
          <li>All changes are versioned</li>
          <li>You can undo anything</li>
          <li>You can restore previous states at any time</li>
        </ul>
        <p className="mt-2 text-sm">Your data is never lost — every edit is reversible.</p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white">4. Encrypted Data Storage</h4>
        <p className="mt-1 text-sm">Your data is stored with:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
          <li>Encryption in transit (TLS)</li>
          <li>Encryption at rest (AES‑256 / industry standard)</li>
          <li>No one — including our team — can read your private content without authorization</li>
        </ul>
        <p className="mt-2 text-sm">Your project data is never used to train external AI models.</p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white">5. Zero Data Sharing</h4>
        <p className="mt-1 text-sm">We do not:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
          <li>Sell user data</li>
          <li>Share user data with advertisers</li>
          <li>Sell analytics</li>
          <li>Track external behavior</li>
        </ul>
        <p className="mt-2 text-sm">Your data remains inside your workspace, under your control.</p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white">6. Built‑In Restore Points & Backups</h4>
        <p className="mt-1 text-sm">The system automatically creates:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
          <li>Daily backups</li>
          <li>Rollback checkpoints</li>
          <li>Recovery snapshots</li>
        </ul>
        <p className="mt-2 text-sm">This means even if something unexpected happens, your project and data can be restored instantly.</p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white">7. You Stay in Control — Always</h4>
        <p className="mt-1 text-sm">The philosophy is simple: AI assists. You make the decisions. Your data stays yours. No change, deletion, or update can happen without your action to approve it.</p>
      </div>

      <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100/90">
        <span className="font-semibold">One‑sentence summary: </span>
        Our platform is privacy‑first, encryption‑backed, staging‑controlled, and human‑approved — AI can suggest, but it cannot delete or modify your database without your clear, intentional confirmation.
      </div>
    </div>
  </div>
);

const SecureEnterprise = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      {/* Intro */}
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

      {/* Highlights */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        <TiltCard>
          <div className="text-sm font-semibold text-white">Complete Control</div>
          <p className="mt-2 text-sm text-emerald-100/80">Define autonomy, approval gates, and oversight per workspace.</p>
        </TiltCard>
        <TiltCard>
          <div className="text-sm font-semibold text-white">Your data, secure and private</div>
          <p className="mt-2 text-sm text-emerald-100/80">No external training or cross‑tenant data access. Full encryption at rest.</p>
        </TiltCard>
        <TiltCard>
          <div className="text-sm font-semibold text-white">Full transparency</div>
          <p className="mt-2 text-sm text-emerald-100/80">Deep logs and telemetry give visibility into every action and change.</p>
        </TiltCard>
      </div>

      {/* Enterprise hero blurb */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
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

      {/* Pricing */}
      <Pricing />

      {/* Privacy & Data Safety Policy */}
      <PrivacyPolicy />
    </section>
  );
};

export default SecureEnterprise;
