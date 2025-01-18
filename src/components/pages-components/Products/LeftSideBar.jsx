import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const LeftSideBar = ({ getProductsByFilter, setFilters, filters }) => {
  // Local state for managing checkbox states
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    // Update local state when filters prop changes
    setLocalFilters(filters);
  }, [filters]);

  // Function to handle checkbox change
  const handleCheckboxChange = (category, value) => {
    const updatedFilters = { ...localFilters };

    // Set the value for the category directly, ensuring only one value is selected
    updatedFilters[category] = value;

    // Set the updated filters state
    setLocalFilters(updatedFilters);
    setFilters(updatedFilters); // Update parent filters state
    getProductsByFilter(updatedFilters); // Call the product fetching function with updated filters
  };
  console.log(filters);

  return (
    <aside className="w-full md:w-1/4 p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold pb-4">Filter Gifts</h2>
      <div className="space-y-6">
        {/* Budget Filter */}
        <div>
          <h3 className="font-medium pb-2">Budget</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  checked={localFilters.price === "Under $20"}
                  onChange={() => handleCheckboxChange("price", "Under $20")}
                />
                Under $20
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  checked={localFilters.price === "$20 - $50"}
                  onChange={() => handleCheckboxChange("price", "$20 - $50")}
                />
                $20 - $50
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  checked={localFilters.price === "$50 - $100"}
                  onChange={() => handleCheckboxChange("price", "$50 - $100")}
                />
                $50 - $100
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  checked={localFilters.price === "Above $100"}
                  onChange={() => handleCheckboxChange("price", "Above $100")}
                />
                Above $100
              </label>
            </li>
          </ul>
        </div>

        {/* Category Filter */}
        <div>
          <h3 className="font-medium pb-2">Category</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  checked={localFilters.category === "Electronics"}
                  onChange={() =>
                    handleCheckboxChange("category", "Electronics")
                  }
                />
                Electronics
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  checked={localFilters.category === "Toys"}
                  onChange={() => handleCheckboxChange("category", "Toys")}
                />
                Toys
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  checked={localFilters.category === "Books"}
                  onChange={() => handleCheckboxChange("category", "Books")}
                />
                Books
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  checked={localFilters.category === "Fashion"}
                  onChange={() => handleCheckboxChange("category", "Fashion")}
                />
                Fashion
              </label>
            </li>
          </ul>
        </div>

        {/* Age Filter */}
        <div>
          <h3 className="font-medium pb-2">Age</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="ageGroup"
                  checked={localFilters.ageGroup === "Kids"}
                  onChange={() => handleCheckboxChange("ageGroup", "Kids")}
                />
                Kids
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="ageGroup"
                  checked={localFilters.ageGroup === "Teens"}
                  onChange={() => handleCheckboxChange("ageGroup", "Teens")}
                />
                Teens
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="ageGroup"
                  checked={localFilters.ageGroup === "Adults"}
                  onChange={() => handleCheckboxChange("ageGroup", "Adults")}
                />
                Adults
              </label>
            </li>
          </ul>
        </div>

        {/* Relationship Filter */}
        <div>
          <h3 className="font-medium pb-2">Relationship</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="relationship"
                  checked={localFilters.relationship === "For Friends"}
                  onChange={() =>
                    handleCheckboxChange("relationship", "For Friends")
                  }
                />
                For Friends
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="relationship"
                  checked={localFilters.relationship === "For Family"}
                  onChange={() =>
                    handleCheckboxChange("relationship", "For Family")
                  }
                />
                For Family
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="relationship"
                  checked={localFilters.relationship === "For Colleagues"}
                  onChange={() =>
                    handleCheckboxChange("relationship", "For Colleagues")
                  }
                />
                For Colleagues
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="relationship"
                  checked={
                    localFilters.relationship === "For Significant Other"
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      "relationship",
                      "For Significant Other"
                    )
                  }
                />
                For Significant Other
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="relationship"
                  checked={localFilters.relationship === "For Acquaintances"}
                  onChange={() =>
                    handleCheckboxChange("relationship", "For Acquaintances")
                  }
                />
                For Acquaintances
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="relationship"
                  checked={localFilters.relationship === "For Neighbors"}
                  onChange={() =>
                    handleCheckboxChange("relationship", "For Neighbors")
                  }
                />
                For Neighbors
              </label>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

LeftSideBar.propTypes = {
  getProductsByFilter: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
};

export default LeftSideBar;
