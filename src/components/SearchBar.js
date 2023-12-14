import React from "react";

const SearchBar = ({ handleSearch }) => {
  const handleChange = (e) => handleSearch(e.target.value);

  return (
    <input
      type="text"
      placeholder="Pretraži emojije..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
