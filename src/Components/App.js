import React from "react";
// import {ThemeProvider} from '@mui/styles';

import Header from "./ui/header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { testCenter,useStyles,styleHr } from "./ui/theme";


function StylingButton(){
  const classes=useStyles()
  return <Button className={classes.root}>Styled with hook MF</Button>
}

function App() {
  const classes = testCenter();
  const classesHr=styleHr()
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `
              Cras mattis consectetur purus sit amet fermentum.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
        <div className={classes.root}>

          <StylingButton />
        </div>
      </Container>
      <hr className={classesHr.root}/>
    </>
  );
}

export default App;
