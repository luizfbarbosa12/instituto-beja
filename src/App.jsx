import BejaHouseSection from "./components/BejaHouseSection";
import ChangeTheorySection from "./components/ChangeTheorySection";
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
      <ChangeTheorySection/>
    </div>
  );
};

export default App;