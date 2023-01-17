import React from 'react';
import {NavButtons, DivButtons} from '../../styleComponents/styleApp';
import { Link } from "react-router-dom";
import { fetchStarships } from '../../hooks/FetchStarships';

const NavStarWars = () => {
    const urlActualPage = 'https://swapi.dev/api/starships/?page=1';

    return (
        <DivButtons>
            <Link to="/"><NavButtons><b>HOME</b></NavButtons></Link>
            <Link to="/Starships/"><NavButtons onClick="reload()"><b>STARSHIPS</b></NavButtons></Link>
        </DivButtons>
    )
}
export default NavStarWars;