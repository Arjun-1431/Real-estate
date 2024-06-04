// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import '../CSSfiles/uploadDoc.css'
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import { useState, useEffect } from 'react';
// import { FilePond, registerPlugin } from 'react-filepond';
// import 'filepond/dist/filepond.min.css';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
// import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
// import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import Navbar from '../sub-component/navbar';
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function UploadDoc() {
//   const userId = localStorage.getItem('data1');
//   console.log(userId);

//   const [files, setFiles] = useState([]);
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const handleUpdateFiles = (fileItems) => {
//     setFiles(fileItems);
//     setUploadedFiles(fileItems.map((fileItem) => fileItem.file));
//   };



//   useEffect(() => {
//     registerPlugin(
//       FilePondPluginFileEncode,
//       FilePondPluginFileValidateSize,
//       FilePondPluginImageExifOrientation,
//       FilePondPluginImagePreview
//     );
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();

//     uploadedFiles.forEach((file) => {
//       formData.append('images', file);
//     });

//     try {
//       const response = await fetch(`/api/uploaddocuments/${userId}`, {
//         method: 'POST',
//         body: formData,
//       });
//       const result = await response.json();
//       console.log(result);
//       alert('submit')
//     } catch (error) {
//       console.error('Error uploading files:', error);
//       alert('not submit')
//     }
//   };

//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };


//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Navbar />
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid item xs={12} sm={4} md={7}>
//           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '10%', marginLeft: '5%' }}>
//             <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//               <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PictureAsPdfIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Copy of Agreement" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PictureAsPdfIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Copy of Registry" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PictureAsPdfIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Copy of Booking" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PictureAsPdfIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Loan application form" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PictureAsPdfIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Identification Proof" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PictureAsPdfIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Residence proof" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PictureAsPdfIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Bank Account Statement /Passbook" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PictureAsPdfIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Signature verification by bankers" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <PictureAsPdfIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary="Propert Details Document" />
//                 </ListItem>

//               </List>
//             </List>
//           </List>
//         </Grid>
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main', marginTop: '15%' }}><LockOutlinedIcon /></Avatar>
//             <Typography style={{ marginTop: '5%' }} component="h1" variant="h5">Upload your Document</Typography>
//             <Grid style={{ marginTop: '8%', width: '80%' }}>
//               <FilePond
//                 className="filepond"
//                 name="filepond"
//                 allowMultiple={true}
//                 maxFileSize="13MB"
//                 maxFiles={19}
//                 onupdatefiles={handleUpdateFiles}
//               />
//               <ul>
//                 <Button
//                   size="small"
//                   style={{ backgroundColor: 'black' }}
//                   variant="contained"
//                   fullWidth
//                   onClick={handleSubmit}
//                   component="a">
//                   Submit</Button>
//               </ul>
//             </Grid>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'filepond/dist/filepond.min.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { FilePond, registerPlugin } from 'react-filepond';
import axios from 'axios';
import Navbar from '../sub-component/navbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TextField from '@mui/material/TextField';

registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
);

const defaultTheme = createTheme();

export default function UploadDoc() {
  const userId = localStorage.getItem('data1');
  const [files, setFiles] = useState([]);
  const [name,setName] = useState()

  const handleUpdateFiles = (fileItems) => {
    setFiles(fileItems.map(fileItem => fileItem.file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    files.forEach(file => {
      formData.append('image', file);
    });
    formData.append('name', name);

    try {
      const response = await axios.post(`http://localhost:5000/uploaddocuments/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      Swal.fire('Success', 'Documents uploaded successfully!', 'success');
    } catch (error) {
      console.error('Error uploading files:', error);
      Swal.fire('Error', 'Failed to upload documents', 'error');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={4} md={7}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '10%', marginLeft: '5%' }}>
          <ListItem>
                   <ListItemAvatar>
                     <Avatar>
                       <PictureAsPdfIcon />
                     </Avatar>
                   </ListItemAvatar>
                   <ListItemText primary="Copy of Agreement" />
                 </ListItem>
                 <ListItem>
                   <ListItemAvatar>
                     <Avatar>
                       <PictureAsPdfIcon />
                     </Avatar>
                   </ListItemAvatar>
                   <ListItemText primary="Copy of Registry" />
                 </ListItem>
                 <ListItem>
                   <ListItemAvatar>
                     <Avatar>
                       <PictureAsPdfIcon />
                     </Avatar>
                   </ListItemAvatar>
                   <ListItemText primary="Copy of Booking" />
                 </ListItem>
                 <ListItem>
                   <ListItemAvatar>
                     <Avatar>
                      <PictureAsPdfIcon />
                     </Avatar>
                  </ListItemAvatar>
                   <ListItemText primary="Loan application form" />
                 </ListItem>
                 <ListItem>
                   <ListItemAvatar>
                     <Avatar>
                       <PictureAsPdfIcon />
                    </Avatar>
                   </ListItemAvatar>
                   <ListItemText primary="Identification Proof" />
                 </ListItem>
                 <ListItem>
                   <ListItemAvatar>
                     <Avatar>
                       <PictureAsPdfIcon />
                    </Avatar>
                  </ListItemAvatar>
                   <ListItemText primary="Residence proof" />
                 </ListItem>
                 <ListItem>
                   <ListItemAvatar>
                     <Avatar>
                       <PictureAsPdfIcon />
                     </Avatar>
                   </ListItemAvatar>
                   <ListItemText primary="Bank Account Statement /Passbook" />
                 </ListItem>
                 <ListItem>
                   <ListItemAvatar>
                     <Avatar>
                       <PictureAsPdfIcon />
                     </Avatar>
                   </ListItemAvatar>
                   <ListItemText primary="Signature verification by bankers" />
                 </ListItem>
               <ListItem>
                   <ListItemAvatar>
                     <Avatar>
                       <PictureAsPdfIcon />
                     </Avatar>
                  </ListItemAvatar>
                   <ListItemText primary="Propert Details Document" />
                 </ListItem>
         </List>
      </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
         <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', marginTop: '15%' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{ marginTop: '5%' }}>
              Upload your Document
            </Typography>
            <TextField onChange={(e)=>setName(e.target.value)} label="Enter Full name during login" id="Enter Full name during login" style={{marginTop:"2%"}}/>
            <Grid style={{ marginTop: '3%', width: '80%' }}>
              <FilePond
                className="filepond"
                name="filepond"
                allowMultiple={true}
                maxFileSize="13MB"
                maxFiles={19}
                onupdatefiles={handleUpdateFiles}
              />
              <Button
                size="small"
                style={{ backgroundColor: 'black', marginTop: '10px' }}
                variant="contained"
                fullWidth
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
