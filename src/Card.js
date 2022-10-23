import "./Card.css";
import styled from "styled-components";

function Card({ data }) {
  return (
    <Cont color={data.color} className="card">
      <div className="card__title">{data.title}</div>
      <div className="card__cont">
        <div className="card__txt">{data.txt}</div>
        <div className="card__secondCont">
          <div className="card__time">
            {data.time1}
            <br />
            {data.time2}
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
