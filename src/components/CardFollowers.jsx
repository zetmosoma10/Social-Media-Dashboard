function CardFollowers({ item }) {
  const topBorder = {
    borderColor: item.borderColor,
  };

  return (
    <div className={`card-followers`} style={topBorder}>
      <div className="card_header">
        <img src={item.socialIcon} />
        <p className="card_name">{item.username}</p>
      </div>
      <h2 className="followers_numbers">{item.numbers}</h2>
      <p className="followes-text">{item.text}</p>
      <div className="card_rate">
        <img src={item.todayIcon} />
        <p style={{ color: `${item.todayTextColor}` }}>{item.todayText}</p>
      </div>
    </div>
  );
}

export default CardFollowers;
