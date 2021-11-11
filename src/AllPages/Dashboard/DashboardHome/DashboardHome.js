import { Grid } from '@mui/material';
import React from 'react';
import GiveReview from '../GiveReview/GiveReview';
import MyOrders from '../MyOrders/MyOrders';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
              WELCOME TO DASHNOBARD HOME
            <GiveReview></GiveReview>
          </Grid>
          <Grid item xs={12} sm={7}>
            <MyOrders></MyOrders>
          </Grid>
        </Grid>
    );
};

export default DashboardHome;