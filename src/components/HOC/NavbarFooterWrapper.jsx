import PropTypes from "prop-types";
import Navbar from "../shared-components/Navbar";
import Footer from "../shared-components/Footer";

const NavbarFooterWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

NavbarFooterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavbarFooterWrapper;
