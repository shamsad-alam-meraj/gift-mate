/* eslint-disable react/prop-types */
import BlockLoader from "@/components/shared-components/BlockLoader";
import ProductCard from "@/components/shared-components/ProductCard";
import SectionHeader from "@/components/shared-components/SectionHeader";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function ProductsSection({ loading, products }) {
  return (
    <div className="pt-10 container">
      <div className="flex w-full justify-between items-center py-3">
        <SectionHeader title="Gift Items" />
        {/* see more button to navigate on products page  */}
        {!loading ? (
          <Link className="text-primary flex items-center" to="/products">
            <span className="mr-2">See more</span> <FaArrowRight />
          </Link>
        ) : (
          ""
        )}
      </div>
      {/* products map  */}
      {loading ? (
        <div className="h-[300px]">
          <BlockLoader />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {products?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
