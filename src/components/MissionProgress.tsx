import { useEffect, useState } from 'react';

export function MissionProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 hidden flex-col items-end gap-1 sm:flex">
      <div className="rounded-md border border-lcars-orange/30 bg-space-900/80 px-3 py-1.5 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono-tech text-[9px] uppercase tracking-wider text-lcars-amber/80">
            Mission Progress
          </span>
          <span className="font-mono-tech text-[10px] text-lcars-cyan">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="mt-1 h-1 w-36 overflow-hidden rounded-full bg-space-600">
          <div
            className="h-full bg-gradient-to-r from-lcars-orange to-lcars-amber transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
