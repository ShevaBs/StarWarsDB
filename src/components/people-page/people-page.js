import React, { Component } from 'react'
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class PeoplePage extends Component {

  state = {
    personId: null,
    hasError: false
  }

  onPersonSelected = (id) => {
    this.setState({personId: id})
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    const {personId, hasError} = this.state;

    if(hasError) {
      return <ErrorIndicator/>
    }

    return (
      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList onPersonSelected={this.onPersonSelected}/>
        </div>
        <div className='col-md-6'>
          <PersonDetails personId={personId}/>
        </div>
        <ErrorButton/>
      </div>
    )
  }
}