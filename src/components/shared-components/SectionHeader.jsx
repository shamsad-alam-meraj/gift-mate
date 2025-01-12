import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/* eslint-disable react/prop-types */
const SectionHeader = ({ title }) => {
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
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
        }
      );
    }
  }, [isVisible]);

  return (
    <div>
      <h2 ref={titleRef} className="text-2xl font-semibold text-primary">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
