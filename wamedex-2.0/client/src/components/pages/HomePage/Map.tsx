import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components';

class IsoMap extends React.Component {
  
    render() {
      const position = {lat: 51, lng: 0};
      return (
          <Map center={position} zoom={13}>
              <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            </Map>
      );
    }
  }
export default IsoMap;
