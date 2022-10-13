import React from "react";
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const Swipe = () =>{

  return (
    <React.Fragment>
      <Card>
        <h2>Choices</h2>
        <NavLink to="/welcome" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant="outlined"
          >
            Finish
          </Button>
        </NavLink>

        <NavLink to="/choices" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant="outlined"
          >
            Back
          </Button>
        </NavLink>
      </Card>
    </React.Fragment>
  );
}

export default Swipe;