import React, { Component } from 'react';
import ErrorButton from '../error-button/error-button';
import Header from '../header/';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from "../error-boundary";


export default class App extends Component {
  swapiService = new SwapiService();

  render() {

    return (
      <div className='container-md'>
        <ErrorBoundary>
          <Header/>
          <RandomPlanet/>
          <ErrorButton/>

          <PeoplePage/>
        </ErrorBoundary>
      </div>
    )
  }
  
}

