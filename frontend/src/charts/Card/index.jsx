import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

export const CardChart = (props) => {
    const {title, value, icon} = props;
  return (
    <Grid container direction="column" alignItems="center">
        <Grid item>
            {icon && <SvgIcon fontSize='medium'>
                {icon}
            </SvgIcon>}
        </Grid>
        <Grid item>
            <Typography>{value}</Typography>
        </Grid>
        <Grid item>
            <Typography>{title}</Typography>
        </Grid>  
    </Grid>
  )
}

CardChart.propTypes = {
    title: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.node
};