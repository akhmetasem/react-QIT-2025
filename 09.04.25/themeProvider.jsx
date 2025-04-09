import React, { useContext } from "react";
import { ThemeContext } from "./CompA";

const ThemeChange = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const clickTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h2>ThemeContext</h2>
      <p>Қазіргі background: {theme}</p>
      <button onClick={clickTheme}>
        Тақырыпты ауыстыру
      </button>
    </div>
  );
};

export default ThemeChange;
