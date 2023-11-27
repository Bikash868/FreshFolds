import Styled from "@emotion/styled";
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';


export const StyledListItemButton = Styled(ListItemButton)`
   background: ${(props)=>props.active ? '#0164EC' : '#fff'};

   &:hover {
        background: ${(props)=>props.active ? 'rgb(1, 100, 236, 0.85)' : '#d9d9d9'};
   }


`;

export const StyledListItemText = Styled(ListItemText)`
   color: ${(props)=>props.active ? '#fff' : 'black'}
`;

export const StyledListItemIcon = Styled(ListItemIcon)`
    ${(props)=>props.active ? `
        color: #fff;
    ` : ''}
`;