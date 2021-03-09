import React, { Component } from 'react';
import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import {SwapiContextProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";


export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className='container-md'>
        <ErrorBoundary>
          <SwapiContextProvider value={this.swapiService} >
            <Header/>
            <RandomPlanet/>

            <PeoplePage/>
            <PlanetPage/>
            <StarshipPage/>

          </SwapiContextProvider>
        </ErrorBoundary>
      </div>
    )
  }
  
}

