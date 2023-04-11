import "./card.css";



function Card(data) {
  const { sum, valyt, type, category, day } = data;
  return (
    <div className="card rounded-lg ">
      <div className="sum text-left">{`${sum} ${valyt}`}</div>
      <div className="info text-right">
        <h1>{category}</h1>
        <h1>{day}</h1>
      </div>
    </div>
  );
};

export default Card;
