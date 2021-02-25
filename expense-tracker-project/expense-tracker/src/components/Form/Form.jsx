import React, {useState} from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import useStyles from "./styles";
import {useGlobalContext} from "../../context/context";

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date()
}

const Form = () => {
    const classes = useStyles();
    const {addTransaction} = useGlobalContext();
    const [formData, setFormData] = useState(initialState);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    ...
                </Typography>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                            <MenuItem value="Income">Income</MenuItem>
                            <MenuItem value="Expense">Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                            <MenuItem value="Business">Business</MenuItem>
                            <MenuItem value="Salary">Salary</MenuItem>
                            <MenuItem value="Sales">Sales</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} type="number" label="Amount" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} type="date" label="Date" fullWidth/>
                </Grid>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={() => addTransaction(formData)}>Create</Button>
        </Grid>
    )
}

export default Form;
