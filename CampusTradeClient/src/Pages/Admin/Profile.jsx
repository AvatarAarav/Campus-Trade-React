import styled from "@emotion/styled";
import { Instagram, LinkedIn, LocationOn, Mail, School, Shield, Verified, Warning } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  Chip,
  CircularProgress, // Import CircularProgress for the loader
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchReportedAds } from "../../Store/AdminSlice";
import football from '../../assets/football4.png';
import speaker from '../../assets/speaker.webp';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAdDetails } from "../../Store/ProductSlice";

const Box2 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {_id,name,email,college,soldOut,reportedAds,activity,prodCount,userCount,revenue}=useSelector(state=>state.admin.adminDetails)
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  useEffect(() => {
    dispatch(fetchReportedAds(college))
      .then(() => setIsLoading(false)) // Set loading to false when reports are fetched
      .catch(() => setIsLoading(false)); // Handle errors if any
  }, [college]);

  const reports = useSelector(state => state.admin.reportedAds);
  console.log(reports);

  return (
    <Box sx={{ width:'600px', margin: "20px", display: { xs: "none", sm: "block" } }}>
      <Card>
        <Box2>
          <Avatar sx={{ width: "100px", height: "100px" }} >
            <img src="https://picsum.photos/300/300" alt="display picture" />
          </Avatar>
          <Typography variant="h4">{name} <Verified sx={{color:'green'}} /></Typography>
          <Typography variant="p" color='grey'><Shield /> {_id}</Typography>
          {college!="-" && <Typography variant="h6" color='grey'><School /> {college}</Typography>}
          <Typography variant="h6" color='grey'><Mail /> {email}</Typography>
          <ButtonGroup
            variant="contained"
            color="warning"
            aria-label="outlined button group"
          >
            <a href="https://www.instagram.com/avatar_aarav?igsh=MTdscHpmOG8wOW4w" target="_blank" rel="noopener noreferrer">
            <Button>
              <Instagram />
            </Button>
</a>
            
            
            <a href="https://www.linkedin.com/in/aarav-nigam/" target="_blank" rel="noopener noreferrer">
            <Button>
              <LinkedIn />
            </Button>
</a>
            
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
            Reports <Chip size="small" color="secondary" label={reports.length} /><Warning color="warning" />
          </Typography>
          {isLoading ? ( // Show loader if loading
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180px' }}>
              <CircularProgress />
            </Box>
          ) : reports.length === 0 ? ( // Show message if reports are empty
            <Typography align="center">No reports found.</Typography>
          ) : (
            <List
              sx={{
                width: "100%",
                height: "180px",
                overflow: "auto",
                                bgcolor: "lavender",
              }}
            >
              {reports.map(o => (
                <ListItemButton key={o.id} onClick={()=>{
                  dispatch(fetchAdDetails(o.id));
                  navigate('/ad')
                }}>
                  <img src={`https://drive.google.com/thumbnail?authuser=0&sz=w600&id=${o.image_id}`} style={{ width: '50px', height: '40px', marginRight: '10px' }} alt="" />
                  <ListItemText primary={o.name} />
                  <Chip size="small" color="secondary" label={o.reportCount} />
                </ListItemButton>
              ))}
            </List>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;
