import React, { Component } from 'react'
import Header from '../header/'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import RandomPlanet from '../random-planet'

export default class App extends Component {

  state = {
    personId: null
  }

  onPersonSelected = (id) => {
    this.setState({personId: id})
  }
  
  render() {
    const {personId} = this.state;
    

    
    return (
      <div className='container-md'>
        <Header/>
        <RandomPlanet/>
  
        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList onPersonSelected={this.onPersonSelected}/>
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={personId}/>
          </div>
        </div>
      </div>
    )
  }
  
}

