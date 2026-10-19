import { useState } from 'react';
import { Search, FlaskConical, Rocket, Cpu, LineChart, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/Section';
import { Panel } from '@/components/Panel';

interface Phase {
  id: string;
  number: string;
  title: string;
  icon: typeof Search;
  body: string;
  activities: string[];
}

const PHASES: Phase[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Research & Consultation',
    icon: Search,
    body: 'Review available evidence, consult creative workers, and identify local training and policy needs.',
    activities: ['Review ILO, UNESCO, WIPO, IPOPHL, and USCO materials', 'Consult Filipino creative workers', 'Map local training and policy gaps'],
  },
  {
    id: 'p2',
    number: '02',
    title: 'Pilot Development',
    icon: FlaskConical,
    body: 'Prepare training materials, develop responsible AI-use guidance, and recruit participating creative workers and organizations.',
    activities: ['Draft AI literacy curriculum', 'Develop responsible-use guidance', 'Recruit participants and partner organizations'],
  },
  {
    id: 'p3',
    number: '03',
    title: 'Pilot Implementation',
    icon: Rocket,
    body: 'Deliver training, introduce documented policies, and test transparency and licensing practices where feasible.',
    activities: ['Run training cohorts', 'Introduce organizational policies', 'Test transparency and licensing practices'],
  },
  {
    id: 'p4',
    number: '04',
    title: 'Evaluation & Improvement',
    icon: LineChart,
    body: 'Review participation, skill assessments, policy adoption, and participant feedback. Revise the program based on evidence.',
    activities: ['Analyze completion and assessment data', 'Review policy adoption', 'Revise the program based on findings'],
  },
];

const CHALLENGES = [
  'Limited funding for training and program operations',
  'Unequal access to training, especially outside urban centers',
  'Rapidly changing AI technology outpacing curricula and policy',
  'Difficulty identifying and verifying AI training data',
  'Need for cooperation among multiple stakeholders',
];

export function Roadmap() {
  const [active, setActive] = useState<string>('p1');
  return (
    <Section
      id="roadmap"
      eyebrow="Section 07"
      title="Operational Roadmap"
      code="SFD-01 · OPS"
    >
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-lcars-ice/80 sm:text-[15px]">
        A proposed implementation plan in four phases — not a record of completed activities.
      </p>

      {/* Horizontal timeline (desktop) */}
      <Panel className="mb-6 overflow-x-auto">
        <div className="flex min-w-[640px] gap-2 p-2">
          {PHASES.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`group relative flex-1 rounded-md border p-3 text-left transition-all ${
                active === p.id
                  ? 'border-lcars-orange bg-lcars-orange/10 shadow-lcars'
                  : 'border-space-500/60 bg-space-700/40 hover:border-lcars-cyan/40'
              }`}
              aria-pressed={active === p.id}
            >
              <div className="flex items-center gap-2">
                <span className={`font-mono-tech text-[10px] uppercase tracking-wider ${active === p.id ? 'text-lcars-orange' : 'text-lcars-amber/70'}`}>
                  Phase {p.number}
                </span>
                {i < PHASES.length - 1 && (
                  <span className="ml-auto h-px flex-1 bg-gradient-to-r from-lcars-orange/40 to-transparent" aria-hidden />
                )}
              </div>
              <p className={`mt-1 font-ui text-xs font-semibold uppercase tracking-wide ${active === p.id ? 'text-lcars-cream' : 'text-lcars-ice/70'}`}>
                {p.title}
              </p>
            </button>
          ))}
        </div>
      </Panel>

      {/* Active phase detail */}
      <Panel variant="lcars" scan>
        {PHASES.filter((p) => p.id === active).map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.id}>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-lcars-orange/40 bg-space-700 text-lcars-orange">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/70">
                    Phase {p.number}
                  </p>
                  <p className="font-display text-xl font-bold uppercase tracking-wide text-lcars-cream">
                    {p.title}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-lcars-ice/85">{p.body}</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {p.activities.map((a) => (
                  <li key={a} className="flex gap-2 text-lcars-ice/80">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-ok" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </Panel>

      {/* Challenges */}
      <Panel className="mt-6 border-lcars-amber/30">
        <div className="mb-3 flex items-center gap-2">
          <AlertTriangle size={16} className="text-lcars-amber" />
          <p className="label-md">Likely Challenges</p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {CHALLENGES.map((c) => (
            <li key={c} className="flex gap-2 text-xs text-lcars-ice/80 sm:text-sm">
              <Cpu size={14} className="mt-0.5 shrink-0 text-lcars-cyan/70" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </Section>
  );
}
