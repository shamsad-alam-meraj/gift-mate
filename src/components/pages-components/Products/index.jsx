/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductCard from "@/components/shared-components/ProductCard";
import BlockLoader from "@/components/shared-components/BlockLoader";

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
        <input
          type="text"
          placeholder="Search for gifts..."
          className="w-full md:w-[400px] bg-transparent p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-4 rounded-lg shadow-sm shadow-yellow-50">
          <h2 className="text-lg font-semibold pb-4">Filter Gifts</h2>
          <div className="space-y-6">
            {/* Budget Filter */}
            <div>
              <h3 className="font-medium pb-2">Budget</h3>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Under $20
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> $20 - $50
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> $50 - $100
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Above $100
                  </label>
                </li>
              </ul>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-medium pb-2">Category</h3>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Electronics
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Toys
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Books
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Fashion
                  </label>
                </li>
              </ul>
            </div>

            {/* Other Filters */}
            <div>
              <h3 className="font-medium pb-2">Age</h3>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Kids
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Teens
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Adults
                  </label>
                </li>
              </ul>
            </div>

            {/* Relationship Filter */}
            <div>
              <h3 className="font-medium pb-2">Relationship</h3>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> For Friends
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> For Family
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> For Colleagues
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> For Significant Other
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> For Acquaintances
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> For Neighbors
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        {loading ? (
          <div className="min-h-screen w-full">
            <BlockLoader />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
