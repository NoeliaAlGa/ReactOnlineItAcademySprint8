import React, { useState} from "react";
import Head from '../../components/navigation/Head';
import NavStarWars from "../navigation/NavStarWars";
import GuardarSignUp from "../pages/hooks/GuardarSignUp";
import imgSignUp from "../../img/SignUp.jpg";
import {DivLogInSignUp, BotonLogInSignUp, LabelsLogInSignUp, ImgLogInSignUp, DivLogInSignUpImg, StyleForm, H2LogInSignUp, TextInformation, InformationRegistered } from "../../components/pages/style/styleLogInSignUp";
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
          <input type="text" placeholder="Enter your name" onChange={(e) => handleInput(e, "nombreUsuario")} required/>
        </DivLogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Email address </LabelsLogInSignUp>
          <input type="email" placeholder="Enter email" onChange={(e) => handleInput(e, "emailUsuario")} required/>
        </DivLogInSignUp>
        <DivLogInSignUp>
          <LabelsLogInSignUp>Password </LabelsLogInSignUp>
          <input type="password" placeholder="Password" onChange={(e) => handleInput(e, "contraseñaUsuario")}/>
        </DivLogInSignUp>
        <TextInformation>* Being registered is mandatory to see the information of the starships.</TextInformation>
        <Link to="/Starships"><BotonLogInSignUp type="submit" onClick={() => GuardarSignUp(nombreUsuario, emailUsuario, contraseñaUsuario)} required>SIGN UP</BotonLogInSignUp></Link>
        <div>
          <InformationRegistered>Are you registered?</InformationRegistered>
          <Link to="/LogInUser"><BotonLogInSignUp type="submit">LOG IN</BotonLogInSignUp></Link>
        </div>
      </StyleForm>
    </DivLogInSignUpImg>
    </>
  );
};

export default SignUp;