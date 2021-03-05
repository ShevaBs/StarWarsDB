class SwapiService {
  _apiBase = 'https://swapi.dev/api'
  _imageBase = 'https://starwars-visualguide.com/assets/img'

  getResource = async(url) => {
    const req = await fetch(this._apiBase + url);

    if(!req.ok) {
      throw new Error(`Could not fetch ${req.url}! Status: ${req.status}`);
    }

    return await req.json()
  }

  getAllPeople = async () => {
    const people = await this.getResource('/people/');
    return people.results.map(this._transformPeople);
  }

  getPerson = async (id) => {    
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPeople(person);
  }

  getAllPlanets = async () => {
    const planets = await this.getResource('/planets/');
    return planets.results.map(this._transformPlanet)
  }

  getPlanet = async(id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet)
  }

  getAllStarships = async () => {
    const starships = await this.getResource('/starships/');
    return starships.results.map(this._transformStarships);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`)
    return this._transformStarships(starship);

  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  getPeopleImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformPeople = (people) => {
    return {
      id: this._extractId(people),
      name: people.name,
      gender: people.gender,
      birthYear: people.birth_year,
      eyeColor: people.eye_color
    }
  }

  _transformStarships = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }
}


export default SwapiService;