import { useContext } from "react";
import { ThemeContext } from "../App";

function Toggle() {
  const { themeToggler, theme, themeClass } = useContext(ThemeContext);
  return (
    <div className={`toggle-container ${themeClass}`}>
      <p className={`toggle-text `}>Dark Mode</p>
      <div onClick={themeToggler} className={`toggler ${themeClass}`}>
        <div className="toggle"></div>
      </div>
    </div>
  );
}

export default Toggle;
