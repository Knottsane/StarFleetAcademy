import { useMemo } from 'react';

interface StarfieldProps {
  density?: number;
  className?: string;
}

export function Starfield({ density = 90, className = '' }: StarfieldProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: density }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.6,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.6,
      })),
    [density]
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
