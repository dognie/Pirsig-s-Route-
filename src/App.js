import React, { Component } from 'react';
import logo from './logo.svg';
import L from 'leaflet';
import './App.css';
const position = [51.0, -0.09];
const L.TileLayer = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?';
const L.attribution = 'pk.eyJ1IjoiZG9nbmllIiwiYSI6ImNqM3ppbDQ2NDA0Nmwyd3BjM2tqeWRxbnEifQ.G3A-2ZMQsIS1qwOQv8Gi8A';
class App extends Component {
  render() {
    return (
      <div>
        <Map
          style={{height: "100vh"}}
          center={position}
          zoom={10}>
          <TileLayer
            url="<TileLayer>"
            attribution="<L.attribution>" />
        </Map>
      </div>
    );
  }
}

export default App;
