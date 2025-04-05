import BejaHouseSection from "./components/BejaHouseSection";
import FirstSection from "./components/FirstSection";
import FounderLetter from "./components/FounderLetter";
import ManifestSection from "./components/ManifestSection";
import MissionValueSection from "./components/MissionValueSection";
import RebrandingSection from "./components/RebrandingSection";

const App = () => {
  return (
    <div>
      <FirstSection/>
      <FounderLetter/>
      <RebrandingSection/>
      <ManifestSection/>
      <MissionValueSection/>
      <BejaHouseSection/>
    </div>
  );
};

export default App;