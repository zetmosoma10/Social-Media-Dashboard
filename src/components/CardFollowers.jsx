import { FaFacebookF } from "react-icons/fa";

function CardFollowers() {
  return (
    <div className="card-followers">
      <div className="card_header">
        <span className="icon facebook-icon">
          <FaFacebookF />
        </span>
        <p className="card_name">@nathanf</p>
      </div>
      <h2 className="followers_numbers">1987</h2>
      <p className="followes-text">FOLLOWERS</p>
      <div className="card_rate">
        <img src="images/icon-up.svg" />
        <p>12 Today</p>
      </div>
    </div>
  );
}

export default CardFollowers;
