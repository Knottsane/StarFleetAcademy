import { useEffect, useState } from 'react';
import { Menu, X, Rocket, Gauge } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

interface NavItem {
  id: string;
  label: string;
  code: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Terminal', code: '00' },
  { id: 'briefing', label: 'Briefing', code: '01' },
  { id: 'crew', label: 'Crew Impact', code: '02' },
  { id: 'comparative', label: 'Policy', code: '03' },
  { id: 'solutions', label: 'Solutions', code: '04' },
  { id: 'directive', label: 'Directive', code: '05' },
  { id: 'metrics', label: 'Metrics', code: '06' },
  { id: 'roadmap', label: 'Roadmap', code: '07' },
  { id: 'archive', label: 'Archive', code: '08' },
  { id: 'final', label: 'Final', code: '09' },
];

interface NavbarProps {
  reduced: boolean;
  onToggleMotion: () => void;
}

export function Navbar({ reduced, onToggleMotion }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-space-900/95 backdrop-blur-md shadow-deep' : 'bg-transparent'
      }`}
    >
      <div className="h-1 w-full lcars-bar" aria-hidden />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={() => handleNav('hero')}
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-lcars-cyan rounded"
          aria-label="Return to terminal start"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md border border-lcars-orange/50 bg-space-700 text-lcars-orange transition-all group-hover:bg-lcars-orange group-hover:text-space-900">
            <Rocket size={18} />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-lcars-cream">
              Starfleet Directive 01
            </span>
            <span className="font-mono-tech text-[10px] uppercase tracking-wider text-lcars-amber/70">
              Science Division · File SFD-01
            </span>
          </span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleMotion}
            className="hidden items-center gap-2 rounded-md border border-lcars-cyan/30 px-3 py-2 font-mono-tech text-[10px] uppercase tracking-wider text-lcars-cyan/80 transition-colors hover:border-lcars-cyan hover:text-lcars-cyan sm:inline-flex"
            aria-pressed={reduced}
            aria-label="Toggle reduced motion"
          >
            <Gauge size={14} />
            {reduced ? 'Motion: Off' : 'Motion: On'}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-lcars-orange/40 p-2 text-lcars-orange transition-colors hover:bg-lcars-orange/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`group relative rounded px-2.5 py-2 font-ui text-xs uppercase tracking-[0.18em] transition-colors ${
                    active === item.id
                      ? 'text-lcars-orange'
                      : 'text-lcars-ice/70 hover:text-lcars-cream'
                  }`}
                  aria-current={active === item.id ? 'page' : undefined}
                >
                  <span className="font-mono-tech text-[9px] text-lcars-amber/50 group-hover:text-lcars-amber">
                    {item.code}
                  </span>
                  <span className="ml-1">{item.label}</span>
                  {active === item.id && (
                    <span className="absolute -bottom-0.5 left-2 right-2 h-px bg-lcars-orange shadow-[0_0_8px_rgba(255,153,51,0.8)]" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-lcars-orange/20 bg-space-900/98 backdrop-blur-md md:hidden"
        >
          <ul className="grid grid-cols-2 gap-1 px-4 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`flex w-full items-center gap-2 rounded px-3 py-2 text-left font-ui text-sm uppercase tracking-wider transition-colors ${
                    active === item.id
                      ? 'bg-lcars-orange/15 text-lcars-orange'
                      : 'text-lcars-ice/80 hover:bg-space-700/60'
                  }`}
                >
                  <span className="font-mono-tech text-[10px] text-lcars-amber/60">{item.code}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-3">
            <button
              onClick={onToggleMotion}
              className="inline-flex items-center gap-2 rounded-md border border-lcars-cyan/30 px-3 py-2 font-mono-tech text-[10px] uppercase tracking-wider text-lcars-cyan/80"
              aria-pressed={reduced}
            >
              <Gauge size={14} />
              {reduced ? 'Motion: Off' : 'Motion: On'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
