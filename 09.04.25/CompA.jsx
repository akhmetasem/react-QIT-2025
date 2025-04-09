import React, { useState, createContext } from "react";
import ThemeChange from "./themeProvider";


export const ThemeContext = createContext();

const CompA = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", height: "100vh" }}>
        <h1>Changing theme</h1>
        <ThemeChange />
      </div>
    </ThemeContext.Provider>
  );
};

export default CompA;
