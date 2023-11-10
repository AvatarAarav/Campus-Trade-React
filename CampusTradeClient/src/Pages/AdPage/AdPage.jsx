import React, { useState } from 'react'
import { Container, Grid, Typography, Paper, Box, Chip, Stack, Divider } from '@mui/material';
import { TextField, Button } from '@mui/material';
import {PieChart} from '@mui/x-charts/PieChart'
import football from '../../assets/football.jpg'
import theme from '../../theme';
import { CurrencyRupee, Error, Favorite, Mail, ShoppingCart, Star } from '@mui/icons-material';
function AdPage() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send an email to the seller)
  };




  // chat form
  const handleSendClick = () => {
    if (message.trim() !== '') {
      // Call the provided callback to send the message
      onSendMessage(message);
      setMessage(''); // Clear the message input
    }
  };



  return (
    <Box sx={{display:'flex',flexDirection:'column', marginTop:'50px'}}>
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <Paper elevation={3}>
            <img src={football} alt='none' style={{ width: '100%' }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h4" color='text.primary' >
            Football
          </Typography>
          <Typography variant="subtitle1" color='text.secondary' gutterBottom>
            white football for kids, veterans
          </Typography>
          <Typography variant="h4" color="green" gutterBottom>
            1,999<CurrencyRupee fontSize='small' />
          </Typography>
          <Typography variant="h5" component='span' color="text.primary" gutterBottom>
            3 months old /
          </Typography>
          <Typography component='span'> ad posted 2 weeks ago</Typography>
          <hr />
          <Typography variant='subtitle1'>Tags</Typography>
          <Container  sx={{padding:'10px',backgroundColor:'',display:'flex',justifyContent:'start', flexWrap:'wrap',gap:'5px'}}>
            <Chip label="#games" size='small' color="primary" />
            <Chip label="#sports" size='small' color="primary" />
            <Chip label="#kids" size='small' color="success" />
            <Chip label="#games" size='small' color="primary" />
            <Chip label="#outdoor" size='small' color="success" />
            <Chip label="#sports" size='small' color="primary" />
          </Container>
          <hr />
          
          
          <Box sx={{display:'flex',marginTop:'30px',flexDirection: 'row'}}>
            <Box sx={{flex:'1'}}>
            <Box sx={{display:'flex', alignItems:'center'}}><Star color='secondary' fontSize='medium'/><Typography variant='h5'>Features</Typography></Box>
              <ul>
                <li>Bouncy</li>
                <li>pump provided</li>
                <li>easy to play</li>
                <li>water proof</li>
              </ul>
            </Box>
            <Box sx={{flex:'1',backgroundColor:'', position:'relative'}}>
              <Typography marginLeft='60px' variant='h5'>Likes / Views</Typography>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 40, color: '#ff4081', },
                      { id: 1, value: 60, color: '#2196f3', },
                    ],
                    innerRadius: 90,
                    outerRadius: 100,
                    paddingAngle: -3,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,
                    cx: 140,
                    cy: 120,
                  },
                ]}
                width={300}
                height={300}
              />
              <Box sx={{position:'absolute', top:'110px',left:'95px'}}>
                <Typography variant='h3'>40%</Typography>
                <Typography variant='p'>people liked this</Typography>
              </Box>
            </Box>
            
          </Box>
          <Container sx={{  padding:'10px 0px',backgroundColor:'whitesmoke', display:'flex' ,gap:'10px', alignItems:'center'}}>
            <Box><Mail color='primary' sx={{fontSize:'60px'}}  /></Box>
            <Typography component='span' variant='body1'>We highly recommend you to contact the seller if you have any queries regarding the product.</Typography>
          </Container>
          <hr />
          <Box sx={{display:'flex',alignItems:'center', gap:'12px'}}>
              <Button size='large' variant="contained" color='primary' startIcon={<ShoppingCart />}>
                Add to cart
              </Button>
              <Button size='large' variant="outlined" color='secondary' startIcon={<Favorite />}>
                wishlist
              </Button>
              <Button size='large' variant="contained" color='warning' startIcon={<Error />}>
                report
              </Button>
          </Box>
          <hr />
          <Typography variant="h6">Product Description</Typography>
          <Typography variant="body1" fontFamily='cursive' paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tempore omnis, ratione voluptates repellendus officia culpa qui placeat? Eaque, tempore.
          </Typography>
          <Typography variant="body1" fontFamily='cursive' paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quisquam magni, inventore repellat quis laborum corrupti eligendi possimus. Doloremque molestias totam quo alias sapiente, cum minima impedit facilis earum asperiores!
          </Typography>
          <Typography variant="body1" fontFamily='cursive' paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, exercitationem.
          </Typography>
          <hr />
        </Grid>
        
      </Grid>
      
    </Container>
  
    
    <Container sx={{display:'flex', marginTop:'100px'}}>
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{padding:'30px'}}>
            <Mail color='secondary' fontSize='large' sx={{marginRight:'10px'}} />
            <Typography variant="h6" color='text.secondary' component='span' gutterBottom>
              Contact the Seller
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Subject"
                fullWidth
                variant="filled"
                margin="normal"
                value={subject}
                onChange={handleSubjectChange}
              />
              <TextField
                label="Message"
                fullWidth
                variant="standard"
                margin="normal"
                multiline
                rows={4}
                value={message}
                onChange={handleMessageChange}
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                style={{ marginTop: '10px' }}
              >
                Send Mail
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{padding:'30px'}}>
            <Typography variant="h6" gutterBottom>
              Group Chat ( still pending )
            </Typography>
            <TextField
              label="Type your message"
              fullWidth
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              value={message}
              onChange={handleMessageChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendClick}
              style={{ marginTop: '10px' }}
            >
              Send
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>

    </Container>
    <br />
    <br />
    </Box>

  )
}

export default AdPage