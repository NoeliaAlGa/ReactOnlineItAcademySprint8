import React from 'react';
import {NavButtons, DivButtons} from '../../styleComponents/styleApp';
import { Link } from "react-router-dom";


const NavStarWars = () => {
    const toLogedUser =
    window.localStorage.getItem("LogedUser") === null
      ? <Link to="/LogInUser"><NavButtons onClick="reload()"><b>STARSHIPS</b></NavButtons></Link>
      : <Link to="/Starships/"><NavButtons onClick="reload()"><b>STARSHIPS</b></NavButtons></Link>;

    return (
        <DivButtons>
            <Link to="/"><NavButtons><b>HOME</b></NavButtons></Link>
            <>{toLogedUser}</>
        </DivButtons>
    )
}
export default NavStarWars;