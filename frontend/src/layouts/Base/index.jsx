import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';


import { AppBar } from '@components/AppBar';
import { Drawer } from '@components/Drawer';
import { ListItems } from '@components/Listitems';

import { primaryMenuItems } from '@components/MenuItems';
import { secondaryMenuItems } from '@components/MenuItems';

import { Copyright } from '@components/Copyright';
import { StyledContainer } from './elements';
import { StyledMainComponent } from './elements';

const defaultTheme = createTheme();

export function BaseLayout(props) {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            {`Employee > Dashboard`}
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <ListItems items={primaryMenuItems} subheader={""} />
                        <Divider sx={{ my: 1 }} />
                        <ListItems items={secondaryMenuItems} subheader={"Saved reports"} />
                    </List>
                </Drawer>
                <StyledMainComponent>
                    <Toolbar />
                    <StyledContainer maxWidth={false}>
                        {props.children}
                    </StyledContainer>
                    <Copyright />
                </StyledMainComponent>
            </Box>
        </ThemeProvider>
    );
}

BaseLayout.propTypes = {
    children: PropTypes.children,
};

export default BaseLayout; 