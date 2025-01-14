/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

const LeftSideBar = () => {
  return (
    <aside className="w-full md:w-1/4 p-4 rounded-lg shadow-sm shadow-yellow-50">
      <h2 className="text-lg font-semibold pb-4">Filter Gifts</h2>
      <div className="space-y-6">
        {/* Budget Filter */}
        <div>
          <h3 className="font-medium pb-2">Budget</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Under $20
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> $20 - $50
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> $50 - $100
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Above $100
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
                <input type="checkbox" /> Electronics
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Toys
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Books
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Fashion
              </label>
            </li>
          </ul>
        </div>

        {/* Other Filters */}
        <div>
          <h3 className="font-medium pb-2">Age</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Kids
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Teens
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Adults
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
                <input type="checkbox" /> For Friends
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> For Family
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> For Colleagues
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> For Significant Other
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> For Acquaintances
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> For Neighbors
              </label>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

LeftSideBar.propTypes = {};

export default LeftSideBar;
