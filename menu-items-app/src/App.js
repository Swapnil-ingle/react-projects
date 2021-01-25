import "./App.css";

function App() {
  return (
    <main className="App">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-containers">
        <button className="btn">All</button>
        <button className="btn">Breakfast</button>
        <button className="btn">Lunch</button>
      </div>
      <div className="menu-items">
        <article className="menu-item">
          <section className="menu-item-img">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </section>
          <div className="item-info">
            <header>
              <h3>Food Item 1</h3>
              <h4 className="price">$10</h4>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Possimus, aliquam.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}

export default App;
