import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Sidebar from "./Components/sidebar"
import Button from '@mui/material/Button';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Powered By '}
      <Link color="inherit" href="" target="_blank">
        www.ArjunSingh.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const defaultTheme = createTheme();

export default function AdminDashboard() {

 
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" style={{ background: '#383B2A' }} open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
            
          >
            <IconButton
              edge="start"
              color="primary"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
               
              }}
              
            >
              <MenuIcon style={{color:'white'}}/>
            </IconButton>
            <a href='/admindashboard'>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
             
            >
              Admin Dashboard (Real-Estate)
            </Typography>
            </a>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              
            }}
            style={{ background:'#383B2A'}}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon style={{ color:'white'}}/>
            </IconButton>
          </Toolbar>
          
          <List component="nav">
            <Sidebar />
            

          </List>
        </Drawer>
        <Box
        style={{background:'#C0C999'}}
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg"  sx={{ mt: 4, mb: 4 }} >
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 320,
                    justifyContent:'center',
                    alignItems:'center'
                  }}
                  style={{background:'#E3EBC0'}}
                >
                  <div  style={{background:'#191D0B'}} class="bg-slate-100 w-fit m-5 rounded-2xl p-4">
                    <div class="rounded-2xl bg-white p-4">
                      <div class="flex items-center">
                        <span class="relative rounded-xl bg-purple-200 p-4">
                        <i class="fa-solid fa-users"></i>
                        </span>
                        <p class="text-md ml-2 text-black">Total Customers</p>
                      </div>
                      <div class="flex flex-col justify-start">
                        <p class="my-4 text-left text-4xl font-bold text-gray-700">
                          34,500
                          <span class="text-sm"> $ </span>
                        </p>
                        <div class="flex items-center text-sm text-green-500">
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                          </svg>
                          <span> 5.5% </span>
                          <span class="ml-2 text-gray-400"> vs last month </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div  style={{background:'#191D0B'}} class="bg-slate-100 w-fit m-5 rounded-2xl p-4">
                    <div class="rounded-2xl bg-white p-4">
                      <div class="flex items-center">
                        <span class="relative rounded-xl bg-purple-200 p-4">
                        <i class="fa-solid fa-users"></i>
                        </span>
                        <p class="text-md ml-2 text-black">Total all Tenats</p>
                      </div>
                      <div class="flex flex-col justify-start">
                        <p class="my-4 text-left text-4xl font-bold text-gray-700">
                          34,500
                          <span class="text-sm"> $ </span>
                        </p>
                        <div class="flex items-center text-sm text-green-500">
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                          </svg>
                          <span> 5.5% </span>
                          <span class="ml-2 text-gray-400"> vs last month </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div  style={{background:'#191D0B'}} class="bg-slate-100 w-fit m-5 rounded-2xl p-4">
                    <div class="rounded-2xl bg-white p-4">
                      <div class="flex items-center">
                        <span class="relative rounded-xl bg-purple-200 p-4">
                        <i class="fa-solid fa-users"></i>
                        </span>
                        <p class="text-md ml-2 text-black">Total Feedbacks</p>
                      </div>
                      <div class="flex flex-col justify-start">
                        <p class="my-4 text-left text-4xl font-bold text-gray-700">
                          34,500
                          <span class="text-sm"> $ </span>
                        </p>
                        <div class="flex items-center text-sm text-green-500">
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                          </svg>
                          <span> 5.5% </span>
                          <span class="ml-2 text-gray-400"> vs last month </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div  style={{background:'#191D0B'}} class="bg-slate-100 w-fit m-5 rounded-2xl p-4">
                    <div class="rounded-2xl bg-white p-4">
                      <div class="flex items-center">
                        <span class="relative rounded-xl bg-purple-200 p-4">
                        <i class="fa-solid fa-users"></i>
                        </span>
                        <p class="text-md ml-2 text-black">Total all News</p>
                      </div>
                      <div class="flex flex-col justify-start">
                        <p class="my-4 text-left text-4xl font-bold text-gray-700">
                          34,500
                          <span class="text-sm"> $ </span>
                        </p>
                        <div class="flex items-center text-sm text-green-500">
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                          </svg>
                          <span> 5.5% </span>
                          <span class="ml-2 text-gray-400"> vs last month </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}