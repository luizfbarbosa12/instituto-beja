import Lenis from "lenis";
import { useEffect, lazy } from "react";
import FirstSection from "./components/FirstSection";
import balance from "./data/balance.json";
import CMESection from "./components/CMESection";

const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const InteractionEcosystem = lazy(
  () => import("./components/InteractionEcosystem"),
);
const ChangeTheorySection = lazy(
  () => import("./components/ChangeTheorySection"),
);
// const CMESection = lazy(() => import("./components/CMESection"));
const BejaHouseSection = lazy(() => import("./components/BejaHouseSection"));
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
const BalancoTable = lazy(() => import("./components/Balance/Balance"));
const Expediente = lazy(() => import("./components/Expediente/Expediente"));
const FounderLetter = lazy(() => import("./components/FounderLetter"));
const RebrandingSection = lazy(() => import("./components/RebrandingSection"));
const ManifestSection = lazy(() => import("./components/ManifestSection"));
const KnowledgeSection = lazy(() => import("./components/KnowledgeSection"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.5,
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
      <FinalSection />
      <BalancoTable data={balance} />
      <Expediente />
      <Footer />
    </>
  );
};

export default App;
