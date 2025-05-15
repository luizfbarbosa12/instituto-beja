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
      <FirstSection />
      <FounderLetter />
      <FoundLetterToContextTransition />
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
      <BejaLabs />
      <PhilanthropySection />
      <FinalSection />
      <BalancoTable />
      <Expediente />
      <Footer />
    </GlobalStorage>
  );
};

export default App;
