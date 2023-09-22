import React from 'react'
import Pagewidth from './common/Container';
import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import abouti from "../components/images/aboutus.png";

const About = () => {
  return (
    <Pagewidth sx={{ display: "flex",justifyContent:"center", alignItems: "left", marginTop: "50px" }}>
      <Stack>
      <Typography sx={{marginBottom:"80px", fontSize:"24px", fontWeight:"900"}}>About Us</Typography>
      </Stack>
      <Grid container spacing={7} columns={12} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Grid  xs={4}>
          <Box 
            sx={{letterSpacing: "1px",fontSize:"15px"}}>
            How does our app work? It works when a student clicks on an app such as Youtube, Snapchat, Facebook, TikTok or any other app you deem necessary. Everytime the student clicks on the app, the student will be looking at a quiz that is related to their class curriculum or flashca rds to practice for the SAT, a second language, or anything educational. Pass2Open can also pop-up flash cards or quizes intermittently while the student is looking at YouTube or social media creating more engagement for the child.</Box>
        </Grid>

        <Grid item >
          <Box >
            <img src={abouti} style={{maxWidth:"450px"}}/>
          </Box>
        </Grid>
      </Grid>
      </Pagewidth>

  )
}

export default About