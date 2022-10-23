import { useState } from "react";
import Card from "./Card";
import "./Event.css";

const events = {
  ongoing: [
    {
      title: "Bingo Time",
      txt: "play bingo and earn prizes",
      time1: "22.10.12",
      time2: "12:30-13:30",
      color: "#0A356A",
    },
  ],
  upcoming: [
    {
      title: "Happy Light Tree",
      txt: "make a wish tree and write secret letters",
      time1: "",
      time2: "22.10.12 - 22.10.14",
      color: "#E0377A",
    },
  ],
  finished: [],
};

function Event() {
  const getButtons = () => {
    let result = [];
    for (let each in events) {
      result.push(each);
    }
    return result;
  };
  const [buttons, setButtons] = useState(getButtons());
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
        {events[buttons[pageNum]].map((each) => (
          <Card data={each} />
        ))}
      </div>
    </div>
  );
}

export default Event;
