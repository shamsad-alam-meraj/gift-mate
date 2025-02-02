import BlockLoader from "@/components/shared-components/BlockLoader";
import LeftSideBar from "./LeftSideBar";
import ProductSection from "./ProductSection";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";

export default function ProductsPage({
  products,
  loading,
  setSearchQuery,
  searchQuery,
  handleSearch,
  getProductsByFilter,
  setFilters,
  filters,
}) {
  return (
    <div className="container mx-auto py-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
        <h1 className="text-3xl font-semibold">Find the Perfect Gift</h1>
        <SearchBar
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          setSearchQuery={setSearchQuery}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 ">
        {/*Left Sidebar */}
        <LeftSideBar
          getProductsByFilter={getProductsByFilter}
          setFilters={setFilters}
          filters={filters}
        />

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
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getProductsByFilter: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
};
