import React from "react";
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const Choices = () =>{

  return (
    <React.Fragment>
      <Card>
        <h2>Choices</h2>
        <NavLink to="/swipe" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant="outlined"
          >
            Continue
          </Button>
        </NavLink>

        <NavLink to="/welcome" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant="outlined"
          >
            Back
          </Button>
        </NavLink>
      </Card>

      <Card>

      </Card>
    </React.Fragment>
  );
}

export default Choices;