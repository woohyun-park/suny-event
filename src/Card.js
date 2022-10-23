import "./Card.css";

function Card({ data }) {
  return (
    <div className="card">
      <div className="card__firstCont">
        <div className="card__title">{data.title}</div>
        <div className="card__txt">{data.txt}</div>
      </div>
      <div className="card__secondCont">
        <div className="card__time">
          {data.time1}
          <br />
          {data.time2}
        </div>
      </div>
    </div>
  );
}

export default Card;
