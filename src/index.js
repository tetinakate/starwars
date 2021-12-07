import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { App } from './components/app';
import './index.css';

// https://swapi.dev/

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// const swapi = new SwapiService();

// swapi.getPlanets(3)
//   .then((p) => {
//       console.log(p.name)
//   })