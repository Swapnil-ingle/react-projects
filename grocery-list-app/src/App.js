import "./App.css";
import Item from "./Item";
import { useState, useEffect } from "react";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [items, setItems] = useState(getLocalStorage());
  const [item, setItem] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item === "" || item.trim() === "") {
      showAlert(true, "warning", "Cannot add empty value!");
      return;
    }

    if (!isEditing) {
      const newItem = { id: new Date().getTime().toString(), title: item };
      setItems([...items, newItem]);
      showAlert(true, "info", "Item Added to the list!");
    } else {
      setItems(
        items.map((currItem) => {
          if (currItem.id === editId) {
            return { ...currItem, title: item };
          }
          return currItem;
        })
      );
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "info", "Value updated!");
    }

    setItem("");
  };

  const clearList = () => {
    setItems([]);
    showAlert(true, "error", "All Items Cleared!");
  };

  const removeItem = (id) => {
    showAlert(true, "error", "Item removed!");
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = items.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setItem(specificItem.title);
    const inputEl = document.getElementById("input");
    inputEl.focus();
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Grocery list</h1>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              id="input"
              type="text"
              className="form-control"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              placeholder="e.g. Eggs"
            />
            <button type="submit">{isEditing ? "Edit" : "Add"}</button>
          </form>
        </div>
        <div className="items-container">
          {items.map((item) => {
            return (
              <div key={item.id}>
                <Item item={item} removeItem={removeItem} editItem={editItem} />
              </div>
            );
          })}
        </div>
        {items.length > 0 && (
          <div className="clear-list">
            <button className="clear-all-btn" onClick={clearList}>
              Clear List
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
