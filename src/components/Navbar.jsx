import { useContext } from "react";
import Toggle from "./Toggle";
import { ThemeContext } from "../App";

function NavBar() {
  const { themeClass } = useContext(ThemeContext);
  return (
    <nav className={themeClass}>
      <div className="nav-container container">
        <div className="nav-header ">
          <h1 className="heading">Social Media Dashboard</h1>
          <p className="total-followers">Total Followers: 23,004</p>
        </div>
        <Toggle />
      </div>
    </nav>
  );
}

export default NavBar;
