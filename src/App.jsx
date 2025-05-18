import gsap from "gsap";
import Lenis from "lenis";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BejaLabs from "./components/BejaLabs/BejaLabs";
import {
  Footer,
  CMESection,
  Expediente,
  BalancoTable,
  FirstSection,
  FinalSection,
  FounderLetter,
  ManifestSection,
  AdvocacySection,
  KnowledgeSection,
  BejaHouseSection,
  RebrandingSection,
  PhilanthropySection,
  MissionValueSection,
  ChangeTheorySection,
  InteractionEcosystem,
  StrategicPillarSection,
  FoundLetterToContextTransition,
} from "./components/Index";
import "./config/i18n";
import { GlobalStorage } from "./context/GlobalContext";
import ScrollDotsNav from "./components/ScrollDotsNav";

const App = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();

    const handleAnimationFrame = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleAnimationFrame);
    };

    const animationFrameId = requestAnimationFrame(handleAnimationFrame);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <GlobalStorage>
      <ScrollDotsNav />
      <div id="first-section"><FirstSection /></div>
      <div id="founder-letter"><FounderLetter /></div>
      <div id="found-letter-to-context-transition"><FoundLetterToContextTransition /></div>
      <div id="rebranding-section"><RebrandingSection /></div>
      <div id="manifest-section"><ManifestSection /></div>
      <div id="mission-value-section"><MissionValueSection /></div>
      <div id="beja-house-section"><BejaHouseSection /></div>
      <div id="change-theory-section"><ChangeTheorySection /></div>
      <div id="strategic-pillar-section"><StrategicPillarSection /></div>
      <div id="interaction-ecosystem"><InteractionEcosystem /></div>
      <div id="cme-section"><CMESection /></div>
      <div id="advocacy-section"><AdvocacySection /></div>
      <div id="knowledge-section"><KnowledgeSection /></div>
      <div id="beja-labs"><BejaLabs /></div>
      <div id="philanthropy-section"><PhilanthropySection /></div>
      <div id="final-section"><FinalSection /></div>
      <div id="balanco-table"><BalancoTable /></div>
      <div id="expediente"><Expediente /></div>
      <div id="footer"><Footer /></div>
    </GlobalStorage>
  );
};

export default App;
