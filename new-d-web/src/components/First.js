import React from 'react';
import { Box, Grid, Stack } from '@mui/material';
import Pagewidth from './common/Container';
import introi from "../components/images/intromob.png"

const First = () => {
  return (
    <Pagewidth>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ flexDirection: { md: "row", sm: "column", xs: "column" }, }}>
        <Grid xs={8} sm={8} md={6} sx={{ display: 'flex', justifyContent: { md: "flex-start" }, flexDirection: "column", marginBottom: { sm: "40px", xs:"30px" }, }}>
          <div style={{ display: 'flex', alignItems: "center", marginLeft: "67px", marginBottom: "18px" }}>
            <Box sx={{ display: { sm: "none", md: "block", xs: "none", } }} style={{ width: "18px", height: "4px", backgroundColor: "#08121C", }}></Box>
            <div style={{
              marginLeft: "10px",
              fontSize: "15px",
              fontWeight: 900,
              letterSpacing: "2.40px",
              lineHeight: "0.48px"
            }}>INTRODUCING</div>
          </div>
          <Box sx={{}}>
            <div className='pass' style={{
              display: 'flex', alignItems: "center", marginLeft: "65px", color: "#4472F1", fontSize: "55px", letterSpacing: "2.40px",
              fontWeight: "900", marginBottom: "20px"
            }}>
              Pass2Open
            </div>
            <Box sx={{ fontSize: { xs: "15px", md: "25px", sm: "25px" }, width:{xs:"100%",sm:"100%"} }} className='pass-des' style={{
              display: 'flex', alignItems: "center", marginLeft: "65px", marginBottom: "10px", letterSpacing: "1px", fontWeight: "600"
            }}>
              What if your children had to look at an educational flashcard every time they opened YouTube or Snapchat? Or  perhaps answer a question to get into TikTok?
            </Box>

          </Box>
        </Grid>
        <Grid xs={10} sm={8} md={5} sx={{marginLeft: {sm:"60px", xs:"50px"}}}  >
          <Stack><img src={introi} /></Stack>
        </Grid>

      </Grid>
    </Pagewidth>

  )
}

export default First;