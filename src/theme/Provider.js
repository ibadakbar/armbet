import React from "react"

import { ThemeProvider } from "styled-components";
//import useLocalStorage from "../hooks/UseLocalStorage"
import theme from "./index";
import darkTheme from "./index";

const themeLight = theme;
const themeDark = darkTheme;

const defaultState = {
  theme: false,
  toggleDarkMode: () => {},
}

export const themeContext = React.createContext(defaultState)

export const myProvider = props => {
  //const [theme, setTheme] = useLocalStorage(false)
  /*const toggleDarkMode = () => {
    setTheme(!themeLight)
  }*/

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <themeContext.Provider value={theme}>
      {props.children}
      </themeContext.Provider>
    </ThemeProvider>
  )
}