class SwapiService {
  _apiBase = 'https://swapi.dev/api'

  getResource = async(url) => {
    const req = await fetch(this._apiBase + url);

    if(!req.ok) {
      throw new Error(`Could not fetch ${req.url}! Status: ${req.status}`);
    }

    return await req.json()
  }

  getAllPeople = () => {
    return this.getResource('/people/');
  }

  getPerson = (id) => {    
    return this.getResource(`/people/${id}/`);
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
}


export default SwapiService;