import React, {useState} from "react";
import Head from '../../components/navigation/Head';
import NavStarWars from "../navigation/NavStarWars";
import BuscarUsuarios from "../pages/hooks/BuscarUsuario";
import imgLogIn from "../../img/logIn.jpg"
import {DivLogInSignUp, BotonLogInSignUp, LabelsLogInSignUp, ImgLogInSignUp, DivLogInSignUpImg, StyleForm, H2LogInSignUp, TextInformation, InformationRegistered } from "../../components/pages/style/styleLogInSignUp";
import { Link } from "react-router-dom";

const LogInUser = () => {
debugger;
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
          <input type="text" placeholder="Enter your name" onChange={(e) => handleInput(e, "nombreUsuario")} required/>
        </DivLogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Password</LabelsLogInSignUp>
          <input type="password" placeholder="Password" onChange={(e) => handleInput(e, "contraseñaUsuario")} required/>
        </DivLogInSignUp>
        <TextInformation>* Being registered is mandatory to see the information of the starships.</TextInformation>
        <Link to="/Starships"><BotonLogInSignUp type="submit" onClick={() =>
          BuscarUsuarios(nombreUsuario, contraseñaUsuario)
        }>LOG IN</BotonLogInSignUp></Link>
        <div>
          <InformationRegistered>You not registered?</InformationRegistered>
          <Link to="/SignUp"><BotonLogInSignUp type="submit">SIGN UP</BotonLogInSignUp></Link>
        </div>
      </StyleForm>
    </DivLogInSignUpImg>
    </>
  );
};

export default LogInUser;
