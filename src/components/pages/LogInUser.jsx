import React, {useState} from "react";
import Head from '../../components/Head';
import NavStarWars from "../navigation/NavStarWars";
import BuscarUsuarios from "../BuscarUsuarios";
import imgLogIn from "../../img/logIn.jpg"
import {DivLogInSignUp, BotonLogInSignUp, LabelsLogInSignUp, ImgLogInSignUp, DivLogInSignUpImg, StyleForm, H2LogInSignUp } from "../../styleComponents/styleLogInSignUp";
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
    <DivLogInSignUpImg>
      <ImgLogInSignUp src={imgLogIn}  alt="Rey and Ben"></ImgLogInSignUp>
      <StyleForm>
        <H2LogInSignUp>LOG IN</H2LogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Name</LabelsLogInSignUp>
          <input type="text" placeholder="Enter your name" onChange={(e) => handleInput(e, "nombreUsuario")}/>
        </DivLogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Password</LabelsLogInSignUp>
          <input type="password" placeholder="Password" onChange={(e) => handleInput(e, "contraseñaUsuario")}/>
        </DivLogInSignUp>
        <Link to=""><BotonLogInSignUp type="submit" onClick={() => BuscarUsuarios(nombreUsuario, contraseñaUsuario)}>LOG IN</BotonLogInSignUp></Link>
      </StyleForm>
    </DivLogInSignUpImg>
    </>
  );
};

export default LogInUser;
