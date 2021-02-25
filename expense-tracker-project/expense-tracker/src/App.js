import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";
import { useGlobalContext } from "./context/context";

const App = () => {
  const classes = useStyles();
  const { totalIncome, totalExpense } = useGlobalContext();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="income" amount={totalIncome} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="expense" amount={totalExpense} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
