import Wrapper from "./components/Wrapper";
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

const App = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default App;
