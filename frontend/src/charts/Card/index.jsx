import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SvgIcon from '@mui/material/SvgIcon';

export const CardChart = () => {
  return (
    <Grid container direction="column" alignItems="center">
        <Grid item>
            <SvgIcon fontSize='medium'>
                <ShoppingCartIcon/>
            </SvgIcon>
        </Grid>
        <Grid item>
            <Typography>67</Typography>
        </Grid>
        <Grid item>
            <Typography>Total order</Typography>
        </Grid>  
    </Grid>
  )
}