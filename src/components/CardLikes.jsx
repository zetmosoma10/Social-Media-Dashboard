import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { ThemeContext } from "../App";

function CardLikes({ item }) {
  const { themeClass } = useContext(ThemeContext);
  return (
    <div className={`card-like ${themeClass}`}>
      <div className="card_likes-header">
        <p>{item.text}</p>
        <img src={item.socialIcon} alt="" />
      </div>
      <div className="card_likes-number">
        <h3>{item.numbers}</h3>
        <div className="card_rate likes-rate">
          <img src={item.todayIcon} />
          <p style={{ color: `${item.todayTextColor}` }}>{item.todayText}</p>
        </div>
      </div>
    </div>
  );
}

export default CardLikes;
