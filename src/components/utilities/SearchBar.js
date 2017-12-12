import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ handleSort, handleSearch }) => {
  return(
    <div className="menu">
      <Link to="/bars/new"><button className="search-input grey-button-button">add</button></Link>
      <select className="search-input" onChange={handleSort}>
        <option value="name|asc">Name (A - Z)</option>
        <option value="name|desc">Name (Z - A)</option>
      </select>
      <input className="search-input" type="text" placeholder="Search" onChange={handleSearch}/>
    </div>
  );
};

export default SearchBar;
