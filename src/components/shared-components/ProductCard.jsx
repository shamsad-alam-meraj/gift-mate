import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/reducers/cartSlice";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";

/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  const cardRef = useRef(null);
  const dispatch = useDispatch();

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
  const truncatedDescription =
    product.description?.length > 40
      ? `${product.description.slice(0, 40)}`
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
          // src="/assets/images/iphone.png"
          src={product?.image}
          alt={product.title}
        />
      </div>
      <h2 className="mt-2 font-semibold">{product.title}</h2>
      <p className="font-semibold text-yellow-400">
        {product?.pricing_currency?.native_symbol} {product.price}
      </p>
      <p className="text-sm">
        {truncatedDescription}
        <Link
          to={`/product-details/${product.id}`}
          className="text-primary py-1 px-2 rounded"
        >
          see more...
        </Link>
      </p>
      <div className="flex justify-between items-center pt-3">
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-primary text-white font-bold py-2 px-2 rounded"
        >
          <BsCartPlus />
        </button>
        <button
          // onClick={() => dispatch(addToCart(product))}
          className="bg-yellow-400 text-white font-bold py-1 flex items-center px-2 rounded"
        >
         <span className="mr-2 text-md">Buy Now</span> <MdOutlineShoppingBag />
        </button>
      </div>
    </div>
  );
}
