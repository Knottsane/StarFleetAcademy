import { useState } from 'react';
import { ExternalLink, Search, FileText, ShieldCheck } from 'lucide-react';
import { Section } from '@/components/Section';
import { Panel } from '@/components/Panel';
import { SOURCE_LIST } from '@/data/sources';

export function ResearchArchive() {
  const [query, setQuery] = useState('');
  const filtered = SOURCE_LIST.filter((s) =>
    `${s.cite} ${s.note}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <Section
      id="archive"
      eyebrow="Section 08"
      title="Starfleet Research Archive"
      code="SFD-01 · REF"
    >
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-lcars-ice/80 sm:text-[15px]">
        Reference library. Each card opens the original source in a new tab. No findings, dates, or
        statistics beyond those appearing in the cited works have been added.
      </p>

      <div className="mb-6 flex items-center gap-3 rounded-md border border-space-500/60 bg-space-800/70 px-3 py-2">
        <Search size={16} className="text-lcars-cyan" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search archive…"
          aria-label="Search references"
          className="w-full bg-transparent font-ui text-sm text-lcars-cream placeholder:text-lcars-ice/40 focus:outline-none"
        />
        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/70">
          {filtered.length} / {SOURCE_LIST.length}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((s, i) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Panel className="h-full transition-all group-hover:border-lcars-orange/60 group-hover:shadow-lcars">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-lcars-orange/40 bg-space-700 text-lcars-orange">
                  <FileText size={18} />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/70">
                      Ref {String(i + 1).padStart(2, '0')} · {s.id.toUpperCase()}
                    </p>
                    <ExternalLink size={14} className="text-lcars-cyan opacity-60 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-lcars-ice/90">{s.cite}</p>
                  <p className="mt-2 flex items-center gap-1.5 font-mono-tech text-[10px] uppercase tracking-wider text-lcars-cyan/70">
                    <ShieldCheck size={12} /> {s.note}
                  </p>
                </div>
              </div>
            </Panel>
          </a>
        ))}
        {filtered.length === 0 && (
          <Panel className="md:col-span-2">
            <p className="text-sm text-lcars-ice/70">No references match “{query}”.</p>
          </Panel>
        )}
      </div>
    </Section>
  );
}
