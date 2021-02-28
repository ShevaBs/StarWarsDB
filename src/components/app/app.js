import React, { Component } from 'react';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import Header from '../header/';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

export default class App extends Component {

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
        <PeoplePage/>
        <PeoplePage/>
      </div>
    )
  }
  
}

