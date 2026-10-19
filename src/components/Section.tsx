import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  code?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, code, children, className = '' }: SectionProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28 ${className}`}
    >
      <div
        ref={ref}
        className={`transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      >
        <div className="mb-10 flex flex-col gap-3 border-l-2 border-lcars-orange/60 pl-4 sm:pl-6">
          <div className="flex items-center gap-3">
            <span className="section-eyebrow">{eyebrow}</span>
            {code && <span className="chip">{code}</span>}
          </div>
          <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-wide text-lcars-cream sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <div className="mt-1 h-px w-24 bg-gradient-to-r from-lcars-orange to-transparent" />
        </div>
        {children}
      </div>
    </section>
  );
}
