import React from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <main>
        <div className="sidebar-toggle">
          <button>
            <FaBars />
          </button>
        </div>
        <div className="show-modal-container">
          <button className="btn">Show Modal</button>
        </div>
      </main>
    </>
  );
};

export default Home;
