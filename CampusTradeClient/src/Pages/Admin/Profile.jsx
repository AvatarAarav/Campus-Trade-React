import styled from "@emotion/styled";
import { LinkedIn, LocationOn, Mail, School, Warning } from "@mui/icons-material";
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
const Profile = () => {
  return (
    <Box sx={{ margin: "20px", display: { xs: "none", sm: "block" } }}>
      <Card>
        <Box2>
          <Avatar sx={{ width: "100px", height: "100px" }} />
          <Typography variant="h6">Admin</Typography>
          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="outlined button group"
          >
            <Button>
              <Mail />
            </Button>
            <Button>
              <School />
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
            width: "360px",
            padding: "10px 20px",
            height: "240px",
            top: "350px",
            right: "20px",
            position: "absolute",
            backgroundColor: "lavender",
            boxShadow: "1",
            borderRadius: "5px",
          }}
        >
          <Typography align="center" variant="h5">
            Reports <Warning />
          </Typography>
          <List
            sx={{
              width: "100%",
              height: "180px",
              overflow: "auto",
              maxWidth: 360,
              bgcolor: "lavender",
            }}
          >
            <ListItemButton>
              {/* <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar> */}
              <img src={football} style={{width:'50px',height:'40px', marginRight:'10px'}} alt="" />
              <ListItemText primary="Football" secondary="posted by Aarav" />
              <Chip size="small" color="secondary" label="5" />
            </ListItemButton>
            <ListItemButton>
              {/* <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar> */}
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
