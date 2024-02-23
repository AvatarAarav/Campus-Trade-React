import React, { useState } from 'react';
import { Grid , Paper, TextField, Button,  Typography, List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar, Box, Chip, Modal} from '@mui/material';

import { Announcement, Mail, PlusOne, School } from '@mui/icons-material';
import { sendAnnouncement } from '../../apis';

const styles = {
  root: {
    
    padding:'30px',
    height: '100vh',
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
    color: 'inherit',
    height: '100%',
  },
  form: {
    '& .MuiTextField-root': {
      margin: '10px',
      width: 'calc(100% - 20px)',
    },
  },
};

const AnnouncementForm = () => {

    const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendAnnouncement(subject, message)
  };


  return (
    <Paper elevation={3} sx={{ padding: "30px" }}>
                <Mail
                  color="secondary"
                  fontSize="large"
                  sx={{ marginRight: "10px" }}
                />
                <Typography
                  variant="h6"
                  color="text.secondary"
                  component="span"
                  gutterBottom
                >
                  Make Announcements Here...!
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
                    style={{ marginTop: "10px" }}
                  >
                    Post
                  </Button>
                </form>
              </Paper>
  );
};


// Array of colleges
const colleges = [
  {
    label: 'MIT',
    cid: 0,
  },
  {
    label: 'IIT Madras',
    cid: 1,
  },
  {
    label: 'NIT Rourkela',
    cid: 2,
  },
  {
    label: 'IIIT Sri City',
    cid: 3,
  },
  {
    label: 'IIT Kharagpur',
    cid: 4,
  },
  {
    label: 'NIT Suratkal',
    cid: 5,
  },
  {
    label: 'IIIT Hyderabad',
    cid: 6,
  },
  {
    label: 'IIT Patna',
    cid: 7,
  },
  {
    label: 'NIT Bhopal',
    cid: 8,
  },
  {
    label: 'IIIT Trichy',
    cid: 9,
  },
  {
    label: 'IIT Roorkee',
    cid: 10,
  },
  {
    label: 'NIT Trichy',
    cid: 11,
  },
];


const CollegeList = () => {
  // Dummy data for college list

  const [college, setcollege] = useState('');
  const [open,setopen] = useState(false);

  const handleopen = () => {
    setopen(true);
  }

  const handleClose = () => {
    setopen(false);
  }

  const addCollege = () => {
    if(college === '') {
      alert('Please fill the required feilds.')
      return;
    }
    
    colleges.push({label: college, cid: 999});
    setopen(false);
  }

  

  return (
    <Paper sx={{ padding: 4 }}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant="h4" gutterBottom sx={{color:'grey'}}>
            <School fontSize='large' color='warning'  /> List of Top Colleges <sup style={{color:'green'}}>{colleges.length}</sup> 
          </Typography>

          <Button variant='outlined' onClick={handleopen} color='secondary'>Add more +</Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',width:'580px', backgroundColor:'white', margin:'200px auto', padding:'30px', borderRadius:'10px'}}>
              <Typography variant="h5" gutterBottom>Please fill the following fields...!</Typography>
              <TextField id="collegename" label="College Name" fullWidth variant="outlined" value={college} onChange={(e) => setcollege(e.target.value)} />
              <Box display='flex' justifyContent='flex-end' gap={2} marginTop={2}>
                <Button variant="outlined" size="large" onClick={handleClose} color="success">cancel</Button>
                <Button variant="contained" size="large" color="success" onClick={addCollege}>Confirm</Button>
              </Box>
            </Box>
          </Modal>
      </Box>
          
          <List sx={{ width: '100%', height:'600px' ,overflow:'auto'}}>
            {colleges.map((a) => {
                return (
                    <>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar sx={{width:56, height:56, marginRight:2}} src="" alt="random" >
                                <img src="https://picsum.photos/300/300" alt="" />
                            </Avatar>
                            </ListItemAvatar>
                        <ListItemText
                            primary={a.label}
                            secondary="Click to Update"
                        />
                        </ListItem>
                        <Divider />
                    </>
                    
                )       
            })}
            
          </List>
        </Paper>
  );
};

const Announcements = () => {
  return (
    <div style={styles.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={6}>
          <AnnouncementForm />
        </Grid>
        <Grid item xs={6}>
          <CollegeList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Announcements;
