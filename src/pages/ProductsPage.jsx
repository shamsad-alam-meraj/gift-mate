import Products from "@/components/pages-components/Products";
import Navbar from "@/components/shared-components/Navbar";
import { setProducts } from "@/redux/reducers/productSlice";
import Product from "@/services/Product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state?.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProductList = async () => {
      const response = await Product.getProducts(1,20);
      if (response.status === 200) {
        dispatch(setProducts(response.data.data));
        setLoading(false);
      } else {
        console.error(response.data);
        setLoading(false);
      }
    };
    getProductList();
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Products products={products} loading={loading} />
    </>
  );
};

export default ProductsPage;
