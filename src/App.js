import "./App.css";
import Nav from "./Nav";
import Event from "./Event";
import EventDetail from "./EventDetail";
import { Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";

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

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Event app={app} />} />
        <Route path="/:eventId" element={<EventDetail app={app} />} />
      </Routes>
    </div>
  );
}

export default App;
