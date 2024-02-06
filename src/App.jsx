import { useState, createContext } from "react";
import CardFollowers from "./components/CardFollowers";
import CardLikes from "./components/CardLikes";
import NavBar from "./components/Navbar";
import { followersData, likesData } from "./data";

const ThemeContext = createContext();
export { ThemeContext };

function App() {
  const [theme, setTheme] = useState(false);
  const [cardData, setCardData] = useState(followersData);
  const themeToggler = () => {
    setTheme((prevTheme) => !prevTheme);
    document.body.classList.toggle("light");
  };

  const renderCardFollowers = cardData.map((card) => (
    <CardFollowers key={card.socialIcon} item={card} />
  ));

  const renderCardLikes = likesData.map((card, index) => (
    <CardLikes key={index} item={card} />
  ));

  return (
    <ThemeContext.Provider value={{ themeToggler }}>
      <NavBar />
      <div className="container grid-container">
        <div className="grid cols-2 cols-4 grid-followers">
          {renderCardFollowers}
        </div>
        <h2 className="likes-heading">Overview - Today</h2>
        <div className="grid cols-2 cols-4 grid-likes">{renderCardLikes}</div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
