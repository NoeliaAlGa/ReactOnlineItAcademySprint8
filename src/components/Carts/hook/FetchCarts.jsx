export const fetchCarts = (urlPilot) => {
    return fetch(urlPilot).then(response => response.json());
  }