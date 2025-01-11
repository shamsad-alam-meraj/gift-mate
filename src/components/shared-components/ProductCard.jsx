import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsCartPlus } from "react-icons/bs";

/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  const cardRef = useRef(null);

  useEffect(() => {
    // GSAP animation to smoothly open the card
    gsap.from(cardRef.current, {
      opacity: 0,
      scale: 1.5,
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(cardRef.current, {
      opacity: 100,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  // Truncate description to at most 10 characters with "..."
  const truncatedDescription = product.description?.length > 30 
    ? `${product.description.slice(0, 30)}...`
    : product.description;

  return (
    <div
      ref={cardRef}
      className="rounded-lg shadow-sm dark:shadow-yellow-50 shadow-yellow-400 p-4 bg-opacity-80 backdrop-blur-lg transition-all duration-300 ease-in-out"
      key={product.id}
    >
      <div className="w-full flex justify-center items-center">
        <img
          className="h-[100px] w-[100px]"
          src="/assets/images/iphone.png"
          alt={product.name}
        />
      </div>
      <h2 className="mt-2 font-semibold">{product.title}</h2>
      <p>
        {product?.pricing_currency?.native_symbol} {product.price}
      </p>
      <p>{truncatedDescription}</p>
      <div className="flex justify-between items-center pt-3">
        <button className="bg-primary text-white font-bold py-2 px-2 rounded">
          <BsCartPlus />
        </button>
        <button className="text-primary py-1 px-2 rounded">
          Go Details
        </button>
      </div>
    </div>
  );
}
