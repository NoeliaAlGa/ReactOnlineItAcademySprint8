export const fetchImgStarships = (num) => {
    const urlImg = `https://starwars-visualguide.com/assets/img/starships/${num}.jpg`;
    const noImgStarship = "https://st2.depositphotos.com/1560768/6162/i/450/depositphotos_61621057-stock-photo-no-image-available.jpg";

    return fetch(urlImg)
            .then(response => {
                return (response.status === 200) ? urlImg : noImgStarship
            })
    }
