import { Instagram, LinkedIn, Mail } from '@mui/icons-material'
import { Avatar, Box, Container, Link, List, ListItem, Typography, styled } from '@mui/material'
import React from 'react'

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
  return (
    <Box sx={{backgroundColor:"lightgray",display:'flex',flexDirection:{xs:'column',sm:'row'},alignItems:'center',padding:'50px 0px'}}>
      <StyledBox sx={{display:{xs:'none',sm:'block'}}}>
        <Container>
          <Avatar>CT</Avatar> <Typography variant='h5'>Campus Trade</Typography>
          <Typography>Ug-3 , CSE</Typography>
          <Typography>IIIT Sri City</Typography>
        </Container>
      </StyledBox>
      

      <StyledBox>
        <List>
          <ListItem><Typography variant='h6' component='h6'>Information</Typography></ListItem>
          <ListItem><A href="#" underline="none">Licence</A></ListItem>
          <ListItem><A href="#" underline="none">Privacy Policy</A></ListItem>
          <ListItem><A href="#" underline="none">FAQ</A></ListItem>
        </List>
      </StyledBox>

      <StyledBox>
        
        <List>
          <ListItem><Typography variant='h6' component='h6'>About</Typography></ListItem>
          <ListItem><A href="#" underline="none">Contact</A></ListItem>
          <ListItem><A href="#" underline="none">Team</A></ListItem>
          <ListItem><A href="#" underline="none">Support</A></ListItem>
        </List>
      </StyledBox>

      
        
      <StyledBox>
        <List>
          <ListItem><Typography variant='h6' component='h6'>Follow Us</Typography></ListItem>
          <B href="#" underline="none"><Mail /></B>
          <B href="#" underline="none"><Instagram /></B>
          <B href="#" underline="none"><LinkedIn /></B>
        </List>
      </StyledBox>

      
    </Box>
  )
}

export default Footer