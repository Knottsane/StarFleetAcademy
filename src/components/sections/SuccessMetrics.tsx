import { Target, ClipboardList, Eye, MessageSquareWarning, Info } from 'lucide-react';
import { Section } from '@/components/Section';
import { Panel } from '@/components/Panel';

interface Objective {
  id: string;
  code: string;
  icon: typeof Target;
  title: string;
  target: string;
  measure: string;
  deadline: string;
  evidence: string;
}

const OBJECTIVES: Objective[] = [
  {
    id: 'a',
    code: 'OBJ-A',
    icon: Target,
    title: 'Training',
    target: 'Enroll at least 100 Filipino creative workers in AI literacy and responsible-use training; at least 80% complete the program.',
    measure: 'Enrollment and completion records.',
    deadline: 'Within 12 months of launching a pilot program.',
    evidence: 'Pilot program records.',
  },
  {
    id: 'b',
    code: 'OBJ-B',
    icon: ClipboardList,
    title: 'Skill Development',
    target: 'At least 75% of participants who complete the pilot improve scores between pre-training and post-training assessments.',
    measure: 'Comparable pre-training and post-training assessments.',
    deadline: 'Within 12 months.',
    evidence: 'Assessment results.',
  },
  {
    id: 'c',
    code: 'OBJ-C',
    icon: Eye,
    title: 'Transparency',
    target: 'Seek adoption of a documented AI-use and creator-transparency policy by at least five participating creative organizations.',
    measure: 'Published or formally documented organizational policies.',
    deadline: 'Within 12 months.',
    evidence: 'Documented policies.',
  },
  {
    id: 'd',
    code: 'OBJ-D',
    icon: MessageSquareWarning,
    title: 'Creator Feedback',
    target: 'Collect baseline and follow-up feedback assessing perceived creative control, understanding of AI, and awareness of consent, attribution, and licensing.',
    measure: 'Survey responses and changes between baseline and follow-up.',
    deadline: 'During the pilot period.',
    evidence: 'Survey instruments and responses.',
  },
];

export function SuccessMetrics() {
  return (
    <Section
      id="metrics"
      eyebrow="Section 06"
      title="Mission Success Criteria"
      code="SFD-01 · SMART"
    >
      <Panel className="mb-6 border-lcars-amber/30 bg-lcars-amber/5">
        <div className="flex items-start gap-3">
          <Info size={18} className="mt-0.5 shrink-0 text-lcars-amber" />
          <p className="text-xs leading-relaxed text-lcars-amber/90 sm:text-sm">
            The Milestone 2 document does not yet specify finalized numerical targets or deadlines.
            The objectives below are <strong>proposed pilot targets for group review</strong> — not
            achieved results and not targets already approved by our group. This website does not
            have evidence that these targets have been met.
          </p>
        </div>
      </Panel>

      <div className="grid gap-4 md:grid-cols-2">
        {OBJECTIVES.map((o) => (
          <ObjectiveCard key={o.id} objective={o} />
        ))}
      </div>

      <ProgressDashboard />
    </Section>
  );
}

function ObjectiveCard({ objective }: { objective: Objective }) {
  const Icon = objective.icon;
  return (
    <Panel variant="lcars" className="h-full">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-md border border-lcars-orange/40 bg-space-700 text-lcars-orange">
          <Icon size={20} />
        </span>
        <div>
          <p className="font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/70">
            {objective.code}
          </p>
          <p className="font-ui text-base font-semibold uppercase tracking-wide text-lcars-cream">
            Objective {objective.id.toUpperCase()} — {objective.title}
          </p>
        </div>
      </div>
      <dl className="mt-4 space-y-2 text-xs sm:text-sm">
        <Row label="Target" value={objective.target} />
        <Row label="Measure" value={objective.measure} />
        <Row label="Deadline" value={objective.deadline} />
        <Row label="Source of Evidence" value={objective.evidence} />
      </dl>
    </Panel>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-l border-lcars-orange/30 pl-3 sm:grid-cols-[140px_1fr] sm:gap-3">
      <dt className="font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/80">{label}</dt>
      <dd className="text-lcars-ice/85">{value}</dd>
    </div>
  );
}

function ProgressDashboard() {
  return (
    <Panel className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="label-md">Pilot Status Dashboard</p>
        <span className="chip border-lcars-amber/40 text-lcars-amber">Status: Planned</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {OBJECTIVES.map((o) => (
          <div key={o.id} className="rounded border border-space-500/60 bg-space-700/40 p-3">
            <p className="font-mono-tech text-[9px] uppercase tracking-wider text-lcars-amber/70">
              {o.code}
            </p>
            <p className="mt-1 font-ui text-xs uppercase tracking-wide text-lcars-cream">{o.title}</p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-space-600">
              <div className="h-full w-0 bg-gradient-to-r from-lcars-orange to-lcars-amber" />
            </div>
            <p className="mt-2 font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/70">
              0% · Not yet launched
            </p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-lcars-ice/60">
        All objectives are displayed as PLANNED. No progress percentages are shown because this is a
        research proposal, not an active or completed pilot.
      </p>
    </Panel>
  );
}
