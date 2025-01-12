import BlockLoader from "@/components/shared-components/BlockLoader";
import ProductCard from "@/components/shared-components/ProductCard";
import { Button } from "@/components/ui/button";
import { Products } from "@/data/Products";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsSection() {
  const [loading, setLoading] = useState(true);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API request delay
    const timeout = setTimeout(() => {
      setDisplayedProducts(Products.slice(0, 8)); // Get 8 products
      setLoading(false);
    }, 2000);

    // Clean up function
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="pt-10 container">
      <h1 className="text-2xl font-semibold text-center pb-5 text-primary">
        Our Products
      </h1>
      {/* products map  */}
      {loading ? (
        <div className="h-[300px]">
          <BlockLoader />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* see more button to navigate on products page  */}
      {!loading ? (
        <div className="flex justify-center mt-5">
          <Button
            onClick={() => navigate("/products")}
            className="px-2 py-2 bg-primary text-white rounded-md hover:bg-primary-light"
          >
            See More
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
