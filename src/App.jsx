import gsap from "gsap";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import { useEffect, lazy } from "react";
import balance from "./data/balance.json";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BejaLabs from "./components/BejaLabs/BejaLabs";
import FirstSection from "./components/FirstSection/FirstSection";

const Footer = lazy(() => import("./components/Footer/Footer"));
const CMESection = lazy(() => import("./components/CMe/CMESection"));
const Expediente = lazy(() => import("./components/Expediente/Expediente"));
const BalancoTable = lazy(() => import("./components/Balance/Balance"));
const FounderLetter = lazy(
  () => import("./components/FounderLetter/FounderLetter"),
);
const ManifestSection = lazy(
  () => import("./components/Manifest/ManifestSection"),
);
const BejaHouseSection = lazy(
  () => import("./components/BejaHouse/BejaHouseSection"),
);
const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const KnowledgeSection = lazy(
  () => import("./components/Knowledge/KnowledgeSection"),
);
const RebrandingSection = lazy(
  () => import("./components/Rebranding/RebrandingSection"),
);

const InteractionEcosystem = lazy(
  () => import("./components/InteractionEcosystem"),
);
const ChangeTheorySection = lazy(
  () => import("./components/ChangeTheory/ChangeTheorySection"),
);
const StrategicPillarSection = lazy(
  () => import("./components/StrategicPillar/StrategicPillarSection"),
);
const MissionValueSection = lazy(
  () => import("./components/MissionValue/MissionValueSection"),
);
const PhilanthropySection = lazy(
  () => import("./components/Philanthropy/PhilanthropySection"),
);
const AdvocacySection = lazy(
  () => import("./components/Advocacy/AdvocacySection"),
);
const FinalSection = lazy(
  () => import("./components/FinalSection/FinalSection"),
);
import { FoundLetterToContextTransition } from "./components/FounderLetter/FoundLetterToContextTransition";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const App = () => {
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
    <>
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
      <BalancoTable data={balance} />
      <Expediente />
      <Footer />
    </>
  );
};

export default App;
