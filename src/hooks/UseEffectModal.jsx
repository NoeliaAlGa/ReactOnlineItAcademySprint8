import {useEffect, useState} from "react";
import { fetchImgStarships } from "./FetchImgStarships";
import ExtraerNumImatge from "./ExtraerNumImatge";

function UseEffectModal(nave) {
    const [imgStarshipAct, setImgStarshipAct] = useState([]);
    const urlImage = nave.url;
    const numImage = ExtraerNumImatge(urlImage);
    useEffect(() => {
      fetchImgStarships(numImage)
        .then(response => {
          setImgStarshipAct(response);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
    return imgStarshipAct
}

export default UseEffectModal