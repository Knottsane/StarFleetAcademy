import { useState } from 'react';
import { GraduationCap, FileCheck, ShieldCheck, ChevronDown, GitCompare } from 'lucide-react';
import { Section } from '@/components/Section';
import { Panel } from '@/components/Panel';

interface Solution {
  id: string;
  number: string;
  title: string;
  icon: typeof GraduationCap;
  color: 'orange' | 'cyan' | 'gold';
  description: string;
  problem: string;
  works: string;
  advantages: string;
  challenges: string;
  phRelevance: string;
  measures: string;
  implementation: string;
}

const SOLUTIONS: Solution[] = [
  {
    id: 'sol1',
    number: '01',
    title: 'AI Literacy & Human-Centered Reskilling',
    icon: GraduationCap,
    color: 'orange',
    description:
      'Provide accessible and affordable training that teaches creative workers how to use AI responsibly while strengthening creativity, critical thinking, artistic judgment, originality, and digital literacy.',
    problem:
      'Many creative workers lack structured opportunities to learn how generative AI works, how to use it ethically, and how to protect their creative value alongside it.',
    works:
      'Offer workshops, online learning, practical exercises, and continuing education for Filipino artists, students, independent creators, and creative industry workers.',
    advantages:
      'Builds worker confidence and adaptability; helps creators use AI as a tool rather than be displaced by it; supports continued human creative judgment.',
    challenges:
      'Funding, reaching workers outside urban centers, keeping curricula current with rapid AI change, and ensuring training is practical rather than purely theoretical.',
    phRelevance:
      'Relevant to the Philippines given the size of the creative workforce and ILO-reported exposure of local jobs to generative AI.',
    measures:
      'Training participation and completion, improvement in demonstrated AI and digital skills, participant feedback, and changes in confidence and employment outcomes.',
    implementation:
      'Workshops, online modules, practical exercises, and continuing education pathways.',
  },
  {
    id: 'sol2',
    number: '02',
    title: 'Clear Policies for AI Use in Creative Industries',
    icon: FileCheck,
    color: 'cyan',
    description:
      'Develop clearer policies addressing human authorship, disclosure, consent, attribution, and fair compensation.',
    problem:
      'Ambiguity around what counts as human-authored work, what must be disclosed, and how creators are credited creates uncertainty for workers and organizations.',
    works:
      'Encourage creative organizations, industry stakeholders, and policymakers to establish transparent practices and review them as technology develops.',
    advantages:
      'Sets shared expectations; reduces disputes; gives organizations a clear framework for responsible adoption.',
    challenges:
      'Policy must keep pace with fast-moving technology; balancing flexibility with certainty; securing cross-sector agreement.',
    phRelevance:
      'Complements IPOPHL’s draft guidance by encouraging practical adoption within organizations, not only at the registry level.',
    measures:
      'Policy adoption, compliance, creator feedback, attribution practices, and trends in AI-related copyright disputes.',
    implementation:
      'Organizational policies, industry standards, and periodic review mechanisms.',
  },
  {
    id: 'sol3',
    number: '03',
    title: 'Transparency, Consent & Fair Compensation',
    icon: ShieldCheck,
    color: 'gold',
    description:
      'Improve transparency about the creative works used to train AI systems and establish appropriate consent, licensing, attribution, and compensation mechanisms.',
    problem:
      'Creators often do not know whether their work has been used to train AI systems, and have limited ways to consent, license, or be compensated.',
    works:
      'Encourage AI developers and creative platforms to provide clearer information and develop workable licensing and creator-consent processes.',
    advantages:
      'Respects creator rights; builds trust in AI tools; supports sustainable creative livelihoods.',
    challenges:
      'Technical difficulty of tracing training data, negotiating licensing at scale, and verifying compliance.',
    phRelevance:
      'Filipino creators whose work circulates internationally benefit from stronger transparency and consent norms globally.',
    measures:
      'Transparency disclosures, licensing participation, documented compensation arrangements, creator feedback, and trends in disputes.',
    implementation:
      'Disclosure mechanisms, opt-out and licensing tools, and creator-participation processes.',
  },
];

export function SolutionLab() {
  const [openId, setOpenId] = useState<string>('sol1');
  return (
    <Section
      id="solutions"
      eyebrow="Section 04"
      title="Starfleet Solution Evaluation"
      code="SFD-01 · SOL"
    >
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-lcars-ice/80 sm:text-[15px]">
        Three proposed interventions from Milestone 2 research. Our group proposes combining all
        three rather than relying on any single intervention. These are proposed solutions, not
        programs already fully implemented nationwide.
      </p>

      <div className="grid gap-4 lg:grid-cols-3">
        {SOLUTIONS.map((s) => (
          <SolutionCard key={s.id} solution={s} open={openId === s.id} onToggle={() => setOpenId(s.id)} />
        ))}
      </div>

      <ComparisonTable />
    </Section>
  );
}

function SolutionCard({
  solution,
  open,
  onToggle,
}: {
  solution: Solution;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = solution.icon;
  const accent =
    solution.color === 'orange'
      ? 'border-lcars-orange/50 text-lcars-orange'
      : solution.color === 'cyan'
      ? 'border-lcars-cyan/50 text-lcars-cyan'
      : 'border-lcars-gold/50 text-lcars-gold';
  return (
    <Panel className={`flex h-full flex-col ${open ? 'ring-1 ' + accent.replace('text-', 'ring-').replace('/50', '/40') : ''}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-start gap-3 text-left"
        aria-expanded={open}
        aria-controls={`sol-${solution.id}`}
      >
        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-md border bg-space-700 ${accent}`}>
          <Icon size={22} />
        </span>
        <div className="flex-1">
          <p className="font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/70">
            Solution {solution.number}
          </p>
          <p className="font-ui text-sm font-semibold uppercase leading-snug tracking-wide text-lcars-cream">
            {solution.title}
          </p>
        </div>
        <ChevronDown
          size={16}
          className={`mt-2 shrink-0 text-lcars-cyan transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <p className="mt-3 text-xs leading-relaxed text-lcars-ice/80">{solution.description}</p>

      <div
        id={`sol-${solution.id}`}
        className={`grid transition-all duration-300 ${open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden space-y-3 text-xs sm:text-sm">
          <Field label="Problem Addressed" body={solution.problem} />
          <Field label="How It Works" body={solution.works} />
          <Field label="Implementation" body={solution.implementation} />
          <Field label="Advantages" body={solution.advantages} />
          <Field label="Implementation Challenges" body={solution.challenges} />
          <Field label="Relevance to the Philippines" body={solution.phRelevance} />
          <Field label="Measures of Effectiveness" body={solution.measures} />
        </div>
      </div>
    </Panel>
  );
}

function Field({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l border-lcars-orange/30 pl-3">
      <p className="mb-0.5 font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/80">{label}</p>
      <p className="leading-relaxed text-lcars-ice/80">{body}</p>
    </div>
  );
}

function ComparisonTable() {
  return (
    <Panel className="mt-6 overflow-hidden">
      <div className="mb-4 flex items-center gap-2">
        <GitCompare size={16} className="text-lcars-cyan" />
        <p className="label-md">Solution Comparison Matrix</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-lcars-orange/30">
              <th className="p-3 font-ui text-xs uppercase tracking-wider text-lcars-amber">Dimension</th>
              {SOLUTIONS.map((s) => (
                <th key={s.id} className="p-3 font-ui text-xs uppercase tracking-wider text-lcars-amber">
                  Sol. {s.number}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <Row label="Focus" cells={SOLUTIONS.map((s) => s.title)} />
            <Row label="Approach" cells={SOLUTIONS.map((s) => s.works)} />
            <Row label="Key Challenge" cells={SOLUTIONS.map((s) => s.challenges)} />
            <Row label="PH Relevance" cells={SOLUTIONS.map((s) => s.phRelevance)} />
          </tbody>
        </table>
      </div>
      <p className="mt-3 rounded border border-lcars-cyan/20 bg-lcars-cyan/5 p-3 text-xs text-lcars-cyan/90">
        Recommended approach: combine all three solutions. Training helps workers adapt; policies
        set expectations; transparency and compensation address the rights of creators whose work
        may be used in AI training.
      </p>
    </Panel>
  );
}

function Row({ label, cells }: { label: string; cells: string[] }) {
  return (
    <tr className="border-b border-space-500/40">
      <td className="p-3 font-ui text-xs uppercase tracking-wide text-lcars-cream">{label}</td>
      {cells.map((c, i) => (
        <td key={i} className="p-3 text-xs text-lcars-ice/80">{c}</td>
      ))}
    </tr>
  );
}
