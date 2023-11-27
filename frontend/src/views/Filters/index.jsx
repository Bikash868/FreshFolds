import React from 'react';
// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { StyledText } from '@components/Typography';

import ReactVirtualizedTable from '@components/Table';
import {Data} from './data';
import {columns} from './helper';
import { CustomerInfo } from './data';

export default function ApplyFilter() {
    const urlParams = new URLSearchParams(window.location.search);
    const customerId = urlParams.get('id');

    return (
        <Container maxWidth={false} style={{ borderRadius: '1rem', background: '#fff',p:'0', height:'100%' }}>
            <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', borderBottom: '1px solid #e6e6e6', p:'1rem'}}>
                <StyledText title>Order Details</StyledText>
                <StyledText title>{CustomerInfo[customerId]}</StyledText>                
            </Box>

            <Box sx={{mt:'1rem'}}>
                <ReactVirtualizedTable rows={Data.value} columns={columns}/>
            </Box>
        </Container>
    );
}
