/* eslint-disable react/prop-types */
import BlockLoader from "@/components/shared-components/BlockLoader";
import ProductCard from "@/components/shared-components/ProductCard";
import SectionHeader from "@/components/shared-components/SectionHeader";

const HotDealsSection = ({ products, loading }) => {
  return (
    <div className="mt-10 px-4">
      <SectionHeader title="Hot Deals" />
      {loading ? (
        <div className="h-[300px]">
          <BlockLoader />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {products?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HotDealsSection;
