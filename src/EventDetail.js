import "./EventDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

function EventDetail({ app }) {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const getEvent = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `events/${eventId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEvent(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <>
      <div className="eventDetail">
        <h1>{event.title}</h1>
        <img src={event.image} />
        <div className="eventDetail__detail"> {event.detail}</div>
      </div>
    </>
  );
}

export default EventDetail;
