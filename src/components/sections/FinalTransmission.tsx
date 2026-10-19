import { ArrowUp, Rocket, Radio } from 'lucide-react';
import { Panel } from '@/components/Panel';
import { Starfield } from '@/components/Starfield';

interface FinalTransmissionProps {
  onReturnToBriefing: () => void;
}

export function FinalTransmission({ onReturnToBriefing }: FinalTransmissionProps) {
  return (
    <section
      id="final"
      className="relative overflow-hidden px-4 py-24 text-center sm:px-6 md:py-32"
    >
      <Starfield density={80} />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,153,51,0.25), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <span className="chip">
          <Radio size={10} /> Final Transmission · SFD-01
        </span>

        <h2 className="mt-6 font-display text-3xl font-black uppercase leading-tight tracking-tight text-lcars-cream sm:text-4xl md:text-5xl">
          The future is not humanity versus technology.
        </h2>
        <p className="mt-4 font-ui text-lg text-lcars-amber sm:text-xl">
          It is about deciding what kind of future we want to create together.
        </p>

        <div className="mx-auto mt-8 max-w-2xl text-left">
          <Panel variant="lcars" scan>
            <p className="text-sm leading-relaxed text-lcars-ice/85 sm:text-[15px]">
              Generative AI offers opportunities to improve creative workflows, but responsible
              integration must also consider the livelihoods, rights, and original contributions of
              human creators. Our recommendation is to combine human-centered AI literacy and
              reskilling with clear creative-industry policies and transparency, consent, and fair
              compensation practices.
            </p>
          </Panel>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-md border border-lcars-orange/40 bg-space-800/70 p-6 shadow-lcars">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-lcars-amber/80">
            Mission Directive
          </p>
          <p className="mt-2 font-display text-xl font-bold uppercase leading-snug tracking-wide text-lcars-cream sm:text-2xl">
            “Let innovation advance. Let human creativity remain at the center.”
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={onReturnToBriefing} className="btn-primary">
            <Rocket size={18} /> Return to Mission Briefing
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-ghost"
          >
            <ArrowUp size={18} /> Back to Terminal
          </button>
        </div>
      </div>

      <footer className="relative z-10 mx-auto mt-16 max-w-3xl border-t border-space-500/40 pt-6 text-center">
        <p className="font-mono-tech text-[10px] uppercase tracking-wider text-lcars-ice/50">
          Starfleet Directive 01 · Original fan-inspired academic project · Not affiliated with or
          endorsed by any official Star Trek rights holder.
        </p>
        <p className="mt-2 font-mono-tech text-[10px] uppercase tracking-wider text-lcars-ice/40">
          All research sources are cited and linked. No fabricated data, statistics, or quotations.
        </p>
      </footer>
    </section>
  );
}
