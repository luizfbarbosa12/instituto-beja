import gsap from "gsap";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import { useEffect, lazy } from "react";
import balance from "./data/balance.json";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FirstSection from "./components/FirstSection";
import { FoundLetterToContextTransition } from "./components/FoundLetterToContextTransition";
import BejaLabs from "./components/BejaLabs/BejaLabs";

const Footer = lazy(() => import("./components/Footer/Footer"));
const CMESection = lazy(() => import("./components/CMeSection/CMESection"));
const Expediente = lazy(() => import("./components/Expediente/Expediente"));
const BalancoTable = lazy(() => import("./components/Balance/Balance"));
const FounderLetter = lazy(() => import("./components/FounderLetter"));
const ManifestSection = lazy(() => import("./components/ManifestSection"));
const BejaHouseSection = lazy(() => import("./components/BejaHouseSection"));
const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const KnowledgeSection = lazy(() => import("./components/KnowledgeSection"));
const RebrandingSection = lazy(() => import("./components/RebrandingSection"));

const InteractionEcosystem = lazy(
  () => import("./components/InteractionEcosystem"),
);
const ChangeTheorySection = lazy(
  () => import("./components/ChangeTheorySection"),
);
const StrategicPillarSection = lazy(
  () => import("./components/StrategicPillarSection"),
);
const MissionValueSection = lazy(
  () => import("./components/MissionValueSection/MissionValueSection"),
);
const PhilanthropySection = lazy(
  () => import("./components/PhilanthropySection/PhilanthropySection"),
);
const AdvocacySection = lazy(
  () => import("./components/AdvocacySection/AdvocacySection"),
);
const FinalSection = lazy(
  () => import("./components/FinalSection/FinalSection"),
);

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
