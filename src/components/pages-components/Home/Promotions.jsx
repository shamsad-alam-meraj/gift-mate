import { useState, useEffect } from "react";

const Promotions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/slide1.jpg",
      title: "Big Sale!",
      description: "Up to 50% off on electronics.",
    },
    {
      id: 2,
      image: "/images/slide2.jpg",
      title: "New Arrivals",
      description: "Discover the latest trends.",
    },
    {
      id: 3,
      image: "/images/slide3.jpg",
      title: "Limited Time Offer",
      description: "Hurry, offer ends soon!",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden mt-10">
      <div
        className="w-full h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black bg-opacity-50 text-white h-full flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded"
      >
        {"<"}
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded"
      >
        {">"}
      </button>
    </div>
  );
};

export default Promotions;
