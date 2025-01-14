import PropTypes from "prop-types";

const Tabs = ({ activeTab, authBlock_index, handleTabChange }) => {
  return (
    <div className="flex justify-around border-b mb-4">
      <button
        className={`w-1/2 py-2 text-center ${
          activeTab === authBlock_index.LOGIN_BLOCK
            ? "text-primary border-b-2 border-primary font-semibold"
            : "text-gray-600"
        }`}
        onClick={() => handleTabChange(authBlock_index.LOGIN_BLOCK)}
      >
        Log In
      </button>
      <button
        className={`w-1/2 py-2 text-center ${
          activeTab === authBlock_index.REGISTRATION_BLOCK
            ? "text-primary border-b-2 border-primary font-semibold"
            : "text-gray-600"
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
