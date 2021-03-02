import "./App.css";
import Card from "./components/Card/Card";
import { useGlobalContext } from "./context/context";

function App() {
  const { trackedHabits } = useGlobalContext();

  return (
    <main>
      {trackedHabits.map((habit) => {
        return <Card key={habit.id} {...habit} />;
      })}
    </main>
  );
}

export default App;
