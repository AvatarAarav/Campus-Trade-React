import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import desktop from '../../assets/desktop.jpg'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import CardContainer from '../../Components/CardContainer';

const landingPageStyle = {
  background: `url(${desktop})`,
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const textContainerStyle = {
  // backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  fontSize: '6rem',
  fontWeight: 'bold',
  color: '#333',
  textShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)',
  letterSpacing: '2px',
};
function Home() {
  const count = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  
  return (
    <>
    <div style={landingPageStyle}>
      <Container>
        <CssBaseline />
        <div style={textContainerStyle}>
          <Typography variant="h1">
            WELCOME
          </Typography>
          <Typography variant="h4">
            TO
          </Typography>
          <Typography variant="h1">
           CAMPUS TRADE
          </Typography>
        </div>
        <Typography>
          "Connecting Campus Communities, One Trade at a Time - CampusTrade, Your Gateway to Student Exchanges!"
        </Typography>
      </Container>
    </div>
    <div>
      <CardContainer/>
    </div>
    </>
  )
}

export default Home
