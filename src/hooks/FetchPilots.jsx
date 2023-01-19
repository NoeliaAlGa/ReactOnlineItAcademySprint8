export const fetchPilots = (urlPilot) => {
    return fetch(urlPilot).then(response => response.json());
  }