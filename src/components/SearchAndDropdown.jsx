import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setCategory, setSearchQuery } from "../features/SearchAndDropdownSlice";

const SearchAndDropdown = () => {

    const dispatch = useDispatch();

    const { categories, selectedCategory, searchQuery } = useSelector(state => state.searchAndDropdown);

    useEffect(() => {
     dispatch(fetchCategories())
    }, [dispatch]);
    

  return (
    <div className="p-6 flex space-x-20 items-center">
      {/*  Search Bar */}
      <div className="flex space-x-4 mt-7">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search product..."
          className="border border-gray-300 px-8 py-3 rounded w-80"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))} 
        />
      </div>

      {/* Dropdown by Category */}
      <div className="flex flex-col w-60">
        <label className="mb-2 font-semibold">Filter by Category:</label>
        <select
          className="border border-gray-300 px-4 py-2 rounded"
          value={selectedCategory}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="all">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchAndDropdown;
