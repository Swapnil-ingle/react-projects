import "./App.css";
import Item from "./Item";

function App() {
  return (
    <div className="App">
      <div className="card">
        <h1>Grocery list</h1>
        <div className="form-container">
          <form>
            <input type="text" className="form-control" />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="items-container">
          <Item />
        </div>
      </div>
    </div>
  );
}

export default App;
