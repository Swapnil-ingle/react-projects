import React, { useState, useReducer, useRef } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Hello World!",
};

const Index = () => {
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const inputRefContainer = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRefContainer.current.value;
    console.log(name);
    if (name) {
    } else {
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            ref={inputRefContainer}
          />
          <button type="submit">Add Person</button>
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
