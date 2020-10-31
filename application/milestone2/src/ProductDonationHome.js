import React from 'react';
import './ProductDonationHome.css';
import Card from './Card'

import { makeStyles } from '@material-ui/core/styles';
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

/* some notes on how this *MIGHT* work:
get items from database
fetch("BACKEND.js")
  .then(res => res.json()) 
  run through each item in the database and display them in the brwoser grid/map
  .then((result) => { getCard(result); })

  In the case that there are filters, the items displayed will only be shown based on said filter.
*/

function ProductDonationHome() {
    const classes = useStyles();

    function FormRow() {
    return (
        <React.Fragment>
          <Grid item xs>
            <Card />
          </Grid>
          <Grid item xs>
            <Card />
          </Grid>
          <Grid item xs>
            <Card />
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs spacing>
            <FormRow />
          </Grid>
          <Grid container item xs spacing>
            <FormRow />
          </Grid>
          <Grid container item xs spacing>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    );
}

export default ProductDonationHome
