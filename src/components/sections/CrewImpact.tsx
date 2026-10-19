import { useState } from 'react';
import { Users, Briefcase, Code2, Landmark, Globe2, ChevronDown } from 'lucide-react';
import { Section } from '@/components/Section';
import { Panel } from '@/components/Panel';
import { SourceNote } from '@/components/SourceNote';
import { SOURCES } from '@/data/sources';

interface Stakeholder {
  id: string;
  name: string;
  code: string;
  icon: typeof Users;
  role: string;
  interests: string[];
  concerns: string[];
  recommendations: string[];
  sources?: { source: typeof SOURCES.ilo2025; label: string }[];
}

const STAKEHOLDERS: Stakeholder[] = [
  {
    id: 'artists',
    name: 'Artists & Creative Workers',
    code: 'Crew-A',
    icon: Users,
    role: 'Primary crew directly affected by AI adoption.',
    interests: [
      'Creative control and artistic integrity',
      'Livelihood and stable income',
      'Recognition and attribution',
      'Fair compensation',
      'Consent over how their work is used',
    ],
    concerns: [
      'Displacement of creative work',
      'Use of their work in AI training without consent',
      'Loss of attribution and uniqueness',
    ],
    recommendations: [
      'AI literacy and reskilling opportunities',
      'Clear consent and licensing mechanisms',
      'Transparent attribution practices',
    ],
    sources: [{ source: SOURCES.ilo2025, label: 'ILO · Media & Culture' }],
  },
  {
    id: 'employers',
    name: 'Creative Employers & Agencies',
    code: 'Crew-B',
    icon: Briefcase,
    role: 'Organizations that commission and produce creative work.',
    interests: [
      'Productivity and efficiency',
      'Lower production costs',
      'Innovation and new creative services',
      'Competitiveness in global markets',
    ],
    concerns: [
      'Balancing cost savings with quality',
      'Legal risk around AI-generated content',
      'Reputational impact of unethical AI use',
    ],
    recommendations: [
      'Adopt responsible AI-use policies',
      'Invest in workforce upskilling',
      'Maintain human oversight of creative outputs',
    ],
  },
  {
    id: 'developers',
    name: 'AI Developers & Platforms',
    code: 'Crew-C',
    icon: Code2,
    role: 'Organizations building and deploying generative AI tools.',
    interests: [
      'Developing useful and capable tools',
      'Determining how systems are trained',
      'Product growth and adoption',
    ],
    concerns: [
      'Transparency and licensing expectations',
      'Legal exposure from training data',
      'Trust and safety of generated outputs',
    ],
    recommendations: [
      'Disclose training data sources where feasible',
      'Offer opt-out and licensing mechanisms',
      'Provide clear labeling of AI-generated content',
    ],
    sources: [{ source: SOURCES.wipo, label: 'WIPO & AI' }],
  },
  {
    id: 'policymakers',
    name: 'Policymakers & Copyright Offices',
    code: 'Crew-D',
    icon: Landmark,
    role: 'Government bodies shaping rules for AI and creativity.',
    interests: [
      'Protecting human creative expression',
      'Developing workable approaches to new technology',
      'Balancing innovation and rights',
    ],
    concerns: [
      'Defining authorship and human contribution',
      'Keeping regulation aligned with rapid change',
      'Cross-border consistency',
    ],
    recommendations: [
      'Clarify human authorship requirements',
      'Issue guidance on disclosure and transparency',
      'Review frameworks as technology evolves',
    ],
    sources: [
      { source: SOURCES.ipophl, label: 'IPOPHL' },
      { source: SOURCES.uscoAI, label: 'USCO' },
    ],
  },
  {
    id: 'international',
    name: 'International Organizations',
    code: 'Crew-E',
    icon: Globe2,
    role: 'Bodies guiding global norms on labour, culture, and IP.',
    interests: [
      'Worker protection and decent work',
      'Cultural diversity and artistic livelihoods',
      'Balanced intellectual property frameworks',
    ],
    concerns: [
      'Uneven impact across countries',
      'Protecting cultural expression',
      'Coordinated international guidance',
    ],
    recommendations: [
      'Support reskilling for affected workers',
      'Promote transparency and ethical AI use',
      'Encourage international cooperation',
    ],
    sources: [
      { source: SOURCES.iloJobs2025, label: 'ILO · Jobs 2025' },
      { source: SOURCES.unescoAI, label: 'UNESCO · AI & Culture' },
      { source: SOURCES.wipo, label: 'WIPO' },
    ],
  },
];

export function CrewImpact() {
  return (
    <Section
      id="crew"
      eyebrow="Section 02"
      title="Crew Impact Assessment"
      code="SFD-01 · CREW"
    >
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-lcars-ice/80 sm:text-[15px]">
        Different stakeholders have different interests and responsibilities. Many can benefit from
        AI while also facing distinct risks. A balanced approach recognizes these perspectives rather
        than treating any single group as the whole story.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {STAKEHOLDERS.map((s) => (
          <StakeholderCard key={s.id} stakeholder={s} />
        ))}
      </div>
    </Section>
  );
}

function StakeholderCard({ stakeholder }: { stakeholder: Stakeholder }) {
  const [open, setOpen] = useState(false);
  const Icon = stakeholder.icon;
  return (
    <Panel className="flex h-full flex-col">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-3 text-left"
        aria-expanded={open}
        aria-controls={`stk-${stakeholder.id}`}
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-lcars-orange/40 bg-space-700 text-lcars-orange">
          <Icon size={20} />
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono-tech text-[9px] uppercase tracking-wider text-lcars-amber/70">
              {stakeholder.code}
            </p>
            <ChevronDown
              size={16}
              className={`text-lcars-cyan transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </div>
          <p className="font-ui text-sm font-semibold uppercase leading-snug tracking-wide text-lcars-cream">
            {stakeholder.name}
          </p>
          <p className="mt-1 text-xs text-lcars-ice/65">{stakeholder.role}</p>
        </div>
      </button>

      <div
        id={`stk-${stakeholder.id}`}
        className={`grid transition-all duration-300 ${open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden space-y-3 text-xs sm:text-sm">
          <SubList label="Interests" items={stakeholder.interests} tone="cyan" />
          <SubList label="Concerns" items={stakeholder.concerns} tone="warn" />
          <SubList label="Possible Recommendations" items={stakeholder.recommendations} tone="ok" />
          {stakeholder.sources && (
            <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
              {stakeholder.sources.map(({ source, label }) => (
                <SourceNote key={label} source={source} label={label} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Panel>
  );
}

function SubList({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: 'cyan' | 'warn' | 'ok';
}) {
  const color =
    tone === 'ok' ? 'text-accent-ok' : tone === 'warn' ? 'text-lcars-amber' : 'text-lcars-cyan';
  return (
    <div>
      <p className={`mb-1 font-mono-tech text-[10px] uppercase tracking-wider ${color}`}>{label}</p>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it} className="flex gap-2 text-lcars-ice/80">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${color}`} aria-hidden />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
