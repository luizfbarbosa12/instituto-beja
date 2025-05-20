import React from "react";

export default function LongevityLabBox() {
  return (
    <div className="bg-retro-ochre/20 border border-retro-ochre rounded-xl p-6 mt-8 max-w-[472px]">
      <span className="block text-base text-retro-ochre font-bold mb-2">
        Lab Nova Longevidade
      </span>
      <p className="text-base text-porcelain">
        Os insights detalhados, mapa interativo e relatórios sobre o Lab Nova Longevidade estão disponíveis para download no site exclusivo
        <a
          href="https://labnovalongevidade.org"
          className="underline hover:text-gold ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://labnovalongevidade.org
        </a>
      </p>
    </div>
  );
}
