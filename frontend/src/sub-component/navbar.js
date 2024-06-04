import React, { useState, useEffect } from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

export default function Navbar({ setIsLoggedIn }) {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('data1');
    if (userId) {
      axios.get(`http://localhost:5000/user/${userId}`)
        .then(response => {
          setUser(response.data);
          setIsLoggedIn(true);
         
        })
        .catch(error => {
          console.log('Error fetching user data:', error);
        });
    } else {
      console.log('Not logged in');
    }
  }, [setIsLoggedIn]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const handleLogout = () => {
    axios.post('http://localhost:5000/logout')
      .then(() => {
        localStorage.removeItem('data1'); // Remove user data from local storage
        localStorage.removeItem('user');
        setUser(null);
        setIsLoggedIn(false);
        navigate('/');
        console.log('Logged out successfully');
      })
      .catch(error => {
        console.log('Error logging out:', error);
      });
  };
  

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: 20,
              bgcolor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: theme.palette.mode === 'light'
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <a href="/">
                <img
                  src={require('../Assets/logo1.png')}
                  style={logoStyle}
                  alt="logo of sitemark"
                />
              </a>

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {user?.role === 'user' && (
                  <a
                    onClick={() => scrollToSection('upload')}
                    style={{ margin: '10px' }}
                    sx={{ py: '12px', px: '12px' }}
                    href='/uploaddoc'
                  >
                    <Typography variant="body2" color="text.primary">
                      Upload Documents
                    </Typography>
                  </a>
                )}
                {user && user.role === 'user' && (
                  <a
                    href='/property'
                    style={{ margin: '10px' }}
                    onClick={() => scrollToSection('maintanance')}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography variant="body2" color="text.primary">
                      Property Maintenance
                    </Typography>
                  </a>
                )}

                {user && user.role === 'user' && (
                  <a
                    href='/uploadflateforrent'
                    style={{ margin: '10px' }}
                    onClick={() => scrollToSection('Rental')}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography variant="body2" color="text.primary">
                      Flat for Rent
                    </Typography>
                  </a>
                )}

                <a
                  style={{ margin: '10px' }}
                  onClick={() => scrollToSection('support')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography aria-describedby={id} color={'darkgray'} style={{ color: 'black', size: 1, fontSize: '89%' }} onClick={handleClick}>
                    Customer Support
                  </Typography>
                  <Popover
                    id={id}
                    open={openPopover}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Typography sx={{ p: 2 }}>Call us at (0751-363764)</Typography>
                  </Popover>

                </a>
                <a
                  href='propertynews'
                  style={{ margin: '10px' }}
                  onClick={() => scrollToSection('news')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Property News
                  </Typography>
                </a>
                <a
                  href='/rentalflate'
                  style={{ margin: '10px' }}
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Rental Flats
                  </Typography>
                </a>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              {user ? (
                <>
                  <Typography color="primary" variant="body2" style={{ fontSize: 'medium', marginRight: '5px' }}>
                    {user.name}
                  </Typography>

                  <Button
                    size="small"
                    style={{ backgroundColor: 'black' }}
                    variant="contained"
                    component="a"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component="a"
                    href="/login"
                  >
                    Sign in
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component="a"
                    href="/register"
                  >
                    Signup
                  </Button>
                </>
              )}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                      flexGrow: 1,
                    }}
                  >
                    <a href='/' style={{ margin: '10px' }} onClick={() => scrollToSection('upload')}>
                      Home
                    </a>
                    {user?.role === 'user' && (
                      <a href='/uploaddoc' style={{ margin: '10px' }} onClick={() => scrollToSection('upload')}>
                        Upload Documents
                      </a>
                    )}
                    {user?.role === 'user' && (
                      <a href='/property' style={{ margin: '10px' }} onClick={() => scrollToSection('maintanance')}>
                        Property Maintenance
                      </a>
                    )}
                    {user?.role === 'user' && (
                      <a href='uploadflateforrent' style={{ margin: '10px' }} onClick={() => scrollToSection('Rental')}>
                        Flat for Rent
                      </a>
                    )}
                    <a style={{ margin: '10px' }} onClick={() => scrollToSection('support')}>
                      Customer Support
                    </a>
                    <a href='propertynews' style={{ margin: '10px' }} onClick={() => scrollToSection('news')}>
                      Property News
                    </a>
                    <a href='rentalflate' style={{ margin: '10px' }} onClick={() => scrollToSection('news')}>
                      Rental Flats
                    </a>
                    <Divider />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mt: 2 }}>
                      {user ? (
                        <>
                          <Typography color="primary" variant="body2" style={{ fontSize: 'medium', marginRight: '5px', marginBottom: '10px' }}>
                            {user.name}
                          </Typography>
                          <Button
                            size="small"
                            style={{ backgroundColor: 'black' }}
                            variant="contained"
                            component="a"
                            onClick={handleLogout}
                          >
                            Log Out
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            color="primary"
                            variant="text"
                            size="small"
                            component="a"
                            href="/login"
                          >
                            Sign in
                          </Button>
                          <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            component="a"
                            href="/register"
                          >
                            Signup
                          </Button>
                        </>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
