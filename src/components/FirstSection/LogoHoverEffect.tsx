import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";

interface LogoHoverEffectProps {
  className?: string;
  src?: string;
  alt?: string;
}

export default function LogoHoverEffect({ className = '', src = '/assets/LOGO-16.png', alt = 'Instituto Beja Logo' }: LogoHoverEffectProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLImageElement>(null);
  const [hovered, setHovered] = useState(false);

  // Heartbeat pulse animation sequence (with more visible grow)
  const pulse = {
    scale: [1.13, 1.25, 1.13],
    filter: [
      'brightness(1.13) drop-shadow(0 0 32px #b39567)',
      'brightness(1.18) drop-shadow(0 0 48px #b39567)',
      'brightness(1.13) drop-shadow(0 0 32px #b39567)'
    ],
    transition: {
      duration: 1.1,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1],
    },
  };

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={`transition-all duration-300 ease-in-out cursor-pointer drop-shadow-lg ${className}`}
      initial={{ scale: 1, filter: 'brightness(1)' }}
      animate={hovered ? pulse : { scale: 1, filter: 'brightness(1)' }}
      whileHover={{ filter: 'brightness(1.18) drop-shadow(0 0 48px #b39567)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={alt}
      style={{ willChange: 'transform, filter' }}
    />
  );
}
