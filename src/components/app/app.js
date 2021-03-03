import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from "../error-boundary";
import Row from "../row";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";


export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const personDetails = (
      <ItemDetails
        itemId={2}
        getData={this.swapiService.getPerson}
        itemImage={this.swapiService.getPeopleImage}>

        <Record field='gender' label='Gender'/>
        <Record field='eyeColor' label='Eye Color'/>
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={this.swapiService.getStarship}
        itemImage={this.swapiService.getStarshipImage}>

        <Record field='model' label='Model'/>
        <Record field='length' label='Length'/>
        <Record field='costInCredits' label='Cost'/>
      </ItemDetails>
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

