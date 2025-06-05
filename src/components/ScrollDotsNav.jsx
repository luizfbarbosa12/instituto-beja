import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Define the sections in order as in App.jsx
const SECTIONS = [
  { id: 'first-section', label: 'nav.sections.firstSection' },
  { id: 'founder-letter', label: 'nav.sections.founderLetter' },
  { id: 'found-letter-to-context-transition', label: 'nav.sections.foundLetterToContextTransition' },
  { id: 'rebranding-section', label: 'nav.sections.rebranding' },
  { id: 'manifest-section', label: 'nav.sections.manifest' },
  { id: 'mission-value-section', label: 'nav.sections.missionValue' },
  { id: 'beja-house-section', label: 'nav.sections.bejaHouse' },
  { id: 'change-theory-section', label: 'nav.sections.changeTheory' },
  { id: 'strategic-pillar-section', label: 'nav.sections.strategicPillar' },
  { id: 'interaction-ecosystem', label: 'nav.sections.interactionEcosystem' },
  { id: 'cme-section', label: 'nav.sections.cme' },
  { id: 'advocacy-section', label: 'nav.sections.advocacy' },
  { id: 'knowledge-section', label: 'nav.sections.knowledge' },
  { id: 'beja-labs', label: 'nav.sections.bejaLabs' },
  { id: 'philanthropy-section', label: 'Filantropando' },
  { id: 'final-section', label: 'nav.sections.finalSection' },
  { id: 'balanco-table', label: 'nav.sections.balancoTable' },
  { id: 'expediente', label: 'nav.sections.expediente' },
];

function ScrollDotsNav() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      let found = 0;
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            found = i;
          }
        }
      }
      setActiveIdx(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDotClick = (idx) => {
    const el = document.getElementById(SECTIONS[idx].id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed top-1/2 right-6 z-50 -translate-y-1/2 flex flex-col gap-2 items-center">
      {SECTIONS.map((section, idx) => (
        <div key={section.id} className="relative flex items-center">
          <button
            aria-label={t(section.label)}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-200 shadow-[0_1.5px_4px_0_rgba(179,149,103,0.25)]
              ${idx === activeIdx
                ? 'bg-[#b39567] border-[#b39567] scale-125 shadow-lg'
                : 'bg-transparent border-[#b39567] opacity-80'}
            `}
            onClick={() => handleDotClick(idx)}
            onMouseEnter={e => e.currentTarget.parentElement.querySelector('.dot-tooltip').style.opacity = 1}
            onMouseLeave={e => e.currentTarget.parentElement.querySelector('.dot-tooltip').style.opacity = 0}
          />
          <span
            className={
              `dot-tooltip pointer-events-none absolute right-7 top-1/2 -translate-y-1/2 bg-[#b39567] text-white text-xs py-1 rounded shadow-lg whitespace-nowrap opacity-0 transition-opacity duration-200 flex justify-center items-center ` +
              ((t(section.label).length <= 5) ? 'px-2 min-w-0 text-center' : 'px-3 min-w-[80px] text-right')
            }
            style={{zIndex: 99, maxWidth: 200}}
          >
            {t(section.label)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ScrollDotsNav;
