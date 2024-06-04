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
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import 'filepond/dist/filepond.min.css';
import axios from "axios";
import Swal from 'sweetalert2';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
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

export default function UploadNews() {

  const [heading, setHeading] = useState('');
  const [images, setImages] = useState('');
  const [Link, setLink] = useState('');
  const [date,setDate] = useState('')
  const [newsdiscription, setNewsdiscription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('image', images);
    formData.append('date', date);
    formData.append('Link', Link);

    formData.append('newsdiscription', newsdiscription);

    try {
      const response = await axios.post('http://localhost:5000/newsupload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Uploaded Successfully",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      console.error('Error uploading image:', error);
    }
  };

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
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  style={{background:'#E3EBC0'}}
                >
                  <div class="flex w-screen flex-wrap text-slate-800" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',background:'#191D0B' }}>

                    <div class="flex w-full flex-col md:w-1/2">
                      <div class="flex justify-center pt-12 md:justify-start md:pl-12">
                        <a href="#" class="text-2xl font-bold text-blue-600"> Wobble . </a>
                      </div>
                      <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
                        <p style={{color:'white'}}class="text-center text-3xl font-bold md:text-left md:leading-tight">Upload a News for Website</p>

                        <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
                          <div class="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Fill All Details</div>
                        </div>
                        <form class="flex flex-col items-stretch pt-3 md:pt-8">
                          <div class="flex flex-col pt-4">
                            <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                              <input type="text" id="login-name" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter News Heading" onChange={(e) => setHeading(e.target.value)} />
                            </div>
                          </div>
                          <div class="flex flex-col pt-4">
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


                              <Grid style={{ width: '100%' }}>
                                <Button
                                  component="label"
                                  role={undefined}
                                  variant="contained"
                                  tabIndex={-1}
                                  startIcon={<CloudUploadIcon />}
                                >
                                  Upload file
                                  <VisuallyHiddenInput type="file" onChange={(e) => setImages(e.target.files[0])} />
                                </Button>
                              </Grid>
                            </Box>
                          </div>
                          <div class="mb-4 flex flex-col pt-4">
                            <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                              <input type="text" id="login-password" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Discription About News" onChange={(e) => setNewsdiscription(e.target.value)} />
                            </div>
                          </div>

                         <input type="date" id="startdate" name="startdate" onChange={(e) => setDate(e.target.value)}  required />
                         
                         <div class="flex flex-col pt-4">
                            <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                              <input type="text" id="login-name" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter News Link for Know more" onChange={(e) => setLink(e.target.value)} />
                            </div>
                          </div>
                          <button type="submit" class="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32" onClick={handleSubmit} style={{marginTop:'5%',width:'100%',marginBottom:'5%'}}>Upload </button>
                        </form>
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