export const API = {
    base: () => `https://swapi.dev/api`,
    persons: (page) => `${API.base()}/people/?page=${page}`,
    planets: (page) => `${API.base()}/planets/?page=${page}`,
    starships: (page) => `${API.base()}/starships/?page=${page}`,
};