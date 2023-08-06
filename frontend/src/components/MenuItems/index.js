import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const primaryMenuItems = [{
  "label": "Dashboard",
  "icon": <DashboardIcon />,
  "route": '/dashboard'
},
{
  "label": "Customers",
  "icon": <PeopleIcon />,
  "route": '/customers'
},
{
  "label": "Orders",
  "icon": <ShoppingCartIcon />,
  "route": '/new-order'
},
{
  "label": "Filter",
  "icon": <LayersIcon />,
  "route": '/apply-filter'
},
]

export const secondaryMenuItems = [{
  "label": "Current month",
  "icon": <AssignmentIcon />,
  "route": '/report'
},
{
  "label": "Last quarter",
  "icon": <AssignmentIcon />,
  "route": '/report'
},
{
  "label": "Year-end sale",
  "icon": <AssignmentIcon />,
  "route": '/report'
},
]