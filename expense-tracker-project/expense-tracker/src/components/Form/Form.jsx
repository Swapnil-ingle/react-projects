import React, {useState} from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import useStyles from "./styles";
import {v4 as uuidv4} from "uuid";
import {useGlobalContext} from "../../context/context";
import {incomeCategories, expenseCategories} from "../../constants/categories";
import formatDate from '../../utils/FormatDate';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

const Form = () => {
    const classes = useStyles();
    const {addTransaction} = useGlobalContext();
    const [formData, setFormData] = useState(initialState);
    const selectedCategory = formData.type === "Income" ? incomeCategories : expenseCategories;

    const addNewTransaction = () => {
        const transactionData = {...formData, amount: parseInt(formData.amount), id: uuidv4()};
        addTransaction(transactionData);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    ...
                </Typography>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value, category: ""})}>
                            <MenuItem value="Income">Income</MenuItem>
                            <MenuItem value="Expense">Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={formData.category} defaultValue={""} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                            {selectedCategory.map((item, index) => {
                                return (<MenuItem key={index} value={item.type}>{item.type}</MenuItem>);
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} type="number" label="Amount" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField value={formData.date} onChange={(e) => setFormData({...formData, date: formatDate(e.target.value)})} type="date" label="Date" fullWidth/>
                </Grid>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={addNewTransaction}>Create</Button>
        </Grid>
    )
}

export default Form;
