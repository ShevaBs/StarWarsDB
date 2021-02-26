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

  getAllPlanets = () => {
    return this.getResource('/planets/');
  }

  getPlanet = (id) => {
    return this.getResource(`/planets/${id}/`)
  }

  getAllStarships = () => {
    return this.getResource('/starships/')
  }

  getStarship = (id) => {
    return this.getResource(`/starships/${id}`)
  }
}


export default SwapiService;