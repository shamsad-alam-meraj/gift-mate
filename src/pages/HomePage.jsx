import NavbarFooterWrapper from "@/components/HOC/NavbarFooterWrapper";
import Banner from "@/components/pages-components/Home/Banner";
import FAQSection from "@/components/pages-components/Home/FAQSection";
import HotDealsSection from "@/components/pages-components/Home/HotDealsSection";
import ProductsSection from "@/components/pages-components/Home/ProductsSection";
import Promotions from "@/components/pages-components/Home/Promotions";
import { setProducts } from "@/redux/reducers/productSlice";
import Product from "@/services/Product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state?.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProductList = async () => {
      const response = await Product.getProducts();
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
    <NavbarFooterWrapper>
      <Banner />
      <Promotions />
      <ProductsSection products={products} loading={loading} />
      <HotDealsSection />
      <FAQSection />
    </NavbarFooterWrapper>
  );
};

export default HomePage;
