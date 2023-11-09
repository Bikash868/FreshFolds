import React from 'react';
// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { StyledText } from '@components/Typography';
import IconButton from "@mui/material/IconButton";
import { ReactComponent as FilterIcon } from "@assets/svg/customer-filter.svg";

import ReactVirtualizedTable from '@components/Table';
import {Data} from './data';
import {columns} from './helper';

export default function Customer() {
    return (
        <Container maxWidth={false} style={{ borderRadius: '1rem', background: '#fff',p:'0', height:'100%' }}>
            <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', borderBottom: '1px solid #e6e6e6', p:'1rem'}}>
                <StyledText title>Customer Details</StyledText>
                <IconButton
                    aria-label="delete"
                    sx={{ border: "1px solid #1F1F45", borderRadius: "0.5rem", padding:'0.75rem' }}
                >
                    <FilterIcon />
                </IconButton>
            </Box>

            <Box sx={{mt:'1rem'}}>
                <ReactVirtualizedTable rows={Data.value} columns={columns}/>
            </Box>
        </Container>
    );
}
