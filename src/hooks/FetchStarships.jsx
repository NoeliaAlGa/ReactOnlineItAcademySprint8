
  export const fetchStarships = () => {
    return fetch('https://swapi.dev/api/starships/').then(response => response.json());
  }
