import { useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { MissionProgress } from '@/components/MissionProgress';
import { Hero } from '@/components/Hero';
import { MissionBriefing } from '@/components/sections/MissionBriefing';
import { CrewImpact } from '@/components/sections/CrewImpact';
import { ComparativeAnalysis } from '@/components/sections/ComparativeAnalysis';
import { SolutionLab } from '@/components/sections/SolutionLab';
import { PrimeDirective } from '@/components/sections/PrimeDirective';
import { SuccessMetrics } from '@/components/sections/SuccessMetrics';
import { Roadmap } from '@/components/sections/Roadmap';
import { ResearchArchive } from '@/components/sections/ResearchArchive';
import { FinalTransmission } from '@/components/sections/FinalTransmission';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function App() {
  const { reduced, toggle } = useReducedMotion();

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="relative min-h-screen bg-space-900 text-lcars-ice">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(27,45,99,0.5), transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(255,153,51,0.06), transparent 50%)',
          }}
        />
      </div>

      <Navbar reduced={reduced} onToggleMotion={toggle} />
      <MissionProgress />

      <main className="relative z-10">
        <Hero onStart={() => scrollTo('briefing')} onDatabase={() => scrollTo('archive')} />
        <MissionBriefing />
        <CrewImpact />
        <ComparativeAnalysis />
        <SolutionLab />
        <PrimeDirective />
        <SuccessMetrics />
        <Roadmap />
        <ResearchArchive />
        <FinalTransmission onReturnToBriefing={() => scrollTo('briefing')} />
      </main>
    </div>
  );
}

export default App;
