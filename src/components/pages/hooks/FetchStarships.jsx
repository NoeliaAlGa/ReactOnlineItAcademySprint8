
  export const fetchStarships = (urlActual) => {
    return fetch(urlActual).then(response => response.json());
  }
