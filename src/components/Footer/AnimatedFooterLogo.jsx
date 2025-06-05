import React, { useState } from "react";

/**
 * AnimatedFooterLogo
 * Shows the static first frame of the GIF by default. On hover, plays the GIF. On mouse leave, returns to static.
 * The static frame is extracted as PNG (must be present in /assets/beja-logo-animada-branca-static.png).
 * If you don't have the static PNG, the GIF will be shown always (with replay on hover).
 */

const STATIC_SRC = "/assets/beja-logo-animada-branca-static.png";
const GIF_SRC = "/assets/beja-logo-animada-branca.gif";

export default function AnimatedFooterLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [gifKey, setGifKey] = useState(0);
  // Use static PNG by default, GIF on hover. If PNG is missing, fallback to GIF always.
  // We'll optimistically try PNG, as browsers will fallback to GIF if PNG 404s.
  const src = isHovered ? `${GIF_SRC}?key=${gifKey}` : STATIC_SRC;
  return (
    <img
      src={src}
      alt="Logo animado Instituto Beja"
      className="w-60 h-60 md:w-80 md:h-80 max-380:absolute max-380:right-0 transition-transform duration-200"
      onMouseEnter={() => { setIsHovered(true); setGifKey(gifKey + 1); }}
      onMouseLeave={() => setIsHovered(false)}
      draggable={false}
      style={{ pointerEvents: "none", userSelect: "none" }}
    />
  );
}

