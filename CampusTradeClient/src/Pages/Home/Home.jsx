import React from "react";
import { useSelector, useDispatch } from "react-redux";
import desktop from "../../assets/desktop.jpg";
import { CurrencyRupee, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import CardContainer from "../../Components/CardContainer";

const landingPageStyle = {
  background: `url(${desktop})`,
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const textContainerStyle = {
  // backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: "2rem",
  fontFamily: "Arial, sans-serif",
  fontSize: "6rem",
  fontWeight: "bold",
  color: "#333",
  textShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)",
  letterSpacing: "2px",
};
function Home() {
  const products = [
    { label: "laptop", year: 1994 },
    { label: "backpack", year: 1972 },
    { label: "earphones", year: 1974 },
    { label: "bat", year: 2008 },
    { label: "watch", year: 1957 },
    { label: "neckband", year: 1993 },
    { label: "books", year: 1994 },
  ];
  const count = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <>
      <div style={landingPageStyle}>
        <Container>
          <CssBaseline />
          <div style={textContainerStyle}>
            <Typography variant="h1">WELCOME</Typography>
            <Typography variant="h4">TO</Typography>
            <Typography variant="h1">CAMPUS TRADE</Typography>
          </div>
          <Typography>
            "Connecting Campus Communities, One Trade at a Time - CampusTrade,
            Your Gateway to Student Exchanges!"
          </Typography>
        </Container>
      </div>
      <div>
        <Box
          sx={{
            width: "100%",
            height: "1500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              padding: "20px 0px",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">Latest Products</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              overflowY: "auto",
              height: "1500px",
              padding: { xs: "0px", sm: "40px" },
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContainer />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Home;
