import React from 'react';
import {NavButtons, DivButtons} from '../../styleComponents/styleApp';
import { Link } from "react-router-dom";

const NavStarWars = () => {
    return (
        <DivButtons>
            <Link to="/"><NavButtons><b>HOME</b></NavButtons></Link>
            <Link to="/Starships"><NavButtons><b>STARSHIPS</b></NavButtons></Link>
        </DivButtons>
    )
}
export default NavStarWars;