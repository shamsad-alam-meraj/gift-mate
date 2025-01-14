import { useState } from "react";
import BlockLoader from "@/components/shared-components/BlockLoader";
import LeftSideBar from "./LeftSideBar";
import ProductSection from "./ProductSection";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";

export default function ProductsPage({ products, loading }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="container mx-auto py-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
        <h1 className="text-3xl font-semibold">Find the Perfect Gift</h1>
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 ">
        {/*Left Sidebar */}
        <LeftSideBar />

        {/* Products Grid */}
        {loading ? (
          <div className="min-h-screen w-full">
            <BlockLoader />
          </div>
        ) : (
          <ProductSection products={products} />
        )}
      </div>
    </div>
  );
}
ProductsPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
