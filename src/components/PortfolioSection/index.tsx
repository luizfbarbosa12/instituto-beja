import { PortfolioLetter } from "./PortfolioLetter";
import { PortfolioNewLongevity } from "./PortfolioNewLongevity";
import { PortfolioSectionVentTransition } from "./PortfolioSectionVentTransition";

export function PortfolioSection() {
  return (
    <div>
      <PortfolioSectionVentTransition />
      <PortfolioLetter />
      <PortfolioNewLongevity />
    </div>
  );
}
