import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import p from '../../assets/p2.gif'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { School } from '@mui/icons-material';
import ScrollAnimation from 'react-animate-on-scroll';
import { useNavigate } from 'react-router-dom';

import landing from '../../assets/cartoon.gif'
import landing2 from '../../assets/cartoon2.gif'
import landing3 from '../../assets/cartoon3.gif'

import l1 from '../../assets/l4.png'
import l2 from '../../assets/l2.jpg'
import l3 from '../../assets/l5.png'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <Box>
          <Box sx={{width:'100vw',backgroundColor:'white', height:'100vh', display:'flex',flexDirection:'row-reverse', justifyContent:'space-between'}}>
            
            <Box sx={{width:'65%', height:'400px',backgroundColor:'salmon', borderBottomLeftRadius:'50px', padding:'50px', position:'relative'}}>
                <marquee style={{fontSize:'32px', color:'white'}} behavior="" direction="">"Connecting  Campus Communities, One Trade at a Time - CampusTrade, Your Gateway to Student Exchanges!"</marquee>

                
                  <Box sx={{width:'1000px',height:'70vh',border:'0px solid green',borderRadius:'50px',borderTopRightRadius:'0px', borderBottomRightRadius:'0px',borderRight:'0px solid green',position:'absolute', top:'140px', right:'0px',overflow:'hidden', boxShadow:3}}>
                        <img style={{width:'100%'}} src={p} alt="" />
                        {/* <video
                        style={{width:'100%'}}
                          src={landing}
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls={false} // This ensures controls are hidden
                        >
                          Your browser does not support the video tag.
                        </video> */}
                  </Box>
                
            </Box>
            <Box sx={{width:'25%', padding:'20px', marginLeft:'60px', backgroundColor:''}}>
                <br />
                <ScrollAnimation animateIn="animate__backInDown" animateOut = "animate__backOutUp">
                  <Typography sx={{color:'dodgerblue'}} variant="h1" fontFamily='segoi UI'>
                  Campus
                  </Typography>
                </ScrollAnimation>
                
                <ScrollAnimation animateIn="animate__backInLeft" animateOut = "animate__backOutLeft">
                  <Typography sx={{color:'dodgerblue'}} variant="h1" fontFamily='tahoma'>
                    Trade <ShoppingCartIcon fontSize='x-large' />
                  </Typography>
                </ScrollAnimation>
                

                <ScrollAnimation animateIn="animate__backInRight" animateOut = "animate__backOutRight">
                  <Typography sx={{color:'grey'}}  variant="h1" fontFamily="">
                    Simplifying
                    </Typography>
                </ScrollAnimation>
                

                <ScrollAnimation animateIn="animate__heartBeat" animateOut = "animate__heartBeat">
                  <Typography sx={{color:'grey'}} variant="h2" fontStyle={'italic'} fontFamily='tahoma'><School fontSize='x-large' /> Student</Typography>
                </ScrollAnimation>
                

                <ScrollAnimation animateIn="animate__backInUp" animateOut = "animate__backOutRight">
                  <Typography sx={{color:'salmon'}} variant="h1" fontFamily='fantasy'>
                    Exchanges
                  </Typography>
                </ScrollAnimation>
                
                <br />
                <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                <Button onClick={()=>{navigate('/home')}} variant='contained' size='large' sx={{margin:'auto'}}>Get Started</Button>
                </Box>
                
            </Box>
        </Box>

          <br />
          <br />
          <br />
          <Typography textAlign='center' variant='h2' sx={{backgroundColor:'#f0f4f9', padding:'10px', borderRadius:'40px'}}>Key Features</Typography>
          <br />
          <br />
          <br />

        <Box sx={{width:'100vw', backgroundColor:''}}>
          <Box sx={{width:'75%',display:'flex', gap:'80px', margin:'auto',alignItems:'center'}}>
            <ScrollAnimation animateIn="animate__backInDown" animateOut = "animate__backOutLeft">
              <Box><img style={{width:'600px', borderRadius:'50px'}} src={l1} alt="" /></Box>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__backInRight" animateOut = "animate__backOutRight">
              <Typography sx={{backgroundColor:'#f0f4f9', padding:'25px', borderRadius:'40px', borderTopLeftRadius:'0px'}} variant='h4'>Celebrate the power of connectivity and convenience with our 'On the Go Shopping' feature, empowering students to seamlessly exchange and acquire essentials wherever their academic journey takes them.</Typography>
            </ScrollAnimation>
            
          </Box>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />


          <Box sx={{width:'75%',display:'flex', gap:'80px', margin:'auto',alignItems:'center'}}>
            <ScrollAnimation animateIn="animate__backInDown" animateOut = "animate__backOutLeft">
              <Typography sx={{backgroundColor:'#f0f4f9', padding:'25px', borderRadius:'40px', borderTopLeftRadius:'0px'}} variant='h4'>With our platform's seamless communication tools, the boundaries of traditional exchange methods dissolve, fostering a dynamic community where students can effortlessly connect, trade with each other regardless of physical location.</Typography>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="animate__backInUp" animateOut = "animate__backOutRight">
              <Box><img style={{width:'600px', borderRadius:'50px'}} src={l2} alt="" /></Box>
            </ScrollAnimation>
              
              
          </Box>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          
          <Box sx={{width:'75%',display:'flex', gap:'80px', margin:'auto',alignItems:'center'}}>
            <ScrollAnimation animateIn="animate__backInLeft" animateOut = "animate__backOutLeft">
              <Box><img style={{width:'600px', borderRadius:'50px'}} src={l3} alt="" /></Box>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__backInRight" animateOut = "animate__backOutRight">
              <Typography sx={{backgroundColor:'#f0f4f9', padding:'25px', borderRadius:'40px', borderTopLeftRadius:'0px'}} variant='h4'>Say goodbye to slow loading times and hello to instant access to product information. With Redis, we're creating a streamlined exchange experience, empowering users to make connections and transactions swiftly and seamlessly.</Typography>
            </ScrollAnimation>
          </Box>

          <br />
          <br />
          <br />
          <br />
          <br />

          <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
            <Button onClick={()=>{navigate('/home')}} variant='outlined' size='large' sx={{width:'200px', height:'70px'}}>Get Started</Button>
          </Box>      
          
        </Box>
    </Box>
    
  )
}

export default LandingPage