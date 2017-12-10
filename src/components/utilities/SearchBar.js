import React from 'react';

const SearchBar = ({ handleSort, handleSearch }) => {
  return(
    <div>
      <select onChange={handleSort}>
        <option value="name|asc">Name (A - Z)</option>
        <option value="name|desc">Name (Z - A)</option>
      </select>
      <input type="text" placeholder="Search" onChange={handleSearch}/>
    </div>
  );
};

export default SearchBar;
