/* eslint-disable react/prop-types */
import BlockLoader from "@/components/shared-components/BlockLoader";
import ProductHotCard from "@/components/shared-components/ProductHotCard";
import SectionHeader from "@/components/shared-components/SectionHeader";
import SectionSubHeader from "@/components/shared-components/SectionSubHeader";

const HotDealsSection = ({ products, loading }) => {
  return (
    <div className="mt-10 px-4">
      <SectionHeader title="Hot Deals" />
      <SectionSubHeader title="Free Shipping" />
      {loading ? (
        <div className="h-[300px]">
          <BlockLoader />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {products?.map((product) => (
            <ProductHotCard
              key={product?._id}
              product={product}
              type="freeShipping"
            />
          ))}
        </div>
      )}
      <SectionSubHeader title="Up to 50% off" />
      {loading ? (
        <div className="h-[300px]">
          <BlockLoader />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {products?.map((product) => (
            <ProductHotCard key={product?._id} product={product} type="offer" />
          ))}
        </div>
      )}
      <SectionSubHeader title="Buy 1 Get 1" />
      {loading ? (
        <div className="h-[300px]">
          <BlockLoader />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {products?.map((product) => (
            <ProductHotCard key={product?._id} product={product} type="b1g1" />
          ))}
        </div>
      )}
    </div>
  );
};

export default HotDealsSection;
