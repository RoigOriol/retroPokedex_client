import React from "react";
import { useTheme } from "../../context/ThemeContext";
import sol from '../../assets/images/sol.png';
import lluna from'../../assets/images/lluna.png'
function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
   <button onClick={toggleTheme} className="button">
  {darkMode ? <img src={sol} alt="Sol" style={{ width: 24, height: 24 }} /> : <img src={lluna} alt="Luna" style={{ width: 24, height: 24 }} />}
  {darkMode ? " Light Mode" : " Dark Mode"}
</button>
  );
}

export default ThemeToggle;
