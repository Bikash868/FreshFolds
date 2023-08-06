import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


export const ListItems = ({ subheader = "", items }) => {
  const navigate = useNavigate();

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
            <ListItemButton key={item.label} onClick={() => handleMenuItemClick(item.route)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
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