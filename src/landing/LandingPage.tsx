import { useEffect } from 'react';
import './landing.css';
import { LandingNav } from './Nav';
import { Hero } from './Hero';
import { ExitPaths, Flywheel, HowItWorks, StatsBand, TokensTable } from './Sections';
import { CTABand, FAQ, Footer, Parameters } from './Closing';

export function LandingPage() {
  useEffect(() => { document.title = 'Vaultera — Stake VARA. Stay liquid.'; }, []);
  return (
    <div id="top">
      <LandingNav />
      <main>
        <Hero />
        <StatsBand />
        <HowItWorks />
        <Flywheel />
        <TokensTable />
        <ExitPaths />
        <Parameters />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
