import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ handleSort, handleSearch }) => {
  return(
    <div className="menu">
      <div className="menu-item">
        <Link to="/bars/new"><button className="grey-button-button">add</button></Link>
      </div>
      <div className="menu-item">
        <input className="search-input" type="text" placeholder="filter the list..." onChange={handleSearch}/>
      </div>
      <div className="menu-item">
        <select className="search-input-select" onChange={handleSort}>
          <option className="search-input" value="name|asc">sort by name (A - Z) </option>
          <option className="search-input" value="name|desc">sort by name (Z - A) </option>
        </select>
      </div>

    </div>
  );
};

export default SearchBar;
