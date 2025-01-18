import NavbarFooterWrapper from "@/components/HOC/NavbarFooterWrapper";
import Products from "@/components/pages-components/Products";
import ProductsPagination from "@/components/pages-components/Products/ProductsPagination";
import { setProducts } from "@/redux/reducers/productSlice";
import Product from "@/services/Product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const products = useSelector((state) => state?.product.products);
  const dispatch = useDispatch();

  const getProductList = async (page = 1) => {
    setLoading(true);
    const response = await Product.getProducts(page, 20);
    if (response.status === 200) {
      setSearchQuery("");
      dispatch(setProducts(response.data.data));
      const totalItems = response.data.total;
      const limit = 20;
      setTotalPages(Math.ceil(totalItems / limit));
    } else {
      console.error(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProductList(currentPage);
  }, [currentPage]);

  const getProductsByFilter = async () => {
    try {
      // If search query is set, add it to the filters
      if (searchQuery) {
        setFilters({ ...filters, search: searchQuery });
      }

      // Send the filters object as part of the request body or URL
      const response = await Product.getProductByFilter(
        JSON.stringify(filters)
      );

      if (response.status === 200) {
        setCurrentPage(response.data.page);
        dispatch(setProducts(response.data.data));
      } else {
        console.error("Failed to fetch products.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async (query) => {
    try {
      let response = await Product.getProductBySearch(query);
      if (response.status === 200) {
        dispatch(setProducts(response.data.data));
      } else {
        console.error("Failed to fetch products.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <NavbarFooterWrapper>
      <Products
        products={products}
        loading={loading}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        getProductsByFilter={getProductsByFilter}
        setFilters={setFilters}
        filters={filters}
      />
      <ProductsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </NavbarFooterWrapper>
  );
};

export default ProductsPage;
