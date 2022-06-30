import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
interface Props {
  window?: () => Window;
}

const HeadSidebar = 240;
export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' sx={{ backgroundColor: '#000080' }}>
        <Toolbar sx={{ ml: 90 }}>
          <Box
            sx={
              ({
                display: {
                  xs: 'none',
                  sm: 'block',
                  ml: '150',
                },
              },
              { typography: 'body1' })
            }
          >
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/'>
              <Button sx={{ color: '#fff' }}>Home</Button>
            </Link>
            <Link
              style={{ color: 'black', textDecoration: 'none' }}
              to='/about'
            >
              <Button sx={{ color: '#fff' }}>About</Button>
            </Link>

            <Link
              style={{ color: 'black', textDecoration: 'none' }}
              to='/displayallcards'
            >
              <Button sx={{ color: '#fff' }}>Display Cards</Button>
            </Link>

            <Link
              style={{ color: 'black', textDecoration: 'none' }}
              to='/login'
            >
              <Button sx={{ color: '#fff' }}>Login</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
