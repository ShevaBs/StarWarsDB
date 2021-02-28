import React, { Component } from 'react';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import Header from '../header/';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';


export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  
  
  render() {
    const {hasError} = this.state;
    
    if(hasError) {
      return <ErrorIndicator/>
    }

    
    return (
      <div className='container-md'>
        <Header/>
        <RandomPlanet/>
        <ErrorButton/>

        <PeoplePage/>
        
        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList 
              onPersonSelected={this.onItemSelected}
              getData={this.swapiService.getAllPlanets}/>
          </div>
          <div className='col-md-6'>
            {/* <PersonDetails personId={personId}/> */}
          </div>
        </div>

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList
              onPersonSelected={this.onItemSelected}
              getData={this.swapiService.getAllStarships}/>
          </div>
          <div className='col-md-6'>
            {/* <PersonDetails personId={personId}/> */}
          </div>
        </div>

      </div>
    )
  }
  
}

