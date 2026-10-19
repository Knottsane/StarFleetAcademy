import type { Source } from '@/data/sources';

interface SourceNoteProps {
  source: Source;
  label?: string;
}

export function SourceNote({ source, label }: SourceNoteProps) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-mono-tech text-[10px] uppercase tracking-wider text-lcars-cyan/80 transition-colors hover:text-lcars-cyan"
      aria-label={`Source: ${source.note} (opens in a new tab)`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-lcars-cyan/70" aria-hidden />
      {label ?? `SRC ${source.id.toUpperCase()}`}
    </a>
  );
}
