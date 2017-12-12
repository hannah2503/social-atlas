/* global google */
import React from 'react';

class AutoComplete extends React.Component {

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.input, { types: ['establishment']});

    this.autocomplete.addListener('place_changed', () => {

      const place = this.autocomplete.getPlace();
      console.log(place, 'autocomplete');
      const { name, formatted_address: address, website } = place;
      const location = place.geometry.location.toJSON();
      //loop over the photos to get url and push into an array, if no photos, go to an else statement with placeholders.

      this.props.handleLocationChange(name, address, location, website);
    });
  }

  render() {
    return(
      <input ref={element => this.input = element} />
    );
  }
}


export default AutoComplete;
