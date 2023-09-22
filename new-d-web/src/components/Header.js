import React from 'react'
import Pagewidth from './common/Container';
import Grid from '@mui/material/Grid';
import passo from "../components/images/passopen.png";

// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Stack, makeStyles } from '@mui/material';
import  Tick from "./images/tick.png"

const Header = () => {
//   const classes = useStyle()

  return (
  <Pagewidth sx={{marginBottom:{md:"100px", sm:"50px",xs:"40px"}, marginTop:"10px",  }}>
    <Grid container spacing={2 } className='head-grid' sx={{marginLeft:{xs:"60px"},marginRight:{xs:"30px"}, marginBottom:{md:"100px", sm:"50px"},xs:"200px"}}>
  <Grid item xs={4} sm={5} md={6}>
    <Stack sx={{
      display:{ sm:"none", md:"block",xs:"none", }, marginLeft:"20px",
        }}>
      <img src={passo}  alt="logo" className='' />
    </Stack>
    <Stack  sm={4} sx={{
      display:{ sm:"block", md:"none" , xs:'block'}, justifyContent:{xs:"center"}, marginLeft:{xs:"20px"}
        }}>
      <img src={Tick}  alt="logo" className='' />
    </Stack>


    

  </Grid> 
  <Grid item xs={0} sm={3} md={3} sx={{display:"flex", alignItems:'center', justifyContent:"flex-end"}}>
    <Stack sx={{ display:{sm : "none", md : "block",xs:"none"} , }}>
    <Button variant="outlined" sx={{color:"black", padding:"10px 40px "}}>Log in</Button>
    </Stack>
  </Grid>
  <Grid item xs={5} sm={3} md={2}
   sx={{display:'flex',alignItems:"center", justifyContent:{xs:"flex-end", md:"flex-end",  }}}
  //  className={classes.class}
  >
   <Stack sx={{display:"flex",justifyContent:{xs:"flex-end"}}}><Button variant="contained" sx={{padding:{md:"10px 40px ",sm:"10px 25px"}, }}>Get App</Button></Stack> 
  </Grid>
 
</Grid>
  </Pagewidth>
  )}
// }

// const useStyle= makeStyles({
//   class :{
//     display:"flex", justifyContent:"flex-start"
//   },
// })

export default Header;  