import Banner from "@/components/pages-components/Home/Banner";
import FAQSection from "@/components/pages-components/Home/FAQSection";
import HotDealsSection from "@/components/pages-components/Home/HotDealsSection";
import ProductsSection from "@/components/pages-components/Home/ProductsSection";
import Promotions from "@/components/pages-components/Home/Promotions";
import Footer from "@/components/shared-components/Footer";
import Navbar from "@/components/shared-components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Promotions />
      <ProductsSection />
      <HotDealsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default HomePage;
