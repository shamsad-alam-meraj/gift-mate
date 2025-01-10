import Navbar from "@/components/shared-components/Navbar";
import ThemeToggle from "@/components/shared-components/ThemeToggle";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to the Gift Mate App!</h1>
      <ThemeToggle />
    </div>
  );
};

export default HomePage;
