import React, { useState, useReducer, useRef } from "react";
import Modal from "./Modal";
import reducer from "./Reducer";

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

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
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
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
