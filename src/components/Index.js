// prettier-ignore

import { lazy } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FoundLetterToContextTransition } from "./FounderLetter/FoundLetterToContextTransition";

const Footer = lazy(() => import("./Footer/Footer"));
const CMESection = lazy(() => import("./CMe/CMESection"));
const BalancoTable = lazy(() => import("./Balance/Balance"));
const Expediente = lazy(() => import("./Expediente/Expediente"));
const PortfolioSection = lazy(() => import("./PortfolioSection"));
const FirstSection = lazy(() => import("./FirstSection/FirstSection"));
const FinalSection = lazy(() => import("./FinalSection/FinalSection"));
const ManifestSection = lazy(() => import("./Manifest/ManifestSection"));
const AdvocacySection = lazy(() => import("./Advocacy/AdvocacySection"));
const FounderLetter = lazy(() => import("./FounderLetter/FounderLetter"));
const InteractionEcosystem = lazy(() => import("./InteractionEcosystem"));
const BejaHouseSection = lazy(() => import("./BejaHouse/BejaHouseSection"));
const KnowledgeSection = lazy(() => import("./Knowledge/KnowledgeSection"));
const RebrandingSection = lazy(() => import("./Rebranding/RebrandingSection"));

const ChangeTheorySection = lazy(
  () => import("./ChangeTheory/ChangeTheorySection"),
);
const MissionValueSection = lazy(
  () => import("./MissionValue/MissionValueSection"),
);
const PhilanthropySection = lazy(
  () => import("./Philanthropy/PhilanthropySection"),
);
const StrategicPillarSection = lazy(
  () => import("./StrategicPillar/StrategicPillarSection"),
);

export {
  Footer,
  FirstSection,
  CMESection,
  Expediente,
  BalancoTable,
  FounderLetter,
  ManifestSection,
  BejaHouseSection,
  PortfolioSection,
  KnowledgeSection,
  RebrandingSection,
  InteractionEcosystem,
  ChangeTheorySection,
  StrategicPillarSection,
  MissionValueSection,
  PhilanthropySection,
  AdvocacySection,
  FinalSection,
  FoundLetterToContextTransition,
  gsap,
  ScrollTrigger,
  useGSAP,
};
