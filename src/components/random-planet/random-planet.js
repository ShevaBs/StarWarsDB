import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator/error-indicator';
export default class RandomPlanet extends Component {
  swapiService = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePlanet();
    this.timerId = setInterval(this.updatePlanet, 1000000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false})
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }
 
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 15) + 2;
    // const id = 12223;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const {planet, loading, error} = this.state;
    
    const errorMessage = error ? <ErrorIndicator/> : null,
          spinner = loading ? <Spinner/> : null,
          content = !(loading || error) ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}

const PlanetView = ({planet}) => {

  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <>
      <img className="planet-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
            alt='random'/>
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}