import Lenis from "lenis";
import { useEffect } from "react";
import CMESection from "./components/CMESection";
import FirstSection from "./components/FirstSection";
import FounderLetter from "./components/FounderLetter";
import ManifestSection from "./components/ManifestSection";
import KnowledgeSection from "./components/KnowledgeSection";
import BejaHouseSection from "./components/BejaHouseSection";
import RebrandingSection from "./components/RebrandingSection";
import ChangeTheorySection from "./components/ChangeTheorySection";
import StrategicPillarSection from "./components/StrategicPillarSection";
import { InteractionEcosystem } from "./components/InteractionEcosystem";
import AdvocacySection from "./components/AdvocacySection/AdvocacySection";
import MissionValueSection from "./components/MIssionValueSection/MissionValueSection";
import PhilanthropySection from "./components/PhilanthropySection/PhilanthropySection";
import { PortfolioSection } from "./components/PortfolioSection";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      smoothTouch: false,
      syncTouch: true,
      syncTouchLerp: 0.1,
      round: true,
    });

    const handleAnimationFrame = (time) => {
      lenis.raf(time);
    };

    const animationFrameId = requestAnimationFrame(function loop(time) {
      handleAnimationFrame(time);
      requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <FirstSection />
      <FounderLetter />
      <RebrandingSection />
      <ManifestSection />
      <MissionValueSection />
      <BejaHouseSection />
      <ChangeTheorySection />
      <StrategicPillarSection />
      <InteractionEcosystem />
      <CMESection />
      <AdvocacySection />
      <KnowledgeSection />
      <PortfolioSection />
      <PhilanthropySection />
    </>
  );
};

export default App;
