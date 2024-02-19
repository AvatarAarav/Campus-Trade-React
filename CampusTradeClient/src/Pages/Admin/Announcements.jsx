import React, { useState } from 'react';
import { Grid , Paper, TextField, Button,  Typography, List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar} from '@mui/material';

import { Announcement, Mail, School } from '@mui/icons-material';

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

const CollegeList = () => {
  // Dummy data for college list
  const colleges = [1,2,3,4,7,5,6,6,8];

  return (
    // <Paper style={styles.paper}>
    //   <Typography variant="h6" gutterBottom>
    //     Colleges
    //   </Typography>
    //   <ul style={{ listStyleType: 'none', padding: 0 }}>
    //     {colleges.map((college, index) => (
    //       <li key={index}>{college}</li>
    //     ))}
    //   </ul>
    // </Paper>
    <Paper sx={{ padding: 2 }}>
          <Typography variant="h4" gutterBottom sx={{color:'grey'}}>
            <School fontSize='large' color='warning'  /> List of Top Colleges 
          </Typography>
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
                            primary="Indian Institute of Technology Sri City"
                            secondary="Description of College 1"
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
