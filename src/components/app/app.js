import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import { Header } from "../header";
import { Characters } from "../pages/characters";
import { Planets } from "../pages/planets";
import { Starships } from "../pages/starships";
import { NotFound } from "../pages/404";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
//import { API } from "../../constants/api";

import "./app.css";

export const App = () => {
    return(
        <div className="app">

          <Router>
            <Header />
            <Switch>
              <Route path="" element={<ItemList />} />
              <Route path="/characters/" element={<Characters />} />
              <Route path="/planets/" element={<Planets />} />
              <Route path="/starships/" element={<Starships />} />
              <Route path="*" element={<NotFound />} />
            </Switch>
          </Router>
          
          <RandomPlanet />
          
        </div>
    )
}