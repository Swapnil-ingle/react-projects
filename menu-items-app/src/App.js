import "./App.css";
import { useState, useEffect } from "react";
import BtnContainers from "./BtnContainers";
import menu from "./data";
import MenuItems from "./MenuItems";

function App() {
  const categories = [...new Set(menu.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const btnElements = document.getElementsByClassName("btn");
    for (let i = 0; i < btnElements.length; i++) {
      const currBtnEl = btnElements[i];
      currBtnEl.innerText === activeCategory
        ? currBtnEl.classList.add("active-btn")
        : currBtnEl.classList.remove("active-btn");
    }
  }, [activeCategory]);

  return (
    <main className="App">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <BtnContainers
        categories={categories}
        setActiveCategory={setActiveCategory}
      />
      <MenuItems activeCategory={activeCategory} menu={menu} />
    </main>
  );
}

export default App;
