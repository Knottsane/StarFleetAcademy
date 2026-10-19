import type { ReactNode } from 'react';

interface PanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'lcars';
  scan?: boolean;
}

export function Panel({ children, className = '', variant = 'default', scan = false }: PanelProps) {
  const base =
    variant === 'lcars'
      ? 'panel-lcars glow-border'
      : 'panel border-space-500/60';
  return (
    <div className={`relative overflow-hidden p-5 sm:p-6 ${base} ${scan ? 'scanlines' : ''} ${className}`}>
      {scan && <div className="scan-line" aria-hidden />}
      {children}
    </div>
  );
}
