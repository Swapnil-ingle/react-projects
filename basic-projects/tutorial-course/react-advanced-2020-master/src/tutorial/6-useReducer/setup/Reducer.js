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
  } else if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Removed!",
    };
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  throw new Error("No Matching Action Type!");
};

export default reducer;
