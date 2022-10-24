import "./Card.css";
import styled from "styled-components";

function Card({ data }) {
  console.log(data);
  return (
    <Cont color={data.color} className="card">
      <div className="card__title">{data.title}</div>
      <div className="card__cont">
        <div className="card__txt">{data.description}</div>
        <div className="card__secondCont">
          <div className="card__time">
            {`${data.startDate} ${data.startTime}`}
            <br />
            {`${data.endDate} ${data.endTime}`}
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
