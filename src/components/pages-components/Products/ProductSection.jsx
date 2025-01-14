import ProductCard from "@/components/shared-components/ProductCard";
import PropTypes from "prop-types";

const ProductSection = ({ products }) => {
  return (
    <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found.
        </p>
      )}
    </main>
  );
};

ProductSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductSection;
