import gsap from "gsap";
import { useEffect, useRef } from "react";

const HorizontalScrolling = () => {
  const wrapperRef = useRef(null);
  const slideTextRef = useRef(null);

  useEffect(() => {
    const text = slideTextRef.current;
    // const wrapper = wrapperRef.current;
    const textWidth = text.offsetWidth;

    gsap.to(text, {
      x: -textWidth,
      duration: 80,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % textWidth),
      },
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full overflow-x-hidden whitespace-nowrap bg-black text-white py-6"
      style={{ position: "relative" }}
    >
      <span
        ref={slideTextRef}
        className="font-extrabold text-[13vw] tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 drop-shadow-[0_0_25px_rgba(255,165,0,0.3)] inline-block"
        style={{ willChange: "transform" }}
      >
        Innovate. Collaborate. Elevate.&nbsp;&nbsp;&nbsp; Shape the Future with
        Code.&nbsp;&nbsp;&nbsp; Innovate. Collaborate.
        Elevate.&nbsp;&nbsp;&nbsp; Shape the Future with Code.&nbsp;&nbsp;&nbsp;
      </span>
    </div>
  );
};

export default HorizontalScrolling;
