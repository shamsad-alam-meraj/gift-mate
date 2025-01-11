import Banner from "@/components/pages-components/Home/Banner";
import Navbar from "@/components/shared-components/Navbar";
import ThemeToggle from "@/components/shared-components/ThemeToggle";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ThemeToggle />
    </>
  );
};

export default HomePage;
