import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import { Button } from '@material-ui/core';
import { IPosition } from './components/Map';
function App() {
  const [coordinates, setCoordinates] = useState(getRandomLocation());

  function getRandomInt(min: any, max: any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomLocation() {

    var cities = [{
      "city": "New York",
      "growth_from_2000_to_2013": "4.8%",
      "latitude": 40.7127837,
      "longitude": -74.0059413,
      "population": "8405837",
      "rank": "1",
      "state": "New York"
    },
    {
      "city": "Los Angeles",
      "growth_from_2000_to_2013": "4.8%",
      "latitude": 34.0522342,
      "longitude": -118.2436849,
      "population": "3884307",
      "rank": "2",
      "state": "California"
    },
    {
      "city": "Chicago",
      "growth_from_2000_to_2013": "-6.1%",
      "latitude": 41.8781136,
      "longitude": -87.6297982,
      "population": "2718782",
      "rank": "3",
      "state": "Illinois"
    },
    {
      "city": "Houston",
      "growth_from_2000_to_2013": "11.0%",
      "latitude": 29.7604267,
      "longitude": -95.3698028,
      "population": "2195914",
      "rank": "4",
      "state": "Texas"
    },
    {
      "city": "Philadelphia",
      "growth_from_2000_to_2013": "2.6%",
      "latitude": 39.9525839,
      "longitude": -75.1652215,
      "population": "1553165",
      "rank": "5",
      "state": "Pennsylvania"
    },
    {
      "city": "Phoenix",
      "growth_from_2000_to_2013": "14.0%",
      "latitude": 33.4483771,
      "longitude": -112.0740373,
      "population": "1513367",
      "rank": "6",
      "state": "Arizona"
    }];

    var randomCity = cities[getRandomInt(0, 5)];
    let position: IPosition = {
      x: randomCity.latitude,
      y: randomCity.longitude
    };
    return position;
  }
  return (
    <div className="App">
      <Map x={coordinates.x} y={coordinates.y} />
      <Button variant="contained" color="primary"
        onClick={() => setCoordinates(getRandomLocation())}>I'm feeling lucky</Button>
    </div >
  );
}

export default App;
