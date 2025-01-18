import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

export default function Banner() {
  const imageRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    // GSAP animation for the image
    gsap.to(imageRef.current, {
      y: -20, // Move the image up by 20px
      duration: 0.8, // Animation duration
      repeat: -1, // Infinite repeat
      yoyo: true, // Smooth reverse motion
      ease: "power1.inOut", // Easing function
    });

    // GSAP animation for the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 }, // Start with opacity 0 and move down 30px
      {
        opacity: 1,
        y: 0, // Move to original position
        duration: 0.8,
        stagger: 0.2, // Animate each child with a 0.2s delay
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="container flex flex-col-reverse lg:flex-row items-center pt-10 gap-8">
      {/* Text Section */}
      <div className="w-full lg:flex-[0.5] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h1
          ref={(el) => (textRef.current[0] = el)}
          className="text-3xl sm:text-4xl font-semibold pb-2 italic"
        >
          <span className="text-secondary">gift</span>
          <span className="text-primary">mate</span>
        </h1>
        <p
          ref={(el) => (textRef.current[1] = el)}
          className="text-lg sm:text-xl text-gray-500 pb-4 dark:text-gray-50"
        >
          Thoughtful Gifts for Every Celebration
        </p>
        <p
          ref={(el) => (textRef.current[2] = el)}
          className="pb-2 dark:text-gray-100 text-gray-400 font-light"
        >
          A smart and intuitive platform for thoughtful and hassle-free gifting,
          offering personalized recommendations, seamless shopping, and
          event-based gift solutions.
        </p>
        <Button
          ref={(el) => (textRef.current[3] = el)}
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-light"
        >
          Get Started
        </Button>
      </div>
      {/* Image Section */}
      <div className="w-full lg:flex-[0.5] flex justify-center items-center">
        <img
          ref={imageRef}
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full"
          src="/assets/images/home_banner.jpeg"
          alt="Home Banner"
        />
      </div>
    </div>
  );
}
