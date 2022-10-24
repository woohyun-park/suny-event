import { useEffect, useState } from "react";
import Card from "./Card";
import "./Event.css";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZO6s60gEqEGxMg6b0StkABcmB9oENjAg",
  authDomain: "suny-event-72c95.firebaseapp.com",
  databaseURL:
    "https://suny-event-72c95-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "suny-event-72c95",
  storageBucket: "suny-event-72c95.appspot.com",
  messagingSenderId: "243040474480",
  appId: "1:243040474480:web:7be9571cfbfcd5c0d56bb5",
  measurementId: "G-80K2DLB4X1",
};

// const events = {
//   ongoing: [
//     {
//       title: "Bingo Time",
//       txt: "play bingo and earn prizes",
//       time1: "22.10.12",
//       time2: "12:30-13:30",
//       color: "#0A356A",
//     },
//   ],
//   upcoming: [
//     {
//       title: "Happy Light Tree",
//       txt: "make a wish tree and write secret letters",
//       time1: "",
//       time2: "22.10.12 - 22.10.14",
//       color: "#E0377A",
//     },
//   ],
//   finished: [],
// };

function Event() {
  const app = initializeApp(firebaseConfig);

  const getEvent = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `events/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const result = [];
          for (let each in snapshot.val()) {
            result.push(snapshot.val()[each]);
          }
          setEvents(result);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const buttons = ["upcoming", "ongoing", "finished"];
  const [events, setEvents] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <div className="event">
      <h1 className="event__title">event</h1>
      <div className="event__buttonCont">
        {events &&
          buttons.map((each, i) => (
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
        {events && events.map((each) => <Card data={each} />)}
      </div>
    </div>
  );
}

export default Event;
