import React, { useState} from "react";
import Head from '../../components/Head';
import NavStarWars from "../navigation/NavStarWars";
import GuardarSignUp from "../GuardarSignUp"
import { Link } from "react-router-dom";

const SignUp = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [contraseñaUsuario, setContraseñaUsuario] = useState("");

const handleInput = (e, nombreInput) => {
  if(nombreInput === "nombreUsuario") {
    setNombreUsuario(e.target.value);
  }
  if(nombreInput === "emailUsuario") {
    setEmailUsuario(e.target.value);
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
      <h2>SIGN UP</h2>
      <div>
        <label>Name </label>
        <input type="text" placeholder="Enter your name" onChange={(e) => handleInput(e, "nombreUsuario")}/>
      </div>
      <div>
        <label>Email address </label>
        <input type="email" placeholder="Enter email" onChange={(e) => handleInput(e, "emailUsuario")}/>
      </div>
      <div>
        <label>Password </label>
        <input type="password" placeholder="Password" onChange={(e) => handleInput(e, "contraseñaUsuario")}/>
      </div>
      <Link to=""><button type="submit" onClick={() => GuardarSignUp(nombreUsuario, emailUsuario, contraseñaUsuario)}>Submit </button></Link>
    </form>
    </>
  );
};

export default SignUp;