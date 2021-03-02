import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner';
import './person-details.css';
import ErrorButton from "../error-button/error-button";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false
  }
  
  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.setState({loading: true});
      this.updatePerson();
    }
  }

  updatePerson = () => {
    if(!this.props.personId) {
      return;
    }

    this.swapiService.getPerson(this.props.personId)
      .then((person) => {
        this.setState({
          person,
          loading: false
        })
      });
  }

  render() { 
    if(!this.state.person) {
      return <span>Select person from list</span>
    }

    const {person, loading, error} = this.state;

    const personItem = !(loading || error) ? <PersonView person={person}/> : null,
          spinner = loading ? <Spinner/> : null,
          errorMessage = error ? <ErrorIndicator/> : null; 
    
    
    return (
      <div className='person-details card'>
        {spinner}
        {personItem}
        {errorMessage}
      </div>
    )
  }
}

const PersonView = ({person}) => {
  const {name, id, gender, birthYear, eyeColor} = person;

  return (
    <>
      <img className='person-image'
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
        
        <div className='card-body'>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton/>
        </div>
    </>
  )
}
