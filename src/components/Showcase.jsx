import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, TerminalSquare, Rocket, Shield, Layers, Sliders, Github } from 'lucide-react';

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-3xl text-center">
    {eyebrow && (
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200/90">
        <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
        <span>{eyebrow}</span>
      </div>
    )}
    <h2 className="bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-sm text-emerald-100/80">{subtitle}</p>
    )}
  </div>
);

const TiltPanel = ({ title, icon: Icon, children }) => (
  <motion.div
    initial={{ y: 18, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55, ease: 'easeOut' }}
    whileHover={{ rotateX: 3, rotateY: -3, translateZ: 12 }}
    className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-black/60 to-black/40 shadow-[0_20px_90px_-40px_rgba(16,185,129,0.5)] [transform-style:preserve-3d]"
  >
    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.16),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_50%)]" />
    </div>
    <div className="flex items-center justify-between border-b border-white/5 bg-black/50 px-4 py-3">
      <div className="flex items-center gap-2 text-emerald-200">
        <Icon className="h-4 w-4" />
        <span className="text-xs font-medium uppercase tracking-wide">{title}</span>
      </div>
      <div className="flex gap-1 opacity-70">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
    </div>
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <pre className="relative z-10 overflow-auto p-5 text-[12.5px] leading-relaxed text-emerald-100/90">{children}</pre>
    </div>
  </motion.div>
);

const LogoMark = ({ type }) => {
  // minimal inline SVG marks for model chips
  const common = 'h-3.5 w-3.5';
  if (type === 'claude') {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#10b981" />
        <path d="M8 12l3 3 5-6" stroke="#052e2b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'gpt') {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#6366f1" />
        <path d="M12 7v10M7 12h10" stroke="#0b0b2a" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#38bdf8" />
      <path d="M8 12h8M12 8v8" stroke="#07222c" strokeWidth="2" />
    </svg>
  );
};

const RotatingModels3D = () => {
  const item = (label, color, type) => (
    <div
      key={label}
      className={`absolute left-1/2 top-1/2 h-10 w-32 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-black/60 text-center text-xs font-medium text-white/90 shadow-inner backdrop-blur [transform-style:preserve-3d]`}
      style={{ lineHeight: '2.5rem', boxShadow: `0 10px 34px -12px ${color}` }}
    >
      <div className="mx-auto flex h-full w-full items-center justify-center gap-2">
        <LogoMark type={type} />
        <span>{label}</span>
      </div>
    </div>
  );

  const items = [
    { label: 'Claude', color: 'rgba(16,185,129,0.5)', rot: 0, type: 'claude' },
    { label: 'GPT', color: 'rgba(99,102,241,0.5)', rot: 120, type: 'gpt' },
    { label: 'Gemini', color: 'rgba(56,189,248,0.5)', rot: 240, type: 'gemini' },
  ];

  return (
    <div className="relative mt-12 overflow-hidden rounded-2xl border border-emerald-400/15 bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-emerald-300/5 p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-sm font-medium text-emerald-200">Model switcher — Claude, GPT, Gemini</div>
          <div className="text-xs text-emerald-100/70">Per‑task routing • Zero lock‑in</div>
        </div>
        <div className="relative mx-auto h-56 w-full max-w-xl perspective-[1000px]">
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 [transform-style:preserve-3d]"
          >
            {items.map((it) => (
              <motion.div
                key={it.label}
                className="absolute inset-0 [transform-style:preserve-3d]"
                style={{ transform: `rotateY(${it.rot}deg) translateZ(200px)` }}
              >
                {item(it.label, it.color, it.type)}
              </motion.div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.18),transparent_60%)]" />
        </div>
      </div>
    </div>
  );
};

const Showcase = () => {
  return (
    <section id="showcase" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHeader
        eyebrow="Features"
        title="Raiser — Full‑Stack 3D Workspace"
        subtitle="A full‑stack app, just like this — with live scenes, code, data, and deploy all in one place."
      />

      {/* 2x2 layout: Maintain (left top), Code (right top), Database (left bottom), Deploy (right bottom) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TiltPanel title="Maintain" icon={TerminalSquare}>
{`# Terminal — maintenance\n$ psql connect prod\n> SELECT COUNT(*) FROM orders WHERE status = 'failed';\n  count  \n---------\n    12\n> UPDATE orders SET status = 'retry' WHERE status = 'failed';\nUPDATE 12`}
        </TiltPanel>
        <TiltPanel title="Code" icon={Code2}>
{`// routes/user.ts\nexport const loader = async () => {\n  const users = await db.user.findMany();\n  return json(users);\n};\n\nfunction Users() {\n  return (\n    <Table>\n      {users.map(u => (\n        <Row key={u.id}>{u.email}</Row>\n      ))}\n    </Table>\n  );\n}`}
        </TiltPanel>
        <TiltPanel title="Database" icon={Database}>
{`-- schema.prisma\nmodel Order {\n  id        String   @id @default(cuid())\n  status    String\n  total     Int\n  createdAt DateTime @default(now())\n}`}
        </TiltPanel>
        <TiltPanel title="Deploy" icon={Rocket}>
{`deploy preview --target=staging\nBuilding... done (48s)\nRunning tests... passed\nPushing image... us.gcr.io/raiser/app:0.9.2\nPromoting... done\nPreview URL → https://preview.raiser.dev/ab12`}
        </TiltPanel>
      </div>

      {/* Rotating models 3D ring */}
      <RotatingModels3D />

      {/* State Of The Art */}
      <div className="mt-20">
        <SectionHeader
          eyebrow="State Of The Art"
          title="Modern capabilities, unified in one place"
          subtitle="Integrations, Markdown control, and a powerful prompt editor — tuned for production."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-black p-6 shadow-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_45%)]" />
            <div className="mb-4 flex items-center gap-2 text-sm text-emerald-200">
              <Layers className="h-4 w-4" />
              <span>Integrations</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Connect the tools you already use</h3>
            <p className="mt-2 text-sm text-emerald-100/80">GitHub, Slack, Notion, Jira — plus databases, storage, payments, deploy, and more. Your context, unified.</p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                { label: 'GitHub', Icon: Github },
                { label: 'Slack' },
                { label: 'Notion' },
                { label: 'Jira' },
                { label: 'Postgres' },
                { label: 'MongoDB' },
                { label: 'S3' },
                { label: 'Stripe' },
                { label: 'Vercel' },
                { label: 'AWS' },
                { label: 'Linear' },
                { label: 'Discord' },
              ].map(({ label, Icon: I }, i) => (
                <div key={label + i} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90">
                  {I ? <I className="h-3.5 w-3.5 opacity-80" /> : <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/70" />}
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-950 to-black p-6 shadow-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.2),transparent_40%)]" />
            <div className="mb-4 flex items-center gap-2 text-sm text-emerald-200">
              <Sliders className="h-4 w-4" />
              <span>Markdown Control</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Control agents with versioned Markdown</h3>
            <p className="mt-2 text-sm text-emerald-100/80">Set autonomy, tools, and safety with human‑readable files checked into your repo.</p>
            <div className="mt-6 space-y-2 rounded-xl bg-black/50 p-4 text-[12px] leading-relaxed text-emerald-100/90">
              <div className="text-emerald-300">agent.md</div>
              <pre>{`# Raiser Agent\n- role: product-engineer\n- safety: high\n- tools: codegen, db, deploy`}</pre>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1220] to-black p-6 shadow-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.15),transparent_40%)]" />
            <div className="mb-4 flex items-center gap-2 text-sm text-emerald-200">
              <Shield className="h-4 w-4" />
              <span>Prompt Editor</span>
            </div>
            <h3 className="text-lg font-semibold text-white">A powerful prompt editor</h3>
            <p className="mt-2 text-sm text-emerald-100/80">Craft, test, and reuse prompts with variables, history, and diffable changes.</p>
            <div className="mt-6 rounded-xl border border-white/10 bg-black/50 p-4 text-[12px] text-slate-200">
              <div className="opacity-80">"Generate a billing settings page with toggles for plan, usage, and invoices."</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
