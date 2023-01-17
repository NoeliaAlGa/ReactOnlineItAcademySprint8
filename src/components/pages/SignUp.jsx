import React from "react";
import Head from '../../components/Head';
import NavStarWars from "../navigation/NavStarWars";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <Head />
    <NavStarWars />
    <form>
      <h2>SIGN UP</h2>
      <div className="mb-3" controlId="formBasicName">
        <label>Name </label>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div className="mb-3" controlId="formBasicEmail">
        <label>Email address </label>
        <input type="email" placeholder="Enter email" />
      </div>
      <div className="mb-3" controlId="formBasicPassword">
        <label>Password </label>
        <input type="password" placeholder="Password" />
      </div>
      <Link to="/Starships"><button type="submit">Submit </button></Link>
    </form>
    </>
  );
};

export default SignUp;