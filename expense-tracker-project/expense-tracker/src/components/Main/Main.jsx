import React from 'react'
import {Card, CardHeader, CardContext, Typography, Grid, Divider, CardContent} from "@material-ui/core";
import useStyles from './styles';

const Main = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $100</Typography>
                <Typography align="center" variant="subtitle1" 
                style={{lineHeight: '1.5em', marginTop: '20px'
            }}>{
            // Info Card Component
            }
            Try Saying: Add income for 100$ in Category Sales for Monday...
            </Typography>
            <Divider/>
            {/* Form */}
            </CardContent>
            <CardContent classes={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* <List/> */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;
