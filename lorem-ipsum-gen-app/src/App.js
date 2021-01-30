import { useState } from "react";
import "./App.css";

const data =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, iste. Laudantium tempore sequi laborum quia voluptas, at, velit officia, error veritatis suscipit doloremque esse vel vitae vero cumque ipsam est fugiat sint doloribus! Vero iure sunt consequuntur, labore sit similique recusandae atque ratione ipsa? Eaque architecto cum similique pariatur iste.";

function App() {
  const [count, setCount] = useState("");
  const [paras, setParas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let parasToBeGenerated = parseInt(count);

    if (parasToBeGenerated <= 0) {
      parasToBeGenerated = 1;
    }

    if (parasToBeGenerated >= 10) {
      parasToBeGenerated = 10;
    }

    const newParas = [];

    for (let i = 0; i < parasToBeGenerated; i++) {
      newParas.push(data);
    }

    setParas(newParas);
  };

  return (
    <div className="App">
      <h1>Generate Lorem Ipsum</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="num-of-paras">Number of Paragraphs</label>
            <input
              id="num-of-paras"
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <div className="form-control">
            <button type="submit" className="btn">
              Generate
            </button>
          </div>
        </form>
      </div>
      <div className="paragraphs">
        {paras.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
