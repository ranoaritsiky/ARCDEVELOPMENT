
import React, { useState, useContext } from "react";
import Switch from "@mui/material/Switch";
import { themeContext } from "../../contexts/themeContext";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  const [switchState, setSwitchState] = useState(false);
  const { setState } = useContext(themeContext);
  

  const toogleSwitch = () => {
    setSwitchState(!switchState)
    setState(switchState)
  };

  return <Switch {...label} defaultChecked  color="secondary" onChange={toogleSwitch} />;
}
