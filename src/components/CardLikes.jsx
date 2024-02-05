import { FaFacebookF } from "react-icons/fa";

function CardLikes() {
  return (
    <div className="card-like">
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
