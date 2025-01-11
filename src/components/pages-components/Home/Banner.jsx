import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

export default function Banner() {
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the image
    gsap.to(imageRef.current, {
      y: -20, // Move the image up by 20px
      duration: 0.8, // Animation duration
      repeat: -1, // Infinite repeat
      yoyo: true, // Smooth reverse motion
      ease: "power1.inOut", // Easing function
    });
  }, []);

  return (
    <div className="container flex flex-col-reverse lg:flex-row items-center pt-10 gap-8">
      {/* Text Section */}
      <div className="w-full lg:flex-[0.5] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-semibold pb-2 italic">
          Gift Mate
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 pb-4">
          Thoughtful Gifts for Every Celebration
        </p>
        <Button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-light">
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
