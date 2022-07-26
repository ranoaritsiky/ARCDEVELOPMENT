import React, { useContext } from "react";
import Switch from "@mui/material/Switch";
import { themeContext } from "../../contexts/themeContext";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches(props) {
  const { setState } = useContext(themeContext);
  const toogleSwitch = () => {
    setState(!props.stateTheme);
  };

  return <Switch {...label} color="secondary" onChange={toogleSwitch} />;
}
