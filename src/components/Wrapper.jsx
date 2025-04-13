import Lenis from "lenis";
import { useEffect } from "react";

const Wrapper = ({ children, className }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      smoothTouch: false,
      syncTouch: true,
      syncTouchLerp: 0.1,
      round: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className={`m-auto flex flex-col max-w-screen-2xl max-2xl:px-29 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
