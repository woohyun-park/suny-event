import "./Card.css";
import styled from "styled-components";

function Card({ data }) {
  return (
    <Cont color={data.color} className="card">
      <div className="card__title">{data.title.toUpperCase()}</div>
      <div className="card__cont">
        <div className="card__txt">{data.description}</div>
        <div className="card__secondCont">
          <div className="card__time">
            {data.dateType === "0"
              ? `${data.startDate} ${data.startTime}`
              : data.dateType === "1"
              ? `${data.startDate} ${data.endDate}`
              : ""}
          </div>
        </div>
      </div>
    </Cont>
  );
}

const Cont = styled.div`
  background-color: ${(props) => props.color};
`;

export default Card;
