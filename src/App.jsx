import AdvocacySection from "./components/AdvocacySection/AdvocacySection";
import BejaHouseSection from "./components/BejaHouseSection";
import ChangeTheorySection from "./components/ChangeTheorySection";
import CMESection from "./components/CMESection";
import FirstSection from "./components/FirstSection";
import FounderLetter from "./components/FounderLetter";
import ManifestSection from "./components/ManifestSection";
import MissionValueSection from "./components/MissionValueSection";
import RebrandingSection from "./components/RebrandingSection";
import StrategicPillarSection from "./components/StrategicPillarSection";

const App = () => {
  return (
    <div>
      <FirstSection />
      <FounderLetter />
      <RebrandingSection />
      <ManifestSection />
      <MissionValueSection />
      <BejaHouseSection />
      <ChangeTheorySection />
      <StrategicPillarSection />
      <CMESection />
      <AdvocacySection />
    </div>
  );
};

export default App;
