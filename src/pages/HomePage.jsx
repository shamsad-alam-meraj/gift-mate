import Banner from "@/components/pages-components/Home/Banner";
import ProductsSection from "@/components/pages-components/Home/ProductsSection";
import Navbar from "@/components/shared-components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductsSection />
    </>
  );
};

export default HomePage;
