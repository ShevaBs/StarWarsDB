import React, { Component } from 'react';
import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import {PersonDetails, PlanetDetails, StarshipDetails} from '../sw-components/';


export default class App extends Component {

  render() {

    return (


      <div className='container-md'>
        <ErrorBoundary>
          <Header/>
          <RandomPlanet/>

          <PersonDetails itemId={11}/>
          <StarshipDetails itemId={11}/>
          <PlanetDetails itemId={11}/>

          <PersonList/>

          <PlanetList/>

          <StarshipList>
            {({name}) => <span>{name}</span>}
          </StarshipList>

        </ErrorBoundary>
      </div>
    )
  }
  
}

