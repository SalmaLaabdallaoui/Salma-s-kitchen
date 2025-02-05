import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  // Recipe list with names and paths
  const recipes = [
    { name: "Cinnamon Rolls", path: "/recipes/Cinnamonrolls" },
    { name: "Shrimp Salad", path: "/recipes/Shrimpsalad" },
    { name: "Spanish Paella", path: "/recipes/Paella" },
    { name: "Chocolate Cake", path: "/recipes/Chocolatecake" },
    { name: "Parfait", path: "/recipes/Parfait" },
    { name: "Pancakes", path: "/recipes/Pancakes" },
    { name: "Yogurt Bowl", path: "/recipes/Yogurtbowl" },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // State to track user input
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Filtered recipes
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility
  const navigate = useNavigate(); // React Router's navigate function

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase(); // Convert input to lowercase
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredRecipes([]); // Clear the dropdown if input is empty
      setIsDropdownOpen(false);
    } else {
      const filtered = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(term) // Check if recipe name contains the term
      );
      setFilteredRecipes(filtered);
      setIsDropdownOpen(filtered.length > 0); // Only show dropdown if there are matches
    }
  };

  // Handle Recipe Selection
  const handleRecipeSelect = (path) => {
    navigate(path); // Navigate to the selected recipe page
    setSearchTerm(""); // Clear the search box
    setIsDropdownOpen(false); // Close the dropdown
  };

  // Handle "Enter" Key
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredRecipes.length > 0) {
      handleRecipeSelect(filteredRecipes[0].path); // Navigate to the first match
    }
  };

  return (
    <div className="search-box" style={{ position: "relative" }}>
      <label htmlFor="recipe-search" className="search-label"></label>
      <input
        type="text"
        id="recipe-search"
        className="search-input"
        placeholder="🔍   Browse recipes"
        value={searchTerm}
        onChange={handleSearchChange} // Update search term and filter recipes
        onKeyDown={handleKeyDown} // Handle Enter key
        onFocus={() => setIsDropdownOpen(filteredRecipes.length > 0)} // Show dropdown on focus
      />

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <ul className="recipe-dropdown">
          {filteredRecipes.map((recipe, index) => (
            <li
              key={index}
              className="recipe-item"
              onClick={() => handleRecipeSelect(recipe.path)} // Navigate on click
            >
              {recipe.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
