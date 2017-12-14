import React from 'react';
import AutoComplete from '../utilities/AutoComplete';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const BarsForm = ({ handleChange, handleSubmit, handleLocationChange, handleMultipleInput, bar, categories, ratingChanged }) => {
  return(
    <div className="wrapper">
      <form onSubmit={ handleSubmit }>
        <label>Name</label>
        <input type="text" name="name" onChange={ handleChange } value={bar.name}/>
        <br/>

        <label>Address</label>
        <AutoComplete handleLocationChange={handleLocationChange}/>
        <br/>

        <label>Image</label>
        <input type="text" name="image" onChange={ handleChange } value={bar.image} />
        <br/>

        <label>Website</label>
        <input type="text" name="website" onChange={ handleChange } value={bar.website}/>
        <br/>

        <label>Description</label>
        <input type="text" name="description" onChange={ handleChange } value={bar.description}/>
        <br/>


        <label>Type</label><br/>
        <select id="type" name="type" onChange={handleChange}>
          <option>Please Select an Option</option>
          <option>Restaurant</option>
          <option>Cafe</option>
          <option>Bar</option>
          <option>Food Festival</option>
          <option>Pop-Up</option>
          <option>Brasserie</option>
          <option>Deli</option>
        </select>
        <br/>

        <div className="category-wrapper">
          <label>Category</label>
          <br/>

          { categories.map((category, i) =>
            <span key={i}>
              <input className="checkbox" type="checkbox" name="category" onChange={ handleMultipleInput } value={category} checked={bar.category.includes(category)}/>
              <label>{category}</label>
            </span>
          )}
        </div>
        <br/>


        <label>Rating</label><br/>
        <ReactStars
          half={false}
          count={5}
          onChange={ratingChanged}
          value={bar.rating}
          size={24}
          color2={'#ffd700'} />
        <br/>

        <button type="submit" className="grey-button-button">save</button>
        <Link to="/bars" className="grey-button-button"><button className="grey-button-button">back</button></Link>
      </form>
    </div>
  );

};


export default BarsForm;
