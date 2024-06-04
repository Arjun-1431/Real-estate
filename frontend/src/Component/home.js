import * as React from 'react';
import Card from '../sub-component/card';
import Grid from '@mui/material/Grid';
import Banner from '../sub-component/banner';
import Services from '../sub-component/services';
import Counter from '../sub-component/counter';
import Slider from '../sub-component/slider';
import SliderProject from '../sub-component/sliderprojects';
import { styled } from '@mui/material/styles';
import SliderComponent from '../sub-component/sliderComponnt';
import Paper from '@mui/material/Paper';
import RealSlider from '../sub-component/realslider';
import Testimonial from '../sub-component/testimonial'
import FAQ from '../sub-component/FAQ';
import Navbar from "./../sub-component/navbar"
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Home() {

  return (
    <div style={{display: 'flex', justifyContent: 'center',alignItems:'center' }}>
      <Navbar />
      <Grid container spacing={2} style={{ marginTop: 20,display:'flex',justifyContent:'center' }}>
        <Grid item xs={12} >
          <Banner />
        </Grid>
        <Grid item xs={12} >

          <Counter />

        </Grid>
       
        <Grid item xs={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
          <Slider />
        </Grid>
        <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


          <div class="max-w-sm p-3 bg-white  rounded-lg  ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Find The Place Of Your Dreams</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Sed vitae leo placerat, venenatis massa at, dictum nisl. Suspendisse efficitur eros ligula, eget dapibus ex pellentesque quis.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>

        </Grid>


        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 80, margin: 10 }} >

          <Card />

        </Grid>

        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 80, margin: 10 }}>

          <Services />

        </Grid>

        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 80, margin: 10 }} >

          <SliderComponent />

        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }} >

          <Testimonial />

        </Grid>

        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >

          <FAQ />

        </Grid>


        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10 }} >

          <SliderProject />

        </Grid>





      </Grid>

      <Box sx={{ height: '100vh', width: '100%', position: 'relative' }}>
        {/* Other content goes here */}

        <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <a href='https://wa.me/7354436777' target='blank'><SpeedDial 
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<WhatsAppIcon/>}
          >
               
          </SpeedDial></a>
        </Box>
      </Box>
    </div>
  );
}


export default Home;