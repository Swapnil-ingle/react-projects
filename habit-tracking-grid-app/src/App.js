import "./App.css";
import { useRef } from "react";
import Card from "./components/Card/Card";
import { useGlobalContext } from "./context/context";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Alert } from "@material-ui/lab";

function App() {
  const { habits } = useGlobalContext();
  const habitCardsContainerRef = useRef(null);

  if (habits.length <= 0) {
    return (
      <main>
        <Alert severity="warning">
          No habits tracked yet - Click '+' button to start tracking.
        </Alert>
      </main>
    );
  }

  return (
    <>
      <main>
        <button
          id="scroll-left-btn"
          onClick={() => {
            scroll(habitCardsContainerRef, -255);
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
            scroll(habitCardsContainerRef, 255);
          }}
        >
          <ArrowRightIcon />
        </button>
        {/* <div>
        <FormBtn />
      </div> */}
      </main>
    </>
  );
}

const scroll = (habitCardsContainerRef, scrollOffset) => {
  habitCardsContainerRef.current.scrollLeft += scrollOffset;
};

export default App;
