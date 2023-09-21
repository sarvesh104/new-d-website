import React from 'react'
import Pagewidth from './common/Container';
import Grid from '@mui/material/Grid';
import passo from "../components/images/passopen.png";

// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import  Tick from "./images/tick.png"


const Header = () => {
  return (
  <Pagewidth sx={{marginBottom:"30px", marginTop:"10px", }}>
    <Grid container spacing={3} className='head-grid'>
  <Grid item xs={7} >
    <Stack sx={{
      display:{ sm:"none", md:"block",xs:"none", }, marginLeft:"20px",
        }}>
      <img src={passo}  alt="logo" className='' />
    </Stack>
    <Stack sx={{
      display:{ sm:"block", md:"none" , xs:'block'}, 
        }}>
      <img src={Tick}  alt="logo" className='' />
    </Stack>


    

  </Grid> 
  <Grid item xs={2}  sx={{display:"flex", alignItems:'center', }}>
    <Stack sx={{ display:{sm : "none", md : "block",xs:"none"} , }}>
    <Button variant="outlined" sx={{color:"black", padding:"10px 30px "}}>Log in</Button>
    </Stack>
  </Grid>
  <Grid item xs={2} sm={3}
   sx={{display:"flex", alignItems:'center', }}
  >
   <Stack sx={{display:"flex", justifyContent:"flex-start"}}><Button variant="contained" sx={{padding:"10px 30px "}}>Get App</Button></Stack> 
  </Grid>
 
</Grid>
  </Pagewidth>
  )
}

export default Header;  