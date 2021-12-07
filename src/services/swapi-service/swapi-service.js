class SwapiService {
    constructor() {
      this._apiBase = 'https://swapi.dev/api';
      this._apiImgCharacters = "https://starwars-visualguide.com/assets/img/characters/";
      this._apiImgPlanets = "https://starwars-visualguide.com/assets/img/planets/";
      this._apiImgStarships = "https://starwars-visualguide.com/assets/img/starships/";
      this.apiBasePage = 1;
    }
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if(!res.ok){
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
  
    async getAllPeople(offset = this.apiBasePage) {
      const res = await this.getResource(`/people/?page=${offset}`);
      return res.results;
    }
    getPerson(id) {
      return this.getResource(`/people/${id}/`);
    }
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results;
    }
    getPlanet(id) {
      return this.getResource(`/planets/${id}/`);
    }
    async getAllStarShips() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    }
    getStarShips(id) {
      return this.getResource(`/starships/${id}/`);
    }
    getCharactersImg(id) {
      const res = `${this._apiImgCharacters}${id <= 16 ? id : id + 1 }`;
      return res;
    }
    getPlanetImg(id) {
      const res = `${this._apiImgPlanets}${id}`;
      return res;
      
    }
    getStarshipsImg(id) {
      const res = `${this._apiImgStarships}${id}`;
      return res;
      
    }
  
  }
  export default SwapiService;