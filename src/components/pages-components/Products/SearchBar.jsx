import PropTypes from "prop-types";

const SearchBar = ({ searchQuery, handleSearch, setSearchQuery }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event.target.value);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search for gifts..."
      className="w-full md:w-[400px] bg-transparent p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
      value={searchQuery}
      onKeyDown={handleKeyDown}
      onChange={(event) => setSearchQuery(event.target.value)}
    />
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
