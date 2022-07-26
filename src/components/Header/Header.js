import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import { themeContext } from "../../contexts/themeContext";

import {connect} from 'react-redux';

import BasicSwitches from "./Switch";

function NavBar(props) {
  const { state } = useContext(themeContext);
  const theme = state.isDarkTheme ?  state.darkTheme : state.lightTheme ;
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <BasicSwitches stateTheme={state.isDarkTheme} />

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default connect((state)=>{
  return {
    users:state
  }
})(NavBar)