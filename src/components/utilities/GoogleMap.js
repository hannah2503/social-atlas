/* global google */

import React from 'react';


class GoogleMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.location,
      zoom: 14,
      clickableIcons: false,
      disableDefaultUI: true
    });

    console.log(this.props.location);
    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.props.location,
      animation: google.maps.Animation.DROP
    });
  }

  componentWillUnmount() {
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }



  render() {
    return (
      <div className="google-map" ref={element => this.mapCanvas = element}></div>
    );
  }
}

export default GoogleMap;
