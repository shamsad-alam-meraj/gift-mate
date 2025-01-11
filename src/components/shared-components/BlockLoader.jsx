import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./_styles.scss";

const BlockLoader = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const squares = containerRef.current.querySelectorAll(".square");
    gsap.set(squares, { scale: 0 });

    gsap.to(squares, {
      scale: 1,
      duration: 0.6,
      stagger: {
        grid: "auto",
        from: "center",
        each: 0.1,
      },
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  const createSquares = () => {
    const squares = [];
    for (let i = 0; i < 16; i++) {
      squares.push(<div key={i} className="square" />);
    }
    return squares;
  };

  return (
    <div className="flex w-full justify-center items-center h-full">
      <div ref={containerRef} className="squares ">
        {createSquares()}
      </div>
    </div>
  );
};

export default BlockLoader;
