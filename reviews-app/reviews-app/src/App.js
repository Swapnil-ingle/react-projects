import "./App.css";
import Review from "./Review";

function App() {
  return (
    <main>
      <header>
        <h3>Reviews</h3>
        <div className="underline"></div>
      </header>
      <div className="container">
        <div className="review">
          <Review />
        </div>
      </div>
    </main>
  );
}

export default App;
