import React, { useState, useEffect } from "react";
import "./App.css";
import Heading from "./Heading";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <>
        <Heading />
        <main className="loading">
          <Loading />
        </main>
      </>
    );
  }

  return (
    <div className="App">
      <Heading />
      <Tours tours={tours} removeTour={removeTour} />
      {tours.length <= 0 && (
        <div className="no-more-tours-msg">
          <h1>No More Tours</h1>
          <button className="refresh-btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
