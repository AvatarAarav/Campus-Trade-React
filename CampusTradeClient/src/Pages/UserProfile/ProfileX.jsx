import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Button, Card, CardContent, CardMedia, Typography, Rating } from "@mui/material";
import theme from "../../theme";
import desktop from "../../assets/bg5.jpg";
import { useNavigate } from 'react-router-dom';

function UserData({ user, onEditProfile ,userRating}) {
  const navigate = useNavigate()
  function go_to_ad(){
    navigate("/user/Ad")
  }
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: "50px",
          display: "flex",
          maxWidth: "75%",
          border: "1px solid",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <Box className="redbox" sx={{ padding: "20px", color: "secondary" }}>
          <img
            src={user.profileIcon}
            alt="Profile"
            style={{ maxWidth: "200px", borderRadius: "100%" }}
          />
        </Box>
        <Box sx={{ padding: "20px" }}>
          <Typography variant="h2" sx={{ fontSize: "50px", color: "#fff" }}>
            {user.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            Email: {user.email}
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            College: {user.college_name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            Year: {user.year}
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            Branch: {user.branch}
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            Rating:{" "}
            <Rating
              name="user-rating"
              value={userRating}
              precision={0.5}
              readOnly
              sx={{ color: "" }}
            />
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
            onClick={onEditProfile} href="/updateprofile"
            sx={{
              margin: "5px",
              height: "50px",
              transition: "background-color 0.3s ease",
              backgroundColor: theme.palette.secondary.main,
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
              },
            }}
          >
            Edit Profile
          </Button>
          <Button
           onClick={go_to_ad}
            sx={{
              margin: "5px",
              height: "50px",
              transition: "background-color 0.3s ease",
              backgroundColor: theme.palette.secondary.main,
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
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

function UserEarnings({ adsPosted, adsBought, earnings, adsBoughtMoney, profit }) {
  return (
    <Box
      sx={{
        margin: "55px",
        marginTop: "70px",
        border: "2px solid",
        padding: "30px",
        borderRadius: "20px",
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Typography variant="body1" sx={{ color: "#fff" }}>
        Ads Posted: {adsPosted}
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff" }}>
        Ads Bought: {adsBought}
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff" }}>
        Earnings: {earnings}
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff" }}>
        Ads Money: {adsBoughtMoney}
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff" }}>
        Profit: {profit}
      </Typography>
    </Box>
  );
}

function AdCard({ ad }) {
  return (
    <Card sx={{ maxWidth: "200px", margin: "10px" }}>
      <CardMedia component="img" height="140" src={ad.photo} alt="Ad" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Cost: {ad.cost}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginRight: "5px" }}>
          Remove
        </Button>
        <Button variant="contained" color="secondary">
          Like
        </Button>
        <Button variant="contained" color="primary" sx={{ marginTop: "5px" }}>
          Buy Now!
        </Button>
      </CardContent>
    </Card>
  );
}

function UserProfile() {
  const [user, setUser] = useState({
    profileIcon:
      "https://a0.anyrgb.com/pngimg/1912/680/icon-user-profile-avatar-ico-facebook-user-head-black-icons-circle-thumbnail.png",
    name: "Harshan",
    email: "rathodharshan4@gmail.com",
    college_name: "IIIT Sricity",
    year: "2023",
    branch: "CSE",

  });
  const [userRating, setUserRating] = useState(5);
  const [adsPosted, setAdsPosted] = useState(7);
  const [adsBought, setAdsBought] = useState(8);

  const earnings = {
    adsPosted,
    adsBought,
    earnings: 500,
    adsBoughtMoney: 1000,
    profit: -500,
  };

  const [postedAds, setPostedAds] = useState([
    { photo: "ad1.jpg", cost: 50 },
    { photo: "ad2.jpg", cost: 30 },
  ]);

  const [boughtAds, setBoughtAds] = useState([
    { photo: "ad3.jpg", cost: 40 },
    { photo: "ad4.jpg", cost: 25 },
  ]);

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
  const handleRateUser = (rating) => {
    setUserRating(rating);
    // You can implement logic to send the rating to the server or perform other actions
  };
  return (
    <Box
      sx={{
        background: `url(${desktop})`, // Replace with the actual path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "50vh",
      }}
    >
      <Box sx={{ backgroundColor: theme.palette.background.light, padding: "30px" }}>
        <Box sx={{ display: "flex" }}>
          <UserData user={user} onEditProfile={handleEditProfile} userRating={userRating}/>
          <UserEarnings {...earnings} />
        </Box>
      </Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          border: "1px solid",
          margin: "20px",
          backgroundColor: theme.palette.primary.light,
          color: "#fff",
        }}
      >
        Ads Posted
      </Typography>
      <Box sx={{ display: "flex" }}>
        {postedAds.map((ad, index) => (
          <AdCard key={index} ad={ad} />
        ))}
      </Box>

      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          border: "1px solid",
          margin: "20px",
          backgroundColor: theme.palette.primary.light,
          color: "#fff",
        }}
      >
        Ads Bought
      </Typography>
      <Box sx={{ display: "flex" }}>
        {boughtAds.map((ad, index) => (
          <AdCard key={index} ad={ad} />
        ))}
      </Box>
    </Box>
  );
}

export default UserProfile;
