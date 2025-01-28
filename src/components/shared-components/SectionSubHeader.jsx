import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/* eslint-disable react/prop-types */
const SectionSubHeader = ({ title }) => {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Trigger GSAP animation when title becomes visible
    if (isVisible) {
      gsap.fromTo(
        titleRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "bounce.in",
        }
      );
    }
  }, [isVisible]);

  return (
    <div>
      <h2 ref={titleRef} className="text-lg font-semibold text-secondary mt-3">
        {title}
      </h2>
    </div>
  );
};

export default SectionSubHeader;
