import React from "react";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import {NavLink} from "react-router-dom";

const Welcome = () =>{

  return (
    <React.Fragment>
      <Card>
        <h2>Bop @ Shop</h2>
        <NavLink to="/choices" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant="outlined"
          >
            Go to choices page
          </Button>
        </NavLink>
      </Card>
    </React.Fragment>
  );
}

export default Welcome;