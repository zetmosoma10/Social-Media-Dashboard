import { useState } from "react";
import CardFollowers from "./components/CardFollowers";
import CardLikes from "./components/CardLikes";
import Toggle from "./components/Toggle";

function App() {
  const [theme, setTheme] = useState(true);

  const themeToggler = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return <Toggle handleToggle={themeToggler} theme={theme} />;
}

export default App;
