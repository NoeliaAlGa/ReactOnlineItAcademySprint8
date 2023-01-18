import React, {useState} from "react";
import Head from '../../components/Head';
import NavStarWars from "../navigation/NavStarWars";
import BuscarUsuarios from "../BuscarUsuarios";
import { Link } from "react-router-dom";

const LogInUser = () => {

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseñaUsuario, setContraseñaUsuario] = useState("");

  const handleInput = (e, nombreInput) => {
    if(nombreInput === "nombreUsuario") {
      setNombreUsuario(e.target.value);
    }
    if(nombreInput === "contraseñaUsuario") {
      setContraseñaUsuario(e.target.value);
    }
  }

  return (
    <>
    <Head />
    <NavStarWars />
    <form>
      <h2>LOG IN</h2>
      <div>
        <label>Name </label>
        <input type="text" placeholder="Enter your name" onChange={(e) => handleInput(e, "nombreUsuario")}/>
      </div>
      <div>
        <label>Password </label>
        <input type="password" placeholder="Password" onChange={(e) => handleInput(e, "contraseñaUsuario")}/>
      </div>
      <Link to=""><button type="submit" onClick={() => BuscarUsuarios(nombreUsuario, contraseñaUsuario)}>Submit </button></Link>
    </form>
    </>
  );
};

export default LogInUser;
