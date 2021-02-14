import React, { useRef, useState, useContext } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { AppContext } from "./context";

const Home = () => {
  const data = useContext(AppContext);
  console.log(data);

  const sidebarRef = useRef("");
  const [expandModalContainer, setExpandModalContainer] = useState(false);

  return (
    <>
      <main>
        <Sidebar setExpandModalContainer={setExpandModalContainer} />
        <Modal expandModalContainer={expandModalContainer} />
      </main>
    </>
  );
};

export default Home;
