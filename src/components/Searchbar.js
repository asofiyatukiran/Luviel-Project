import React from 'react';
import './Searchbar.css';

const SearchBar = ({ placeholder, value, onChange, onSearch }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder={placeholder || "Find your beauty"} 
        value={value} 
        onChange={onChange} 
        className="search-input"
      />
      <button className="search-button" onClick={onSearch}>
        <i className="fas fa-search"></i> {/* Search icon */}
      </button>
    </div>
  );
};

export default SearchBar;
