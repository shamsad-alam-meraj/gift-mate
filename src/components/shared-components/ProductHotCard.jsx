import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/reducers/cartSlice";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Rating } from "react-simple-star-rating";

/* eslint-disable react/prop-types */
export default function ProductHotCard({ product, type }) {
  const cardRef = useRef(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.find((item) => item._id === product._id);

  useEffect(() => {
    // GSAP animation to smoothly open the card
    gsap.from(cardRef.current, {
      opacity: 0,
      scale: 1.5,
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(cardRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  // Truncate description to at most 40 characters with "..."
  const truncatedDescription =
    product.description?.length > 40
      ? `${product.description.slice(0, 40)}...`
      : product.description;

  return (
    <div
      ref={cardRef}
      className="relative rounded-lg shadow-lg p-4  border border-gray-300 transition-all duration-300 ease-in-out"
      key={product.id}
    >
      {/* Offer Stamps */}
      {type === "b1g1" && (
        <div className="absolute top-0 right-0 bg-green-800 text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg shadow text-white">
          Buy 1 Get 1
        </div>
      )}
      {type === "freeShipping" && (
        <div className="absolute top-0 right-0 bg-primary text-xs font-semibold px-2 py-1 shadow-md rounded-tr-lg rounded-bl-lg text-white">
          Free Shipping
        </div>
      )}
      {type === "offer" && (
        <div className="absolute top-0 right-0 bg-red-800 text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg shadow-md text-white">
          {product.offer.percentage}% Off
        </div>
      )}

      <div className="w-full flex justify-center items-center">
        <img
          className="h-[100px] w-[100px]"
          src={product?.image}
          alt={product.title}
        />
      </div>
      <h2 className="mt-2 font-semibold text-lg">{product.title}</h2>
      <div className="flex justify-between items-center py-1">
        <p className="font-semibold text-secondary">
          {product?.offer?.percentage ? (
            <span className="line-through text-gray-400 mr-2">
              {product.currency.native_symbol} {product.price}
            </span>
          ) : null}
          {product?.offer?.percentage
            ? `${product.currency.native_symbol} ${
                product.price -
                product.price * (product?.offer?.percentage / 100)
              }`
            : `${product.currency.native_symbol} ${product.price}`}
        </p>
        <span className="flex flex-row">
          <Rating
            className="flex flex-row"
            readonly
            transition={true}
            size={12}
            initialValue={product?.ratings}
          />
        </span>
      </div>
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
        {/* Add to Cart Button */}
        <button
          onClick={() => {
            if (!isInCart) {
              dispatch(addToCart(product));
            }
          }}
          disabled={isInCart} // Disable button if product is in the cart
          className={`font-bold py-2 px-2 rounded ${
            isInCart
              ? "bg-primary text-white border-primary cursor-not-allowed"
              : "border border-primary text-primary"
          }`}
        >
          <BsCartPlus />
        </button>

        {/* Buy Now Button */}
        <button className="border border-secondary text-secondary font-bold py-1 flex items-center px-2 rounded">
          <span className="mr-2 text-md">Buy Now</span> <MdOutlineShoppingBag />
        </button>
      </div>
    </div>
  );
}
