import { ChevronRight, Database, Radio } from 'lucide-react';
import { Starfield } from '@/components/Starfield';

interface HeroProps {
  onStart: () => void;
  onDatabase: () => void;
}

export function Hero({ onStart, onDatabase }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-24 text-center sm:px-6"
    >
      <Starfield density={140} />

      {/* Distant nebula */}
      <div
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(102,217,239,0.25), rgba(27,45,99,0.4) 40%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Grid floor */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 grid-floor opacity-30 [mask-image:linear-gradient(to_top,black,transparent)]" aria-hidden />

      {/* Holographic planet + starship */}
      <StarshipAndPlanet />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <span className="chip">
            <Radio size={10} /> Starfleet Science Division
          </span>
          <span className="chip">Research File: AI &amp; Human Creativity</span>
        </div>

        <p className="mb-3 font-ui uppercase tracking-[0.5em] text-[11px] text-lcars-amber/80 sm:text-xs">
          Directive 01 · Preserve Human Creative Agency
        </p>

        <h1 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-lcars-cream sm:text-6xl md:text-7xl">
          The Future of
          <span className="block bg-gradient-to-r from-lcars-orange via-lcars-amber to-lcars-gold bg-clip-text text-transparent">
            Creativity
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-lcars-ice/80 sm:text-base">
          Artificial intelligence is transforming how humanity creates. The question is no longer
          whether we can use it, but how we can use it responsibly — without sacrificing the people,
          experiences, and original expression that make creativity meaningful.
        </p>

        <p className="mx-auto mt-4 max-w-xl font-ui text-sm italic text-lcars-amber/80">
          “Technology should expand human potential, not erase the people behind it.”
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={onStart} className="btn-primary">
            <ChevronRight size={18} /> Initiate Mission
          </button>
          <button onClick={onDatabase} className="btn-ghost">
            <Database size={18} /> Access Research Database
          </button>
        </div>

        {/* Status indicators */}
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-2 text-left">
          <StatusItem label="Link" value="Stable" tone="ok" />
          <StatusItem label="Sector" value="Creative Industries" tone="info" />
          <StatusItem label="Directive" value="Active" tone="warn" />
        </div>

        {/* Mission briefing teaser */}
        <div className="mx-auto mt-8 max-w-2xl rounded-md border border-space-500/60 bg-space-800/60 p-4 text-left backdrop-blur-sm">
          <p className="label-sm mb-2">Mission Briefing · SFD-01</p>
          <p className="text-xs leading-relaxed text-lcars-ice/70 sm:text-sm">
            This investigation explores generative AI’s impact on artists, creative employment,
            copyright, and the future of human expression — with attention to the Philippines and
            the wider international landscape.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-lcars-cyan/60 animate-float" aria-hidden>
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono-tech text-[9px] uppercase tracking-widest">Scroll to engage</span>
          <div className="h-6 w-px bg-gradient-to-b from-lcars-cyan/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function StatusItem({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: 'ok' | 'info' | 'warn';
}) {
  const color =
    tone === 'ok' ? 'bg-accent-ok' : tone === 'warn' ? 'bg-lcars-amber' : 'bg-lcars-cyan';
  return (
    <div className="rounded border border-space-500/50 bg-space-800/60 px-3 py-2">
      <div className="flex items-center gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${color} animate-blink`} aria-hidden />
        <span className="font-mono-tech text-[9px] uppercase tracking-wider text-lcars-amber/70">
          {label}
        </span>
      </div>
      <p className="mt-0.5 font-ui text-xs text-lcars-cream">{value}</p>
    </div>
  );
}

function StarshipAndPlanet() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
      {/* Planet */}
      <div className="absolute right-[8%] top-[18%] h-40 w-40 rounded-full holo-planet animate-float sm:h-56 sm:w-56 md:h-64 md:w-64">
        <div className="absolute inset-0 rounded-full border border-lcars-cyan/20" />
        <div className="absolute -inset-3 rounded-full border border-lcars-cyan/10 animate-pulseRing" />
      </div>

      {/* Starship silhouette - original CSS composition */}
      <div className="starship-silhouette absolute left-[6%] bottom-[20%] h-24 w-64 sm:h-32 sm:w-80 md:h-40 md:w-96">
        <svg
          viewBox="0 0 400 120"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hull" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#cfe8ff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#1b2d63" stopOpacity="0.6" />
            </linearGradient>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#66d9ef" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#66d9ef" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Saucer */}
          <ellipse cx="150" cy="60" rx="95" ry="20" fill="url(#hull)" stroke="#66d9ef" strokeOpacity="0.5" />
          <ellipse cx="150" cy="58" rx="70" ry="10" fill="#0e1733" stroke="#66d9ef" strokeOpacity="0.4" />
          {/* Engineering hull */}
          <path d="M150 60 L320 50 L340 60 L320 70 Z" fill="url(#hull)" stroke="#66d9ef" strokeOpacity="0.5" />
          {/* Nacelles */}
          <rect x="200" y="20" width="120" height="10" rx="5" fill="url(#hull)" stroke="#66d9ef" strokeOpacity="0.5" />
          <rect x="200" y="90" width="120" height="10" rx="5" fill="url(#hull)" stroke="#66d9ef" strokeOpacity="0.5" />
          <line x1="170" y1="25" x2="200" y2="25" stroke="#66d9ef" strokeOpacity="0.4" />
          <line x1="170" y1="95" x2="200" y2="95" stroke="#66d9ef" strokeOpacity="0.4" />
          {/* Glow at engines */}
          <circle cx="338" cy="60" r="14" fill="url(#glow)" />
          <circle cx="318" cy="25" r="8" fill="url(#glow)" />
          <circle cx="318" cy="95" r="8" fill="url(#glow)" />
        </svg>
      </div>

      {/* Warp streaks */}
      <div className="absolute left-[20%] top-[55%] w-40">
        <span className="warp-streak" style={{ width: '60%', animationDelay: '0.2s' }} />
        <span className="warp-streak" style={{ width: '40%', top: '8px', animationDelay: '0.6s' }} />
        <span className="warp-streak" style={{ width: '80%', top: '16px', animationDelay: '1.1s' }} />
      </div>
    </div>
  );
}
