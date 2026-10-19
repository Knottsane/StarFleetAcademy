import { useState } from 'react';
import { TrendingUp, Globe, Scale, Cpu, FileText, ChevronDown } from 'lucide-react';
import { Section } from '@/components/Section';
import { Panel } from '@/components/Panel';
import { SourceNote } from '@/components/SourceNote';
import { SOURCES } from '@/data/sources';

interface Card {
  id: string;
  icon: typeof TrendingUp;
  title: string;
  code: string;
  body: string;
}

const CARDS: Card[] = [
  {
    id: 'economic',
    icon: TrendingUp,
    title: 'Economic Impact',
    code: 'ECO-01',
    body: 'Potential changes in employment, income, production costs, and demand for creative workers. ILO research notes that many creative and media tasks are exposed to generative AI automation or augmentation, though exposure is not the same as confirmed job loss.',
  },
  {
    id: 'cultural',
    icon: Globe,
    title: 'Cultural Impact',
    code: 'CUL-02',
    body: 'Questions about originality, cultural identity, artistic diversity, and human expression. Widespread generative tools may change how creative work is valued and who participates in cultural production.',
  },
  {
    id: 'legal',
    icon: Scale,
    title: 'Legal & Ethical Impact',
    code: 'LEG-03',
    body: 'Copyright, consent, attribution, transparency, and compensation. These issues affect whether creators can control how their work is used to train AI systems and how AI-assisted outputs are recognized.',
  },
  {
    id: 'tech',
    icon: Cpu,
    title: 'Technological Impact',
    code: 'TEC-04',
    body: 'Increasing use of generative AI in writing, visual art, music, film, and digital media. New tools can support editing, ideation, and production — but also raise concerns about quality, authenticity, and displacement.',
  },
];

export function MissionBriefing() {
  return (
    <Section
      id="briefing"
      eyebrow="Section 01"
      title="Mission Briefing: The Creative Industry"
      code="SFD-01 · BRIEF"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Panel variant="lcars" scan>
          <p className="label-md mb-3">Situation Report</p>
          <div className="space-y-4 text-sm leading-relaxed text-lcars-ice/85 sm:text-[15px]">
            <p>
              Generative AI can produce text, images, music, and other creative content. It can help
              artists brainstorm, edit, research, and complete repetitive tasks. At the same time,
              it raises concerns about job opportunities, income, copyright, consent, attribution,
              and the value of human-made work.
            </p>
            <p>
              This is a global issue. International organizations including the International Labour
              Organization, UNESCO, and WIPO are examining how AI affects creative work and cultural
              production worldwide.
            </p>
            <p>
              For the Philippines, the ILO reports that a significant share of employment in the
              country is exposed to potential automation or augmentation by generative AI — with
              creative and media work among the affected areas. The Intellectual Property Office of
              the Philippines has also begun examining how AI-related creative works should be
              treated under copyright law.
            </p>
            <p className="rounded border border-lcars-amber/20 bg-lcars-amber/5 p-3 text-xs text-lcars-amber/90">
              Note: Exposure to AI refers to tasks that could be affected by the technology. It is
              not equivalent to confirmed job loss, and actual outcomes depend on policy, training,
              adoption, and worker adaptation.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            <SourceNote source={SOURCES.ilo2025} label="ILO 2025 · Media & Culture" />
            <SourceNote source={SOURCES.iloPH} label="ILO · Philippines" />
            <SourceNote source={SOURCES.ipophl} label="IPOPHL" />
          </div>
        </Panel>

        <div className="grid gap-4 sm:grid-cols-2">
          {CARDS.map((c) => (
            <BriefingCard key={c.id} card={c} />
          ))}
        </div>
      </div>

      <EvidenceCard />
    </Section>
  );
}

function BriefingCard({ card }: { card: Card }) {
  const [open, setOpen] = useState(false);
  const Icon = card.icon;
  return (
    <Panel className="group h-full">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-3 text-left"
        aria-expanded={open}
        aria-controls={`brief-${card.id}`}
      >
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-lcars-orange/40 bg-space-700 text-lcars-orange">
            <Icon size={18} />
          </span>
          <div>
            <p className="font-mono-tech text-[9px] uppercase tracking-wider text-lcars-amber/70">
              {card.code}
            </p>
            <p className="font-ui text-sm font-semibold uppercase tracking-wide text-lcars-cream">
              {card.title}
            </p>
          </div>
        </div>
        <ChevronDown
          size={16}
          className={`mt-2 shrink-0 text-lcars-cyan transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={`brief-${card.id}`}
        className={`grid transition-all duration-300 ${open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <p className="overflow-hidden text-xs leading-relaxed text-lcars-ice/75 sm:text-sm">
          {card.body}
        </p>
      </div>
    </Panel>
  );
}

function EvidenceCard() {
  return (
    <div className="mt-6">
      <Panel variant="lcars" className="border-lcars-cyan/30">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-lcars-cyan/40 bg-space-700 text-lcars-cyan">
            <FileText size={22} />
          </span>
          <div className="flex-1">
            <p className="label-md text-lcars-cyan">Evidence Record</p>
            <p className="mt-1 font-ui text-base font-semibold text-lcars-cream">
              ILO (2025) — Generative AI and the Media and Culture Industry
            </p>
            <p className="mt-2 text-sm leading-relaxed text-lcars-ice/80">
              The International Labour Organization’s 2025 report examines how generative AI is
              affecting media and culture workers, including exposure of tasks, potential
              augmentation and automation, and policy implications. It frames exposure as potential
              impact rather than confirmed displacement.
            </p>
            <div className="mt-3">
              <a
                href={SOURCES.ilo2025.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FileText size={16} /> Open ILO Report (new tab)
              </a>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  );
}
