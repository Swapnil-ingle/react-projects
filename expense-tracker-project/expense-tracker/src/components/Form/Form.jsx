import React from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import useStyles from "./styles";
import {useGlobalContext} from "../../context/context";

const Form = () => {
    const classes = useStyles();
    const {addTransaction} = useGlobalContext();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    ...
                </Typography>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select>
                            <MenuItem value="Income">Income</MenuItem>
                            <MenuItem value="Expense">Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select>
                            <MenuItem value="Business">Business</MenuItem>
                            <MenuItem value="Salary">Salary</MenuItem>
                            <MenuItem value="Sales">Sales</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="number" label="Amount" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="date" label="Date" fullWidth/>
                </Grid>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth>Create</Button>
        </Grid>
    )
}

export default Form;
