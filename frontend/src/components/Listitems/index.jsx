import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import { StyledListItemIcon } from './elements';
import { StyledListItemText } from './elements';
import { StyledListItemButton } from './elements';


export const ListItems = ({ subheader = "", items }) => {
  const navigate = useNavigate();
  const route = window.location.pathname;

  const handleMenuItemClick = (route) => {
    navigate(route);
  }

  return (
    <React.Fragment>
      {
        subheader &&
        <ListSubheader component="div" inset>
          {subheader}
        </ListSubheader>
      }
      {
        items.map(item => {
          return (
            <StyledListItemButton key={item.label} onClick={() => handleMenuItemClick(item.route)} active={item.route === route}>
              <StyledListItemIcon active={item.route === route}>
                {item.icon}
              </StyledListItemIcon>
              <StyledListItemText primary={item.label} active={item.route === route}/>
            </StyledListItemButton>
          )
        })
      }
    </React.Fragment>
  )
};

ListItems.propTypes = {
  items: PropTypes.array,
  subheader: PropTypes.string,

};

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );