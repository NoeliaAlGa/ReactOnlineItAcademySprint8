import React, { useState} from "react";
import Head from '../../components/Head';
import NavStarWars from "../navigation/NavStarWars";
import GuardarSignUp from "../GuardarSignUp";
import imgSignUp from "../../img/SignUp.jpg";
import {DivLogInSignUp, BotonLogInSignUp, LabelsLogInSignUp, ImgLogInSignUp, DivLogInSignUpImg, StyleForm, H2LogInSignUp } from "../../styleComponents/styleLogInSignUp";
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
    <DivLogInSignUpImg>
      <ImgLogInSignUp src={imgSignUp}  alt="kylo ren and stormtroopers"></ImgLogInSignUp>
      <StyleForm>
        <H2LogInSignUp>SIGN UP</H2LogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Name </LabelsLogInSignUp>
          <input type="text" placeholder="Enter your name" onChange={(e) => handleInput(e, "nombreUsuario")}/>
        </DivLogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Email address </LabelsLogInSignUp>
          <input type="email" placeholder="Enter email" onChange={(e) => handleInput(e, "emailUsuario")}/>
        </DivLogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Password </LabelsLogInSignUp>
          <input type="password" placeholder="Password" onChange={(e) => handleInput(e, "contraseñaUsuario")}/>
        </DivLogInSignUp>
        <Link to=""><BotonLogInSignUp type="submit" onClick={() => GuardarSignUp(nombreUsuario, emailUsuario, contraseñaUsuario)}>SIGN UP</BotonLogInSignUp></Link>
      </StyleForm>
    </DivLogInSignUpImg>
    </>
  );
};

export default SignUp;