import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import useNavigatec, { useNavigate } from "react-router-dom"
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

export default function Sidebar() {
  const navigate = useNavigate()

  const handlealluser =()=>{
    navigate('/allusers')
  }
  const handleDoc =()=>{
    navigate('/alldocuments')
  }
  const handleQuery =()=>{
    navigate('/allquery')
  }
  const handlerental =()=>{
    navigate('/rentalDetail')
  }
  const handleuser=()=>{
    navigate('/createuser')
  }
  const handleupload =()=>{
    navigate('/uploadnews')
  }
  const handleNews =()=>{
    navigate('/allnews')
  }
  const handledocuments =()=>{
    navigate('/alldocuments')
  }
    return(
        <div style={{color:'white', background:'#383B2A', height:'100vh'}}>
  <React.Fragment >
    <ListItemButton onClick={handlealluser} >
      <ListItemIcon style={{color:'white'}}>
      <i class="fa-solid fa-users"></i>
      </ListItemIcon>
      <ListItemText primary="Users(Tanent,Customer)" />
    </ListItemButton>
    <ListItemButton onClick={handleQuery}>
      <ListItemIcon style={{color:'white'}}>
      <i class="fa-solid fa-clipboard-question"></i>
      </ListItemIcon>
      <ListItemText primary="Maintanance Query" />
    </ListItemButton>
    <ListItemButton onClick={handlerental}>
      <ListItemIcon style={{color:'white'}}>
      <i class="fa-solid fa-building"></i>
      </ListItemIcon>
      <ListItemText primary="Rental flats" />
    </ListItemButton>
    <ListItemButton onClick={handleNews}>
      <ListItemIcon style={{color:'white'}}>
      <i class="fa-solid fa-building"></i>
      </ListItemIcon>
      <ListItemText primary="All News"/>
    </ListItemButton>
    <ListItemButton onClick={handledocuments}>
      <ListItemIcon style={{color:'white'}}>
      <DocumentScannerIcon/>
      </ListItemIcon>
      <ListItemText primary="All Documents"/>
    </ListItemButton>
  
    <ListItemButton onClick={handleuser}>
      <ListItemIcon style={{color:'white'}}>
      <i class="fa-solid fa-user-plus"></i>
      </ListItemIcon>
      <ListItemText primary="Create User" />
    </ListItemButton>
    <ListItemButton onClick={handleupload}>
      <ListItemIcon style={{color:'white'}}>
      <i class="fa-solid fa-upload"></i>
      </ListItemIcon>
      <ListItemText primary="News Upload" />
    </ListItemButton>
  </React.Fragment>
  </div>

)
}