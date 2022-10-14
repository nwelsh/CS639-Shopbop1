import React from "react";
import Navbar from "../Navigation/Navbar";
import Home from "../Home/Home";

const Welcome = () =>{
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Home></Home>
    </React.Fragment>
  );
}

export default Welcome;