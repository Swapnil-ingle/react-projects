import React, { useState, useReducer, useRef } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {
  console.log(state, action);

  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "Item Added!",
    };
  } else if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please enter value!" };
  }

  throw new Error("No Matching Action Type!");
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const inputRefContainer = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRefContainer.current.value;
    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPeople });
      inputRefContainer.current.value = "";
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
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
