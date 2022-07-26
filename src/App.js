import {useState} from 'react'

import NavBar from "./components/Header/Header";
import TodoMain from "./components/Todo/TodoMain";

import User from "./components/Users/Index"

// import context
import { themeContext } from "./contexts/themeContext";

function App() {
  const [theme,setTheme]=useState({
    isDarkTheme: false,
    lightTheme: {
      text: "#1B2631",
      background: "#5499C7",
    },
    darkTheme: {
      text: "#F8F9F9",
      background: "#1B2631",
    },
  })
  const changeTheme=(isDark)=>{
    setTheme(
      {
        ...theme,isDarkTheme:isDark
      }
    );
  }
  return (
    <div className="App">
      
      <themeContext.Provider value={{state:theme,setState:changeTheme}} >
        <NavBar />
        <TodoMain />
        <User/>
      </themeContext.Provider>
    </div>
  );
}

export default App;
