import { useState } from "react";
import Card from "./Card";
import "./Event.css";

const tempCard = {
  title: "BINGO TIME",
  txt: "play bingo and earn prizes",
  time1: "22.10.12",
  time2: "12:30-13:30",
};

function Event() {
  const buttons = ["grid", "tag", "scrap"];
  const [pageNum, setPageNum] = useState(0);
  return (
    <div className="event">
      <h1 className="event__title">event</h1>
      <div className="event__buttonCont">
        {buttons.map((each, i) => (
          <div
            className={
              i !== pageNum
                ? "event__button"
                : "event__button event__button--selected"
            }
            onClick={() => setPageNum(i)}
          >
            {each}
          </div>
        ))}
      </div>
      <div className="event__cont">
        <Card data={tempCard} />
      </div>
    </div>
  );
}

export default Event;
