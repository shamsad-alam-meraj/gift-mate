import PropTypes from "prop-types";

const Tabs = ({ activeTab, authBlock_index, handleTabChange }) => {
  return (
    <div className="flex justify-around mb-4">
      <button
        className={`w-1/2 py-2 text-center ${
          activeTab !== authBlock_index.LOGIN_BLOCK
            ? "text-gray-600 border-b-2 border-primary "
            : " border-t-2 border-primary text-primary font-semibold border-l-2 border-r-2 rounded-tr-lg rounded-tl-lg"
        }`}
        onClick={() => handleTabChange(authBlock_index.LOGIN_BLOCK)}
      >
        Log In
      </button>
      <button
        className={`w-1/2 py-2 text-center ${
          activeTab !== authBlock_index.REGISTRATION_BLOCK
            ? "text-gray-600 border-b-2 border-primary "
            : " border-t-2 border-primary text-primary font-semibold border-r-2 rounded-tr-lg rounded-tl-lg border-l-2"
        }`}
        onClick={() => handleTabChange(authBlock_index.REGISTRATION_BLOCK)}
      >
        Sign Up
      </button>
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired, // Active tab identifier
  authBlock_index: PropTypes.shape({
    LOGIN_BLOCK: PropTypes.string.isRequired,
    REGISTRATION_BLOCK: PropTypes.string.isRequired,
  }).isRequired, // Object containing tab identifiers
  handleTabChange: PropTypes.func.isRequired, // Function to handle tab changes
};

export default Tabs;
