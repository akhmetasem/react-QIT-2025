// App.js
import React, { useState } from "react";
import ThemeContext from "./t\hemeContext";
import ChildComponent from "./CHaildComponent";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <h1>Тақырып: {theme}</h1>
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
