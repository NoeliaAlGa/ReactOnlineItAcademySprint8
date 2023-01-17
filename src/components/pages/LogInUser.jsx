import React from "react";
import Head from '../../components/Head';
import NavStarWars from "../navigation/NavStarWars";
import { Link } from "react-router-dom";

const LogInUser = () => {
  return (
    <>
    <Head />
    <NavStarWars />
    <form>
      <h2>LOG IN</h2>
      <div className="mb-3" controlId="formBasicName">
        <label>Name </label>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div className="mb-3" controlId="formBasicPassword">
        <label>Password </label>
        <input type="password" placeholder="Password" />
      </div>
      <Link to="/Starships"><button type="submit" >Submit </button></Link>
    </form>
    </>
  );
};

export default LogInUser;
