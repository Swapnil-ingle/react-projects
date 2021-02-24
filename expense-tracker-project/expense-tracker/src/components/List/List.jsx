import React from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from "@material-ui/core";
import {Delete, MoneyOff} from "@material-ui/icons";

import useStyles from "./styles";

const List = () => {
    const classes = useStyles();
    const transactions = [
        {id: 1, type: "Income", category: "Salary", amount: 50, date: "21 Feb 2021"},
        {id: 2, type: "Expense", category: "Pets", amount: 120, date: "20 Feb 2021"},
        {id: 3, type: "Income", category: "Business", amount: 20, date: "14 Feb 2021"}
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => {
                return <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' onCLick=''>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            })}
        </MUIList>
    )
}

export default List
