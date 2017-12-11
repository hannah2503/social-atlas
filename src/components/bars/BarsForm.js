import React from 'react';
import AutoComplete from '../utilities/AutoComplete';
// import BackButton from '../utilities/BackButton';
import { Link } from 'react-router-dom';

const BarsForm = ({ handleChange, handleSubmit, handleLocationChange, handleMultipleInput, bar }) => {
  return(
    <div className="wrapper">
      <form onSubmit={ handleSubmit }>
        <label>Name</label>
        <input type="text" name="name" onChange={ handleChange } value={bar.name}/>
        <br/>
        <label>Address</label>
        <AutoComplete
          handleChange={handleLocationChange}
        />
        <br/>
        <label>Image</label>
        <input type="text" name="image" onChange={ handleChange } value={bar.image}/>
        <br/>
        <label>Website</label>
        <input type="text" name="website" onChange={ handleChange } value={bar.website}/>
        <br/>
        <label>Description</label>
        <input type="text" name="description" onChange={ handleChange } value={bar.description}/>
        <br/>

        <label>Type</label>
        <select id="type" name="type" onChange={handleChange}>
          <option value="" disabled>Please Select</option>
          <option>Restaurant</option>
          <option>Cafe</option>
          <option>Bar</option>
          <option>Food Festival</option>
          <option>Pop-Up</option>
          <option>Brasserie</option>
          <option>Deli</option>
        </select>

        <br/>
        <label>Category</label><br/>
        <input type="checkbox" name="category" onChange={ handleMultipleInput } value="Fun with Friends,"/>Fun with Friends<br/>
        <input type="checkbox" name="category" onChange={ handleMultipleInput } value="Date Night,"/>Date Night<br/>
        <input type="checkbox" name="category" onChange={ handleMultipleInput } value="Family Meal,"/>Family Meal<br/>
        <input type="checkbox" name="category" onChange={ handleMultipleInput } value="Light Bite,"/>Light Bite<br/>
        <input type="checkbox" name="category" onChange={ handleMultipleInput } value="Experimental,"/>Experimental<br/>
        <br/>

        <label>Rating</label>
        <input multiple type="Number" name="rating" onChange={ handleChange } value={bar.rating}/>
        <br/>
        <input type="submit" className="grey-button" value="save"/>
        <Link to="/bars" className="grey-button">Back</Link>
      </form>
    </div>
  );

};


export default BarsForm;


// checked={bar.category.includes('Fun with Friends')}
// checked={bar.category.includes('Date Night')}
// checked={bar.category.includes('Family Meal')}
// checked={bar.category.includes('Light Bite')}
// checked={bar.category.includes('Experimental')}
