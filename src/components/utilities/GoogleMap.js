/* global google */

import React from 'react';


class GoogleMap extends React.Component {

  componentDidMount() {
    console.log('inside GMap', this.props.center);
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center,
      zoom: 14,
      clickableIcons: false,
      disableDefaultUI: true
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.props.center,
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
      <div className="google-map" ref={element => this.mapCanvas = element}>Google Map Will Appear Here...</div>
    );
  }
}

export default GoogleMap;
