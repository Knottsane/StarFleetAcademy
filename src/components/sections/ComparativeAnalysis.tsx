import { useState } from 'react';
import { Flag, Landmark, Columns2 } from 'lucide-react';
import { Section } from '@/components/Section';
import { Panel } from '@/components/Panel';
import { SourceNote } from '@/components/SourceNote';
import { SOURCES } from '@/data/sources';

interface Side {
  id: string;
  name: string;
  code: string;
  icon: typeof Flag;
  status: string;
  body: string[];
  sources: { source: typeof SOURCES.ipophl; label: string }[];
}

const SIDES: Side[] = [
  {
    id: 'ph',
    name: 'Philippines',
    code: 'Region: PH',
    icon: Flag,
    status: 'Draft Guidance',
    body: [
      'The Intellectual Property Office of the Philippines (IPOPHL) has issued draft guidelines that place human creativity at the center of copyright registration for AI-related works.',
      'The draft guidance emphasizes the importance of human creative contribution in determining whether an AI-assisted work qualifies for copyright protection.',
      'This is draft guidance rather than a finalized legal requirement. It signals IPOPHL’s direction but should not be presented as settled law.',
    ],
    sources: [{ source: SOURCES.ipophl, label: 'IPOPHL Draft Guidelines' }],
  },
  {
    id: 'us',
    name: 'United States',
    code: 'Region: US',
    icon: Landmark,
    status: 'Office Report',
    body: [
      'The U.S. Copyright Office has analyzed copyright protection for AI-assisted works and released parts of its Artificial Intelligence Report, including Part 2 in early 2025.',
      'The Office’s analysis emphasizes the importance of sufficient human-authored expression for copyright protection, distinguishing works where a human made creative choices from those that are purely AI-generated.',
      'These are Office analyses and guidance materials, not identical in framework to IPOPHL’s approach. The two systems operate under their own legal traditions.',
    ],
    sources: [
      { source: SOURCES.uscoPart2, label: 'USCO Part 2 (2025)' },
      { source: SOURCES.uscoAI, label: 'USCO · AI Page' },
    ],
  },
];

interface Row {
  topic: string;
  ph: string;
  us: string;
}

const COMPARISON: Row[] = [
  {
    topic: 'Human creative contribution',
    ph: 'IPOPHL draft guidance centers human creativity in AI-related copyright registration.',
    us: 'USCO analysis requires sufficient human-authored expression for protection.',
  },
  {
    topic: 'AI-assisted vs AI-generated work',
    ph: 'Distinguishes works with meaningful human contribution from purely AI-generated output.',
    us: 'Distinguishes works involving human creative choices from those lacking human authorship.',
  },
  {
    topic: 'Copyright & authorship',
    ph: 'Under review through draft guidelines; not yet finalized legal requirements.',
    us: 'Addressed through Office reports and existing copyright law interpretation.',
  },
  {
    topic: 'Transparency, consent, compensation',
    ph: 'Emerging concerns; addressed in broader policy discussions.',
    us: 'Addressed across multiple parts of the Copyright Office AI Report.',
  },
];

export function ComparativeAnalysis() {
  const [active, setActive] = useState<'ph' | 'us'>('ph');

  return (
    <Section
      id="comparative"
      eyebrow="Section 03"
      title="Comparative Policy Analysis"
      code="SFD-01 · POL"
    >
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-lcars-ice/80 sm:text-[15px]">
        Two research panels compare the Philippines and the United States. Each operates under its
        own legal framework, and their approaches should not be treated as identical. Sources are
        linked below each panel, and existing guidance is distinguished from draft proposals.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {SIDES.map((s) => (
          <Panel key={s.id} variant="lcars" scan>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-lcars-orange/40 bg-space-700 text-lcars-orange">
                  <s.icon size={22} />
                </span>
                <div>
                  <p className="font-mono-tech text-[9px] uppercase tracking-wider text-lcars-amber/70">
                    {s.code}
                  </p>
                  <p className="font-display text-xl font-bold uppercase tracking-wide text-lcars-cream">
                    {s.name}
                  </p>
                </div>
              </div>
              <span className="chip border-lcars-cyan/40 text-lcars-cyan">{s.status}</span>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-lcars-ice/85">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
              {s.sources.map(({ source, label }) => (
                <SourceNote key={label} source={source} label={label} />
              ))}
            </div>
          </Panel>
        ))}
      </div>

      {/* Comparison table */}
      <Panel className="mt-6 overflow-hidden">
        <div className="mb-4 flex items-center gap-2">
          <Columns2 size={16} className="text-lcars-cyan" />
          <p className="label-md">Comparison Matrix</p>
        </div>

        {/* Mobile tab toggle */}
        <div className="mb-3 flex gap-2 lg:hidden">
          {(['ph', 'us'] as const).map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`flex-1 rounded border px-3 py-2 font-ui text-xs uppercase tracking-wider transition-colors ${
                active === k
                  ? 'border-lcars-orange bg-lcars-orange/15 text-lcars-orange'
                  : 'border-space-500 text-lcars-ice/70'
              }`}
              aria-pressed={active === k}
            >
              {k === 'ph' ? 'Philippines' : 'United States'}
            </button>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-lcars-orange/30">
                <th className="p-3 font-ui text-xs uppercase tracking-wider text-lcars-amber">Dimension</th>
                <th className="p-3 font-ui text-xs uppercase tracking-wider text-lcars-amber">Philippines</th>
                <th className="p-3 font-ui text-xs uppercase tracking-wider text-lcars-amber">United States</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={row.topic} className={i % 2 === 0 ? 'bg-space-700/30' : ''}>
                  <td className="p-3 font-ui text-xs uppercase tracking-wide text-lcars-cream">{row.topic}</td>
                  <td className="p-3 text-lcars-ice/80">{row.ph}</td>
                  <td className="p-3 text-lcars-ice/80">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="grid gap-3 lg:hidden">
          {COMPARISON.map((row) => (
            <div key={row.topic} className="rounded border border-space-500/60 bg-space-700/30 p-3">
              <p className="mb-2 font-ui text-xs uppercase tracking-wide text-lcars-cream">{row.topic}</p>
              <p className="text-xs text-lcars-ice/80">
                <span className="font-mono-tech text-[9px] uppercase text-lcars-amber/60">
                  {active === 'ph' ? 'PH' : 'US'} ·{' '}
                </span>
                {active === 'ph' ? row.ph : row.us}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs text-lcars-ice/60">
          These are distinct legal frameworks. IPOPHL materials referenced here are draft guidelines;
          U.S. materials are Copyright Office reports and existing law. See linked sources for
          authoritative detail.
        </p>
      </Panel>
    </Section>
  );
}
