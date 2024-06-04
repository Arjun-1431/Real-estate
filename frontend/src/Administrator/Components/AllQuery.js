import MaterialTable, { MTableToolbar } from 'material-table';
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
import Sidebar from './sidebar';
import axios from 'axios'
import Swal from "sweetalert2"
import { useState, useEffect } from 'react';


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

export default function AllQuery() {
  const [query, setQuery] = useState([]);
 
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };


  useEffect(() => {
    // Fetch feedback data from the server
    axios.get('http://localhost:5000/getallUSer')
      .then(response => {
        setQuery(response.data); 
      })
      .catch(error => {
        console.error('Error fetching queries:', error);
      });
  }, []);

  const handleDelete = (id) => {
    if (!id) {
      console.error("ID is undefined or null");
      return;
    }

    axios.delete(`http://localhost:5000/deleteQuery/${id}`)
      .then(response => {
        Swal.fire({
          icon: "success",
          title: "Success...",
          text: "Query Deleted Successfully",
        });
        console.log(response.data);
        setQuery(prevQuery => prevQuery.filter(query => query._id !== id));
      })
      .catch(err => console.error(err));
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
              px: [1],
            }}
            style={{ background:'#383B2A'}}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <Sidebar />
            <Divider sx={{ my: 1 }} />

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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 'auto',
                    justifyContent:'center',
                    alignItems:'center'
                  }}
                  style={{background:'#E3EBC0'}}
                >
                 <MaterialTable
                    style={{width: '100%'}}
                    title="All Customers"
                    columns={[
                      { title: 'Name', field: 'name' },
                      { title: 'flatno Number', field: 'flatno' },
                      { title: 'Mobile No.', field: 'mobileno' },
                      { title: 'Service', field: 'service' },

                    ]}
                    data={query.map((query) => ({
                      _id: query._id,
                      name: query.name,
                      flatno: query.flatno,
                      mobileno: query.mobileno,
                      service: query.service,
                    }))}
                    actions={[
                      {
                        icon: 'delete',
                        tooltip: 'Delete query',
                        onClick: (query, rowData) => handleDelete(rowData._id),
                      },
                    ]}
                  />
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