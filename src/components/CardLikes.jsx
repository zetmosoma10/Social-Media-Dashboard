import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { ThemeContext } from "../App";

function CardLikes() {
  const { themeClass } = useContext(ThemeContext);
  return (
    <div className={`card-like ${themeClass}`}>
      <div className="card_likes-header">
        <p>Likes</p>
        <span className="icon facebook-icon">
          <FaFacebookF />
        </span>
      </div>
      <div className="card_likes-number">
        <h3>52</h3>
        <div className="card_rate likes-rate">
          <img src="images/icon-up.svg" />
          <p>12 Today</p>
        </div>
      </div>
    </div>
  );
}

export default CardLikes;
