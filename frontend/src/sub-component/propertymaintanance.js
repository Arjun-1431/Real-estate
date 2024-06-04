import Navbar from '../sub-component/navbar'
import SliderProject from '../sub-component/sliderprojects'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function randombg() {
  var random = Math.floor(Math.random() * 4) + 0;
  var bigSize = [
    "url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60')",
    "url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60')",
    "url('https://images.unsplash.com/photo-1441794016917-7b6933969960?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60')",
    "url('https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1400&q=60')"
  ];
  document.getElementById("right").style.backgroundImage = bigSize[random];
}

export default function ProperTymaintanance() {
  const [name, setName] = useState('');
  const [flatno, setFlatno] = useState('');
  const [mobileno, setMobileno] = useState('');

  const [service, setService] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/submitquery', { name, mobileno, flatno, service });
      Swal.fire({
        title: 'Success!',
        text: 'Query Submit successful',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Query Submit failed',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      console.error('Error Query of user:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{width:'100%',height:'100%', display:'flex',justifyContent:'center'}} >
      <section style={{marginTop:'5%'}} class=" py-12 text-gray-800 sm:py-24">
  <div class="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
    <div class="max-w-2xl px-4 lg:pr-24">
      <h3 class="mb-5 text-3xl font-semibold">Property Maintainance</h3>
      <p class="mb-16 text-lg text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, corrupti asperiores voluptatum labore eligendi quisquam. Id quae, laboriosam saepe facere ea asperiores!</p>
      <div class="mb-5 flex font-medium">
        <div class="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
          </svg>
        </div>
        <div class="">
          <p class="mb-2">Monthly 400k Image Downloads</p>
          <span class="font-normal text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum porro molestias quaerat maxime modi.</span>
        </div>
      </div>
      <div class="mb-5 flex font-medium">
        <div class="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </div>
        <div class="">
          <p class="mb-2">Stay Syned to the Database</p>
          <span class="font-normal text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum porro molestias quaerat maxime modi.</span>
        </div>
      </div>
      <div class="mb-5 flex font-medium">
        <div class="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>
        <div class="">
          <p class="mb-2">Save on Energy Costs</p>
          <span class="font-normal text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum porro molestias quaerat maxime modi.</span>
        </div>
      </div>
    </div>
    <div class="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
      <div class="relative border-b border-gray-300 p-4 py-8 sm:px-8">
        <h3 class="mb-1 inline-block text-3xl font-medium"><span class="mr-4">Property Maintainance Form</span><span class="inline-block rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">Quick Response</span></h3>
        <p class="text-gray-600">Contact us for custom use cases</p>
      </div>
      <div class="p-4 sm:p-8">
      <TextField fullWidth label="Your Name" id="fullWidth" style={{ margin: '1%' }} onChange={(e) => setName(e.target.value)} required/>
            <TextField fullWidth label="Flate No." id="fullWidth" style={{ margin: '1%' }} onChange={(e) => setFlatno(e.target.value)} required/>
            <TextField fullWidth label="Mobile No." id="fullWidth" style={{ margin: '1%' }} onChange={(e) => setMobileno(e.target.value)} required/>
           
        <div class="peer-invalid:block mt-1 hidden text-left text-xs text-rose-600">Email format Incorrect. Please complete the email</div>
        <label class="mt-5 mb-2 inline-block max-w-full">About our Service</label>
        <select className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" onChange={(e) => setService(e.target.value)}>
                 <option value="">Select Service</option>
                 <option value="Full Home Cleaning">Full Home Cleaning</option>
                 <option value="Home disinfection">Home disinfection</option>
                 <option value="Painting & Waterproofing">Painting & Waterproofing</option>
                 <option value="Unfurnished apartment">Unfurnished apartment</option>
                 <option value="Full Home Beep Cleaning">Full Home Beep Cleaning</option>
                 <option value="Outdoor lighting installation and repair">Outdoor lighting installation and repair</option>
                 <option value="Seasonal clean-up (spring and fall)">Seasonal clean-up (spring and fall)</option>
                 <option value="Roof maintenance and repair">Roof maintenance and repair</option>
                 <option value="Exterior painting">Exterior painting</option>
                 <option value="Pest control (insects, rodents)">Pest control (insects, rodents)</option>
                 <option value="Plumbing repairs and maintenance">Plumbing repairs and maintenance</option>
                 <option value="Electrical repairs and maintenance">Electrical repairs and maintenance</option>
                <option value="Carpentry repairs">Carpentry repairs</option>
                 <option value="Window cleaning">Window cleaning</option>
              </select>
        <button style={{marginTop:'1%'}} onClick={handleSubmit} class="w-full rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white">Submit</button>
      </div>
    </div>
  </div>
</section>

      </div>
      <div style={{ marginTop: '0%' }}>
        <SliderProject />
      </div>
    </div>
  );
}

