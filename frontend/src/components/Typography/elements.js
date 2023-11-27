import Styled from "@emotion/styled";
import { Typography } from '@mui/material';


export const StyledText = Styled(Typography)`
   ${(props)=>props.title ? `
        color: #1F1F45;
        font-size: 1.25rem;
        font-weight: 500;
   ` : ''}
`;