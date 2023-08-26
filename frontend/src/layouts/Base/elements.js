import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const StyledMainComponent = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100vw !important',
    display: 'grid',
    flexGrow: 1,
    overflow: 'auto',
    gridTemplateColumns: '1fr',
    backgroundColor:
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
}));

export const StyledContainer = styled(Container)`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`;