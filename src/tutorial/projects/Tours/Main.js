import React, { useEffect } from "react";
import { useState } from "react";
import Loding from "./Loding";
import Tour from "./Tour";
import Tours from "./Tours";
import "./Main.css";

const url = "https://course-api.com/react-tours-project";

const Main = () => {
  const [loding, setLoding] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    let newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
    // console.log(id);
  };

  const fetchTours = async () => {
    setLoding(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoding(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoding(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
    console.log("done");
  }, []);

  if (loding) {
    return (
      <main>
        <Loding />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
};

export default Main;
