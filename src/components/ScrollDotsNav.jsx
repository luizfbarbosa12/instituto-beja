import React, { useEffect, useState } from 'react';

// Define the sections in order as in App.jsx
const SECTIONS = [
  { id: 'first-section', label: ' ' },
  { id: 'founder-letter', label: ' ' },
  { id: 'found-letter-to-context-transition', label: ' ' },
  { id: 'rebranding-section', label: ' ' },
  { id: 'manifest-section', label: ' ' },
  { id: 'mission-value-section', label: ' ' },
  { id: 'beja-house-section', label: ' ' },
  { id: 'change-theory-section', label: ' ' },
  { id: 'strategic-pillar-section', label: ' ' },
  { id: 'interaction-ecosystem', label: ' ' },
  { id: 'cme-section', label: ' ' },
  { id: 'advocacy-section', label: ' ' },
  { id: 'knowledge-section', label: ' ' },
  { id: 'beja-labs', label: ' ' },
  { id: 'philanthropy-section', label: ' ' },
  { id: 'final-section', label: ' ' },
  { id: 'balanco-table', label: ' ' },
  { id: 'expediente', label: ' ' },
];

function ScrollDotsNav() {
  const [activeIdx, setActiveIdx] = useState(0);

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
        <button
          key={section.id}
          aria-label={`Go to section ${idx + 1}`}
          className={`w-4 h-4 rounded-full border-2 transition-all duration-200
            ${idx === activeIdx
              ? 'bg-[#b39567] border-[#b39567] scale-125 shadow-lg'
              : 'bg-porcelain border-[1.5px] border-[#b39567] opacity-80'}
          `}
          onClick={() => handleDotClick(idx)}
        />
      ))}
    </div>
  );
}

export default ScrollDotsNav;
