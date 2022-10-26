import { useEffect, useState } from "react";
import Card from "./Card";
import "./Event.css";
import { getDatabase, ref, child, get } from "firebase/database";

const buttons = ["upcoming", "ongoing", "finished"];

function Event() {
  function getTime(date, time) {
    const result = new Date(date);
    time = time.split(":");
    result.setTime(
      result.getTime() + (time[0] * 3600 + time[1] * 60 - 9 * 3600) * 1000
    );
    return result;
  }
  function compareTime(startDate, endDate = null) {
    const today = new Date();
    today.setHours(9, 0, 0);
    startDate = new Date(startDate);
    if (!endDate) {
      console.log(
        today > startDate,
        today.toLocaleString() == startDate.toLocaleString()
      );
      return today.toLocaleString() == startDate.toLocaleString()
        ? 1
        : today > startDate
        ? 2
        : 0;
    } else {
      endDate = new Date(endDate);
    }
  }

  const getEvent = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `events/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const tempEvents = snapshot.val();
          const result = {};
          buttons.forEach((each) => (result[each] = []));
          for (let key in tempEvents) {
            const each = tempEvents[key];
            each.id = key;
            if (each.dateType === "0") {
              result[buttons[compareTime(each.startDate)]].push(each);
            } else if (each.dateType === "1") {
              result[buttons[compareTime(each.startDate, each.endDate)]].push(
                each
              );
            }
            console.log(result);
          }
          console.log(result);
          setEvents(result);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [events, setEvents] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <div className="event">
      <h1 className="event__title">Events</h1>
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
        {events.length !== 0 &&
          events[buttons[pageNum]].map((each) => <Card data={each} />)}
      </div>
    </div>
  );
}

export default Event;
