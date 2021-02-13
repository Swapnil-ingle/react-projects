import React, { useRef, useState } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const Home = () => {
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
