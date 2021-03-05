import React, { Component } from 'react'
import ItemList from '../item-list';
import PersonDetails from '../item-details';
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    personId: null,
  }

  onItemSelected = (id) => {
    this.setState({personId: id})
  }


  render() {
    const {personId} = this.state;


    const itemList = (
      <ItemList
        onPersonSelected={this.onItemSelected}>
        {
          (item) => (
            `${item.name} (${item.birthYear} )`
          )
        }
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={personId}/>
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    )
  }
}