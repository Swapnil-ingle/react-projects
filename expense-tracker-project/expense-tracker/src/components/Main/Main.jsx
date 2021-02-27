import React, {useEffect, useState} from 'react'
import {Card, CardHeader, Typography, Grid, Divider, CardContent} from "@material-ui/core";
import useStyles from './styles';
import Form from '../Form/Form';
import List from '../List/List';
import {useGlobalContext} from "../../context/context";

const Main = () => {
    const classes = useStyles();
    const {transactions} = useGlobalContext();
    const [totalBalance, setTotalBalance] = useState(0);

    useEffect(() => {
        let newTotalBalance = 0;

        transactions.forEach((item) => {
            if (item.type === 'Income') {
                newTotalBalance += parseInt(item.amount);
            } else {
                newTotalBalance -= parseInt(item.amount);
            }
        })

        setTotalBalance(newTotalBalance);
    }, [transactions])

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance ${totalBalance}</Typography>
                <Typography align="center" variant="subtitle1" 
                style={{lineHeight: '1.5em', marginTop: '20px'
            }}>{
            // Info Card Component
            }
            Try Saying: Add income for 100$ in Category Sales for Monday...
            </Typography>
            <Divider/>
            <Form/>
            </CardContent>
            <CardContent classes={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;
