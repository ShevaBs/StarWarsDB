import React, { Component } from 'react';
import ErrorButton from '../error-button/error-button';
import Header from '../header/';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from "../error-boundary";
import Row from "../row";
import ItemDetails from "../item-details";


export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const personDetails = (
      <ItemDetails
        itemId={2}
        getData={this.swapiService.getPerson}
        itemImage={this.swapiService.getPeopleImage}/>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={this.swapiService.getStarship}
        itemImage={this.swapiService.getStarshipImage}/>
    );

    return (
      <div className='container-md'>
        <ErrorBoundary>
          {/*<Header/>*/}
          {/*<RandomPlanet/>*/}
          {/*<ErrorButton/>*/}

          {/*<PeoplePage/>*/}

          <Row left={personDetails} right={starshipDetails}/>
        </ErrorBoundary>
      </div>
    )
  }
  
}

