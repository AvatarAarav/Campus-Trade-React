import  { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import {Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import theme from '../../theme.jsx';

function UserData() {
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        textAlign: "",
        margin: "50px",
        display: "flex",
        maxWidth: "70%",
        border: "1px solid",
        padding: "10px",
        borderRadius:"20px",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box
        className="redbox"
        sx={{ padding: "20px", color: "secondary" }}
      >
        <img
          src="https://media.licdn.com/dms/image/D5603AQGNWbFM14-pvg/profile-displayphoto-shrink_800_800/0/1691730643282?e=2147483647&v=beta&t=ZA4LcfBqZT6HW4QKslEZv4tXz7BVXamW7YRObMbSQ64"
          alt="Profile"
          style={{ maxWidth: "200px", borderRadius: "100%" }}
        />
      </Box>
      <Box>
        <Typography variant="h2" sx={{ fontSize: "50px", color: "#fff" }}>
          Harshan
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff" }}>
          Email: rathodharshan4@gmail.com
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff" }}>
          College: IIIT Sricity
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff" }}>
          Year: 2023
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff" }}>
          Branch: CSE
        </Typography>
      </Box>

      <Box
        className="btns"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          minWidth: "350px",
          marginTop: "200px",
        }}
      >
        <Button
          onClick={() => {}}
          sx={{
            margin: "5px",
            height: "50px",
            transition: "background-color 0.3s ease",
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Edit Profile
        </Button>
        <Button
          sx={{
            margin: "5px",
            height: "50px",
            transition: "background-color 0.3s ease",
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          +Post Ad
        </Button>
      </Box>
    </Box>
    </ThemeProvider>
  );
}



function UserEarnings() {
  return (
    <Box
      sx={{
        margin: "50px",
        marginTop: "70px",
        border: "1px solid",
        padding: "20px",
        borderRadius: "20px",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Typography variant="body1" sx={{ color: "#fff" }}>
        Ads Posted: 7
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff" }}>
        Ads Bought: 8
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff" }}>
        Earnings: 500
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff" }}>
        Ads Bought Money: 1000
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff" }}>
        Profit: -500
      </Typography>
    </Box>
  );
}

function AdCard() {
  return (
    <Card sx={{ maxWidth: "200px", margin: "10px" }}>
      <CardMedia component="img" height="140"  alt="Ad" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="Box">
          Cost:900
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginRight: "5px" }}>
          Remove
        </Button>
        <Button variant="contained" color="secondary">
          Like
        </Button>
      </CardContent>
    </Card>
  );
}



function UserProfile() {
  const user = {
   
  };

  const [adsPosted, setAdsPosted] = useState(2);
  const [adsBought, setAdsBought] = useState(2);

  const earnings = {
    adsPosted,
    adsBought,
    earnings: 1000, // You can replace this with your actual earnings calculation
    adsBoughtMoney: 500, // You can replace this with your actual data
    profit: 500, // You can replace this with your actual profit calculation
  };

  const [postedAds, setPostedAds] = useState([
    { photo: "ad1.jpg", cost: 50 },
    { photo: "ad2.jpg", cost: 30 },
  ]);

  const [boughtAds, setBoughtAds] = useState([
    { photo: "ad3.jpg", cost: 40 },
    { photo: "ad4.jpg", cost: 25 },
  ]);

  function AdsPosted() {
    return (
      <Box sx={{display:"flex"}}>
        {postedAds.map((ad, index) => (
          <AdCard key={index} ad={ad} />
        ))}
      </Box>
    );
  }
  
  function AdsBought() {
    return (
      <Box sx={{display:"flex"}} >
        {boughtAds.map((ad, index) => (
          <AdCard key={index} ad={ad} />
        ))}
      </Box>
    );
  }

  const handleEditProfile = () => {
    // Implement the edit profile functionality here
  };

  const handlePostAd = () => {
    const newAd = { photo: "new_ad.jpg", cost: 60 };
    setPostedAds((prevAds) => [...prevAds, newAd]);
    setAdsPosted(adsPosted + 1);
  };

  const handleBuyAd = () => {
    const newAd = { photo: "new_ad.jpg", cost: 60 };
    setBoughtAds((prevAds) => [...prevAds, newAd]);
    setAdsBought(adsBought + 1);
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, padding: '30px' }}>
    <Box sx={{ display: "flex" }}>
      <UserData user={user} onEditProfile={() => {}} />
      <UserEarnings {...earnings} />
    </Box>

    <Typography variant="h3"sx={{ textAlign: "center", border: "1px solid", margin: '20px' ,backgroundColor: theme.palette.primary.default}}>
      Ads Posted
    </Typography>
    <AdsPosted postedAds={postedAds} />

    <Typography variant="h3" sx={{ textAlign: "center", border: "1px solid", margin: '20px',backgroundColor: theme.palette.primary.default }}>
      Ads Bought
    </Typography>
    <AdsBought boughtAds={boughtAds} />
  </Box>
  );
}

export default UserProfile;
