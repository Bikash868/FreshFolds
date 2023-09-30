import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const StyledMainComponent = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100vw !important',
    display: 'flex',
    flexGrow: 1,
    overflow: 'auto',
    flexDirection: 'column',
    backgroundColor:
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
    background: '#EFF2F7'
}));

export const StyledContainer = styled(Container)(() => ({
    display: 'flex',
    flexGrow: '1 !important',
    overflow: 'auto',
    flexDirection: 'column',
    marginTop: '1rem',
    // border: '2px solid green',
}));