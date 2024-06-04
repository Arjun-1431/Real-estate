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
import Sidebar from './sidebar'
import MaterialTable, { MTableToolbar } from 'material-table';
import DailogBox from './dailogBox';
import axios from 'axios'
import Swal from "sweetalert2"
import { useState, useEffect } from 'react';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





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
  const documents = [
    { name: 'Document 1', url: '/path/to/document1.pdf' },
    { name: 'Document 2', url: '/path/to/document2.pdf' },
  ];
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
  };
  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.substring(url.lastIndexOf('/') + 1); // Extract filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [users, setUsers] = useState([]);
  const [tenant, setTenant] = useState([]);
  useEffect(() => {
    // Fetch feedback data from the server
    axios.get('http://localhost:5000/alluser')
      .then(response => {
        setUsers(response.data); // Assuming response.data is an array of feedback objects
      })
      .catch(error => {
        console.error('Error fetching feedback:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch feedback data from the server
    axios.get('http://localhost:5000/alltenant')
      .then(response => {
        setTenant(response.data); // Assuming response.data is an array of feedback objects
      })
      .catch(error => {
        console.error('Error fetching feedback:', error);
      });
  }, []);


  const handleDelete = (id) => {
    if (!id) {
      console.error("ID is undefined or null");
      return;
    }

    axios.delete(`http://localhost:5000/deleteUser/${id}`)
      .then(response => {
        Swal.fire({
          icon: "success",
          title: "Success...",
          text: "User Deleted Successfully",
        });
        console.log(response.data);
        setUsers(prevUser => prevUser.filter(user => user._id !== id));
      })
      .catch(err => console.error(err));
  };


  const handleDeleteTenant = (id) => {
    if (!id) {
      console.error("ID is undefined or null");
      return;
    }

    axios.delete(`http://localhost:5000/deleteUser/${id}`)
      .then(response => {
        Swal.fire({
          icon: "success",
          title: "Success...",
          text: "Tenant Deleted Successfully",
        });
        console.log(response.data);
        setTenant(prevTenant => prevTenant.filter(tenant => tenant._id !== id));
      })
      .catch(err => console.error(err));
  };


  


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
              <MenuIcon style={{ color: 'white' }} />
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
            style={{ background: '#383B2A' }}
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
          style={{ background: '#C0C999' }}
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
              <Grid item xs={12} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}
                  style={{ background: '#E3EBC0' }}
                >
                  <MaterialTable
                    style={{ width: '100%' }}
                    title="All Customers"
                    columns={[
                      {
                        title: 'Name', field: 'name', render: rowData => (
                          <Button style={{color:'black'}} variant="text">
                            {rowData.name}
                            </Button>
                        )
                      },
                      { title: 'Email ID', field: 'email' },
                      { title: 'Contect', field: 'contect' },

                    ]}
                    data={users.map((user) => ({
                      _id: user._id,
                      name: user.name,
                      email: user.email,
                      contect: user.contect,
                    }))}
                    actions={[
                      {
                        icon: 'delete',
                        tooltip: 'Delete Event',
                        onClick: (tenant, rowData) => handleDelete(rowData._id),
                      },
                    ]}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}
                  style={{ background: '#E3EBC0' }}
                >
                  <MaterialTable
                    style={{ width: '100%' }}
                    title="All Tenants"
                    columns={[
                      {
                        title: 'Name', field: 'name', render: rowData => (
                          <Button style={{color:'black'}} variant="text" onClick={handleClickOpen}>
                            {rowData.name}
                            </Button>
                        )
                      },
                      { title: 'Email ID', field: 'email' },
                      { title: 'Contect', field: 'contect' },
                    ]}
                    data={tenant.map((tenant) => ({
                      _id: tenant._id,
                      name: tenant.name,
                      email: tenant.email,
                      contect: tenant.contect,
                    }))}
                    actions={[
                      {
                        icon: 'delete',
                        tooltip: 'Delete Event',
                        onClick: (user, rowData) => handleDeleteTenant(rowData._id),
                      },
                    ]}
                  />
                </Paper>
              </Grid>
              {/* <Dialog
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          
        </DialogActions>
      </Dialog> */}

            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}