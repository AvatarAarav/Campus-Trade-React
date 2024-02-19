import styled from "@emotion/styled";
import { Instagram, LinkedIn, LocationOn, Mail, School, Shield, Verified, Warning } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  Chip,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import football from '../../assets/football4.png'
import speaker from '../../assets/speaker.webp'
import React from "react";

// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const Box2 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});
const Profile = (props) => {
  return (
    <Box sx={{ width:'600px', margin: "20px", display: { xs: "none", sm: "block" } }}>
      <Card>
        <Box2>
          <Avatar sx={{ width: "100px", height: "100px" }} >
            <img src="https://picsum.photos/300/300" alt="display picture" />
          </Avatar>
          <Typography variant="h4">{props.name} <Verified sx={{color:'green'}} /></Typography>
          <Typography variant="p" color='grey'><Shield /> {props._id}</Typography>
          <Typography variant="h6" color='grey'><School /> {props.college}</Typography>
          <Typography variant="h6" color='grey'><Mail /> {props.email}</Typography>
          <ButtonGroup
            variant="contained"
            color="warning"
            aria-label="outlined button group"
          >
            <Button>
              <Instagram />
            </Button>
            
            <Button>
              <LinkedIn />
            </Button>
          </ButtonGroup>
        </Box2>
      </Card>

      <Card>
        <Box
          sx={{
            width: "500px",
            padding: "10px 20px",
            height: "260px",
            top: "450px",
            right: "20px",
            position: "absolute",
            backgroundColor: "lavender",
            boxShadow: "1",
            borderRadius: "5px",
          }}
        >
          <Typography align="center" variant="h5">
            Reports <Warning color="warning" />
          </Typography>
          <List
          
            sx={{
              height: "180px",
              overflow: "auto",
              bgcolor: "lavender",
            }}
          >
            <ListItemButton>
              
              <img src={football} style={{width:'50px',height:'40px', marginRight:'10px'}} alt="" />
              <ListItemText primary="Football" secondary="posted by Aarav" />
              <Chip size="small" color="secondary" label="5" />
            </ListItemButton>
            <ListItemButton>
              
              <img src={speaker} style={{width:'50px',height:'40px', marginRight:'10px'}} alt="" />
              <ListItemText
                primary="Bluetooth Speaker"
                secondary="posted by Pratyush"
              />
              <Chip size="small" color="secondary" label="3" />
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Bat" secondary="posted by Parth" />
              <Chip size="small" color="secondary" label="9" />
            </ListItemButton>
          </List>
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;
