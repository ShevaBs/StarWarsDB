import React, { Component } from 'react'
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from "../../services/swapi-service";
import Row from "../row";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    personId: null,
    hasError: false
  }

  onItemSelected = (id) => {
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

    const itemList = (
      <ItemList
        onPersonSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear} )`}/>
    );

    const personDetails = (
      <PersonDetails personId={personId}/>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    )
  }
}