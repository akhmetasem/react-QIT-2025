
import React, { useContext } from "react";
import ThemeContext from "./themeContext";

function ChildCompanent() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <p>Takiripti baskaru {theme}</p>
      <button onClick={toggleTheme}>
        Takiripti austiru
      </button>
    </div>
  );
}

export default ChildCompanent;
