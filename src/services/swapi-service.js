class SwapiService {
  _apiBase = 'https://swapi.dev/api'

  getResource = async(url) => {
    const req = await fetch(this._apiBase + url);

    if(!req.ok) {
      throw new Error(`Could not fetch ${req.url}! Status: ${req.status}`);
    }

    return await req.json()
  }

  getAllPeople = async () => {
    const people = await this.getResource('/people/');
    return await people.results.map(this._transformPeople);
  }

  getPerson = async (id) => {    
    const person = await this.getResource(`/people/${id}/`);
    return await this._transformPeople(person)
  }

  getAllPlanets = async () => {
    const planets = await this.getResource('/planets/');
    return await planets.map(this._transformPlanet)
  }

  getPlanet = async(id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return await this._transformPlanet(planet)
  }

  getAllStarships = () => {
    return this.getResource('/starships/')
  }

  getStarship = (id) => {
    return this.getResource(`/starships/${id}`)
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
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
}


export default SwapiService;