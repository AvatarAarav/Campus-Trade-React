import { Instagram, LinkedIn, Mail } from '@mui/icons-material'
import { Avatar, Box, Container, Link, List, ListItem, Typography, styled } from '@mui/material'
import React from 'react'
import logopic from '../../assets/CT.svg'
import { useNavigate } from 'react-router-dom';
const StyledBox = styled(Box) ({
  flex:1,

})

const A = styled(Link) ({
  color:'grey',
  "&:hover": {
    color: 'black',
  }
})
const B = styled(Link) ({
  margin:'10px',
  color:'grey',
  "&:hover": {
    color: 'green',
  }
})
function Footer() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/about');
  };
  return (
    <>
    <Box sx={{ width:'100vw',backgroundColor:"lightgray",marginTop:'200px',display:'flex',flexDirection:{xs:'column',sm:'row'},alignItems:'center',padding:'50px 0px'}}>
      <StyledBox sx={{display:{xs:'none',sm:'block',flex:3}}}>
        <Container sx={{display:'flex',alignItems:'flex-start'}}>
          <img src={logopic} />
          <Box>
            <br />
            <br />
          <Typography variant='h4' fontFamily='cursive'>Campus Trade</Typography>
          <Typography variant='p'> made with React and MUI</Typography>
          <br />
          <br />
          <Typography variant='p'>copyright 2023 @CampusTrade.inc</Typography>
          </Box>
        </Container>
      </StyledBox>
      

      <StyledBox sx={{flex:1}}>
        <List>
          <ListItem><Typography variant='h6' component='h6'>Information</Typography></ListItem>
          <ListItem><A href="#" underline="none">Licence</A></ListItem>
          <ListItem><A href="#" underline="none">Privacy Policy</A></ListItem>
          <ListItem><A href="#" underline="none">FAQ</A></ListItem>
        </List>
      </StyledBox>

      <StyledBox sx={{flex:1}}>
        
        <List>
          <ListItem><Typography variant='h6' component='h6'>About</Typography></ListItem>
          <ListItem><A href="#" underline="none">Contact</A></ListItem>
          <ListItem><A  onClick={() => handleNavigation("/about")} underline="none">Team</A></ListItem>
          <ListItem><A href="#" underline="none">Support</A></ListItem>
        </List>
      </StyledBox>

      
        
      <StyledBox sx={{flex:1}}>
        <List>
          <ListItem><Typography variant='h6' component='h6'>Follow Us</Typography></ListItem>
          <B href="#" underline="none"><Mail /></B>
          <B href="#" underline="none"><Instagram /></B>
          <B href="#" underline="none"><LinkedIn /></B>
        </List>
      </StyledBox>

      
    </Box>
    </>
  )
}

export default Footer