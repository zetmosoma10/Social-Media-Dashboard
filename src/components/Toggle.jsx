import { useContext } from "react";
import { ThemeContext } from "../App";

function Toggle() {
  const { themeToggler } = useContext(ThemeContext);
  return (
    <div className={`toggle-container`}>
      <p className={`toggle-text `}>Dark Mode</p>
      <div onClick={themeToggler} className={`toggler `}>
        <div className="toggle"></div>
      </div>
    </div>
  );
}

export default Toggle;
