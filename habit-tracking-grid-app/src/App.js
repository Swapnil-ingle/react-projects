import "./App.css";
import { useRef } from "react";
import Card from "./components/Card/Card";
import { useGlobalContext } from "./context/context";
import FormBtn from "./components/Form/FormBtn/FormBtn";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function App() {
  const { habits } = useGlobalContext();
  const habitCardsContainerRef = useRef(null);
  // Get 3 or 1 habit to display depending upon the device (Mobile => 1; Desktop => 3)

  return (
    <main>
      <button
        id="scroll-left-btn"
        onClick={() => {
          scroll(habitCardsContainerRef, -235);
        }}
      >
        <ArrowLeftIcon />
      </button>
      <div ref={habitCardsContainerRef} className="habit-cards-container">
        {habits.map((habit) => {
          return <Card key={habit.id} {...habit} />;
        })}
      </div>
      <button
        id="scroll-right-btn"
        onClick={() => {
          scroll(habitCardsContainerRef, 235);
        }}
      >
        <ArrowRightIcon />
      </button>
      <div>
        <FormBtn />
      </div>
    </main>
  );
}

const scroll = (habitCardsContainerRef, scrollOffset) => {
  console.log("Scrolling...");
  habitCardsContainerRef.current.scrollLeft += scrollOffset;
};

export default App;
