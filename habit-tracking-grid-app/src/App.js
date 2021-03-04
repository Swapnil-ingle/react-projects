import "./App.css";
import Card from "./components/Card/Card";
import { useGlobalContext } from "./context/context";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function App() {
  const { trackedHabits } = useGlobalContext();

  return (
    <main>
      {trackedHabits.map((habit) => {
        return <Card key={habit.id} {...habit} />;
      })}
      <button className="add-new-habit-btn">
        <AddCircleIcon style={{ fontSize: 40 }} />
      </button>
    </main>
  );
}

export default App;
