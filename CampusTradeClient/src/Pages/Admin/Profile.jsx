import styled from "@emotion/styled";
import { LinkedIn, LocationOn, Mail, School, Warning } from "@mui/icons-material";
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

const Box2 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

const Profile = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  useEffect(() => {
    dispatch(fetchReportedAds())
      .then(() => setIsLoading(false)) // Set loading to false when reports are fetched
      .catch(() => setIsLoading(false)); // Handle errors if any
  }, []);

  const reports = useSelector(state => state.admin.reportedAds);
  console.log(reports);

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
                maxWidth: 360,
                bgcolor: "lavender",
              }}
            >
              {reports.map(o => (
                <ListItemButton key={o.id}>
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
