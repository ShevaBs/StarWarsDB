import React, { Component } from 'react';
import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import {PersonDetails, PlanetDetails, StarshipDetails} from '../sw-components/';
import {SwapiContextProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";


export default class App extends Component {
  swapiService = new SwapiService();

  render() {

    return (


      <div className='container-md'>
        <ErrorBoundary>
          <SwapiContextProvider value={this.swapiService} >
            <Header/>
            <RandomPlanet/>

            <PersonDetails itemId={11}/>
            <StarshipDetails itemId={11}/>
            <PlanetDetails itemId={11}/>

            <PersonList/>
            <PlanetList/>
            <StarshipList/>
          </SwapiContextProvider>
        </ErrorBoundary>
      </div>
    )
  }
  
}

