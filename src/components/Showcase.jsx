import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, TerminalSquare, Shield, Bot, Sparkles } from 'lucide-react';

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto mb-8 max-w-3xl text-center">
    {eyebrow && (
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200/90">
        <Sparkles className="h-3.5 w-3.5" />
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

const CodePanel = ({ title, icon: Icon, children }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="group overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-black/60 to-black/40 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
  >
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
      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <pre className="relative z-10 overflow-auto p-5 text-[12px] leading-relaxed text-emerald-100/90">
        {children}
      </pre>
    </div>
  </motion.div>
);

const ModelsStrip = () => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="mt-12 rounded-2xl border border-emerald-400/15 bg-gradient-to-r from-emerald-500/10 via-emerald-400/5 to-emerald-300/5 p-5"
  >
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div className="flex items-center gap-3 text-emerald-200">
        <Bot className="h-5 w-5" />
        <div className="text-sm font-medium">Open models via Raiser</div>
      </div>
      <div className="grid w-full grid-cols-1 gap-3 text-sm text-emerald-100/80 md:grid-cols-3">
        <div className="rounded-lg bg-black/40 p-3">
          <div className="font-medium text-white">Claude</div>
          <p className="mt-1 text-xs">Anthropic’s reasoning specialist for safe, structured planning.</p>
        </div>
        <div className="rounded-lg bg-black/40 p-3">
          <div className="font-medium text-white">GPT</div>
          <p className="mt-1 text-xs">OpenAI’s versatile coder and writer for rapid prototyping.</p>
        </div>
        <div className="rounded-lg bg-black/40 p-3">
          <div className="font-medium text-white">Gemini</div>
          <p className="mt-1 text-xs">Google’s multimodal engine for docs, images, and code review.</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Showcase = () => {
  return (
    <section id="showcase" className="relative mx-auto max-w-7xl px-6 py-20">
      {/* Developer lifecycle */}
      <SectionHeader
        eyebrow="Developer Lifecycle"
        title="Full development lifecycle. Complete tasks across the software lifecycle, without leaving the terminal."
        subtitle="Code, maintain, and deploy from one 3D‑aware workspace."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <CodePanel title="Code" icon={Code2}>
{`// app/routes/user.ts\nexport const loader = async () => {\n  const users = await db.user.findMany();\n  return json(users);\n};\n\nfunction Users() {\n  return (\n    <Table>\n      {users.map(u => (\n        <Row key={u.id}>{u.email}</Row>\n      ))}\n    </Table>\n  );\n}`}        </CodePanel>
        <CodePanel title="Maintain" icon={TerminalSquare}>
{`# Terminal — SQL maintenance\n$ psql connect prod\n> SELECT COUNT(*) FROM orders WHERE status = 'failed';\n  count  \n---------\n    12\n> UPDATE orders SET status = 'retry' WHERE status = 'failed';\nUPDATE 12`}        </CodePanel>
        <CodePanel title="Deploy" icon={Database}>
{`deploy preview --target=staging\nBuilding... done (48s)\nRunning tests... passed\nPushing image... us.gcr.io/raiser/app:0.9.2\nPromoting... done\nPreview URL → https://preview.raiser.dev/ab12`}        </CodePanel>
      </div>

      <ModelsStrip />

      {/* State Of The Art */}
      <div className="mt-20">
        <SectionHeader
          eyebrow="State Of The Art"
          title="Has everything you expect from a modern agentic development tool."
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
              <Shield className="h-4 w-4" />
              <span>Integrations</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Access all your context through integrations</h3>
            <p className="mt-2 text-sm text-emerald-100/80">Connect tools, notes, and communication into one workflow.</p>
            <div className="mt-6 grid grid-cols-5 gap-2 opacity-80">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-8 rounded-lg bg-white/5" />
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
              <TerminalSquare className="h-4 w-4" />
              <span>Markdown Control</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Control agents with standard Markdown</h3>
            <p className="mt-2 text-sm text-emerald-100/80">Configure and edit agent behaviors using clean, human-readable files.</p>
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
              <Code2 className="h-4 w-4" />
              <span>Prompt Editor</span>
            </div>
            <h3 className="text-lg font-semibold text-white">A powerful prompt editor</h3>
            <p className="mt-2 text-sm text-emerald-100/80">Craft, refine, and reuse prompts with an AI-aware interface.</p>
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
