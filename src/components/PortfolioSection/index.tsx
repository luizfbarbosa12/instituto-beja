import { PortfolioLetter } from "./PortfolioLetter";
import { PortfolioMap } from "./PortfolioMap";
import { PortfolioNarratives } from "./PortfolioNarratives";
import { PortfolioNewLongevity } from "./PortfolioNewLongevity";
import { PortfolioReputationBuild } from "./PortfolioReputationBuild";
import { PortfolioSectionVentTransition } from "./PortfolioSectionVentTransition";
import { PortfolioToriba } from "./PortfolioToriba";

export function PortfolioSection() {
  return (
    <div>
      <PortfolioSectionVentTransition />
      <PortfolioLetter />
      <PortfolioNewLongevity />
      <PortfolioMap />
      <PortfolioReputationBuild />
      <PortfolioNarratives />
      <PortfolioToriba />
    </div>
  );
}
