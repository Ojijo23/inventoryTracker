import React from "react";
import { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Items"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
