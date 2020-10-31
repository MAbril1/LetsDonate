import React from 'react';
import './ProductDonationHome.css';
import Card from './Card'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function ProductDonationHome() {
    const classes = useStyles();

    function FormRow() {
    return (
        /*
        <div className='productDonationHome'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        */
        <React.Fragment>
          <Grid item xs={4}>
            <Card />
          </Grid>
          <Grid item xs={4}>
            <Card />
          </Grid>
          <Grid item xs={4}>
            <Card />
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    );
}

export default ProductDonationHome
