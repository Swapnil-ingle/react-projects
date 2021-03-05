import "./App.css";
import Card from "./components/Card/Card";
import { useGlobalContext } from "./context/context";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FormBtn from "./components/Form/FormBtn/FormBtn";

function App() {
  const { habits } = useGlobalContext();

  return (
    <main>
      {habits.map((habit) => {
        return <Card key={habit.id} {...habit} />;
      })}
      {/* <button className="add-new-habit-btn">
        <AddCircleIcon style={{ fontSize: 40 }} />
      </button> */}
      <FormBtn />
    </main>
  );
}

export default App;
