import { Shield, Wrench, Heart, Sparkles } from 'lucide-react';
import { Section } from '@/components/Section';
import { Panel } from '@/components/Panel';

export function PrimeDirective() {
  return (
    <Section
      id="directive"
      eyebrow="Section 05 · Core Recommendation"
      title="The Prime Directive: Augment, Don’t Replace"
      code="SFD-01 · PRIME"
    >
      <Panel variant="lcars" scan className="mb-8 overflow-hidden">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-lcars-orange" />
          <p className="label-md">Group Position</p>
        </div>
        <p className="mt-3 font-display text-lg font-bold leading-snug text-lcars-cream sm:text-2xl">
          “AI can be a useful tool for creativity, but it should{' '}
          <span className="text-lcars-orange">support human artists</span> rather than replace them.
          Human creativity, emotion, experience, and originality should remain central in the
          creative industry.”
        </p>
      </Panel>

      {/* Animated CSS diagram */}
      <DirectiveDiagram />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <DirectivePart
          icon={Wrench}
          number="1"
          title="Equip the Crew"
          body="Provide AI literacy, digital skills, reskilling, and ethical training to creative workers so they can adapt and use AI responsibly."
        />
        <DirectivePart
          icon={Shield}
          number="2"
          title="Protect the Crew"
          body="Promote clear rules for human creative contribution, authorship, transparency, consent, attribution, and fair compensation."
        />
        <DirectivePart
          icon={Heart}
          number="3"
          title="Respect the Crew"
          body="Encourage responsible AI training practices, appropriate licensing, and meaningful creator participation in decisions affecting their work."
        />
      </div>

      <Panel className="mt-6 border-lcars-cyan/30">
        <p className="label-md mb-2 text-lcars-cyan">Why Combine the Three</p>
        <p className="text-sm leading-relaxed text-lcars-ice/85 sm:text-[15px]">
          Training helps workers adapt; policies establish expectations; transparency and
          compensation address the rights of creators whose work may be used in AI training. None of
          the three is sufficient alone — together they form an integrated approach to responsible
          collaboration between humans and AI. The objective is not to reject useful technology, but
          to keep human creativity at the center.
        </p>
      </Panel>
    </Section>
  );
}

function DirectivePart({
  icon: Icon,
  number,
  title,
  body,
}: {
  icon: typeof Shield;
  number: string;
  title: string;
  body: string;
}) {
  return (
    <Panel className="h-full">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-md border border-lcars-orange/40 bg-space-700 text-lcars-orange">
          <Icon size={20} />
        </span>
        <div>
          <p className="font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/70">
            Part {number}
          </p>
          <p className="font-ui text-base font-semibold uppercase tracking-wide text-lcars-cream">{title}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-lcars-ice/80">{body}</p>
    </Panel>
  );
}

function DirectiveDiagram() {
  return (
    <Panel variant="lcars" className="overflow-hidden">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles size={16} className="text-lcars-cyan" />
        <p className="label-md">Integrated Strategy Diagram</p>
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 py-6">
        {/* Three nodes */}
        <div className="grid w-full gap-4 sm:grid-cols-3">
          <Node label="Equip" sub="Training & Reskilling" color="orange" />
          <Node label="Protect" sub="Policy & Authorship" color="cyan" />
          <Node label="Respect" sub="Consent & Compensation" color="gold" />
        </div>

        {/* Connection lines */}
        <svg viewBox="0 0 300 60" className="h-12 w-full max-w-sm" fill="none" aria-hidden>
          <defs>
            <linearGradient id="line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff9933" />
              <stop offset="100%" stopColor="#66d9ef" />
            </linearGradient>
          </defs>
          <path d="M50 0 L150 60 L250 0" stroke="url(#line)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
          <circle cx="150" cy="60" r="3" fill="#ffcc66" />
        </svg>

        {/* Center node */}
        <div className="relative flex flex-col items-center">
          <div className="absolute -inset-4 rounded-full border border-lcars-orange/40 animate-pulseRing" aria-hidden />
          <div className="relative rounded-full border border-lcars-orange/60 bg-space-700 px-6 py-3 text-center shadow-lcars">
            <p className="font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/80">Core</p>
            <p className="font-display text-base font-bold uppercase tracking-wide text-lcars-cream">
              Human Creativity at the Center
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function Node({
  label,
  sub,
  color,
}: {
  label: string;
  sub: string;
  color: 'orange' | 'cyan' | 'gold';
}) {
  const c =
    color === 'orange' ? 'border-lcars-orange/50 text-lcars-orange' : color === 'cyan' ? 'border-lcars-cyan/50 text-lcars-cyan' : 'border-lcars-gold/50 text-lcars-gold';
  return (
    <div className={`rounded-md border bg-space-700/60 p-3 text-center ${c}`}>
      <p className="font-ui text-sm font-bold uppercase tracking-wider">{label}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wide text-lcars-ice/70">{sub}</p>
    </div>
  );
}
