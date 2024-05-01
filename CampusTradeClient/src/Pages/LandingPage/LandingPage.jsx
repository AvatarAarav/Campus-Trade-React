import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import p from '../../assets/p1.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { School } from '@mui/icons-material';
import ScrollAnimation from 'react-animate-on-scroll';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{width:'100vw',backgroundColor:'whitesmoke', height:'100vh', display:'flex',flexDirection:'row-reverse', justifyContent:'space-between'}}>
        
        <Box sx={{width:'65%', height:'400px',backgroundColor:'lightsalmon', borderBottomLeftRadius:'50px', padding:'50px', position:'relative'}}>
            <marquee style={{fontSize:'32px', color:'white'}} behavior="" direction="">"Connecting  Campus Communities, One Trade at a Time - CampusTrade, Your Gateway to Student Exchanges!"</marquee>

            
              <Box sx={{width:'900px',border:'0px solid green',borderRadius:'50px',borderTopRightRadius:'0px', borderBottomRightRadius:'0px',borderRight:'0px solid green',position:'absolute', top:'140px', right:'0px', boxShadow:5,overflow:'hidden'}}>
                    <img style={{width:'100%'}} src={p} alt="" />
              </Box>
            
        </Box>
        <Box sx={{width:'25%', padding:'20px', marginLeft:'60px', backgroundColor:''}}>
            <br />
            <ScrollAnimation animateIn="animate__backInDown" animateOut = "animate__backOutUp">
              <Typography sx={{color:'#333'}} variant="h1" fontFamily='segoi UI'>
              Campus
              </Typography>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="animate__backInLeft" animateOut = "animate__backOutLeft">
              <Typography sx={{color:'#333'}} variant="h1" fontFamily='tahoma'>
                Trade <ShoppingCartIcon fontSize='x-large' />
              </Typography>
            </ScrollAnimation>
            

            <ScrollAnimation animateIn="animate__backInRight" animateOut = "animate__backOutRight">
              <Typography sx={{color:'#333'}} variant="h1" fontFamily="">
                Simplifying
                </Typography>
            </ScrollAnimation>
            

            <ScrollAnimation animateIn="animate__heartBeat" animateOut = "animate__heartBeat">
              <Typography sx={{color:'#333'}} variant="h2" fontFamily='BlinkMacSystemFont'><School fontSize='x-large' /> Student</Typography>
            </ScrollAnimation>
            

            <ScrollAnimation animateIn="animate__backInUp" animateOut = "animate__backOutDown">
              <Typography sx={{color:'#333'}} variant="h1" fontFamily='fantasy'>
                Exchanges
              </Typography>
            </ScrollAnimation>
            
            <br />
            <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
            <Button onClick={()=>{navigate('/home')}} variant='outlined' size='large' sx={{margin:'auto'}}>Get Started</Button>
            </Box>
            
        </Box>
    </Box>
  )
}

export default LandingPage