import  { useState } from "react";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

function UserData() {
  const userDataStyle = {
    textAlign: "center",
    margin: "20px",
  };

  const imgStyle = {
    maxWidth: "100px",
    borderRadius: "50%",
  };

  const buttonStyle = {
    margin: "5px",
  };

  return (
    <div style={userDataStyle}>
      <img alt="Profile" style={imgStyle} />
      <h2 style={{ fontSize: "24px" }}>harshan</h2>
      <p>Email: rathodharshan4@gmail.com</p>
      <p>College: IIIT</p>
      <p>Year: 2023</p>
      <p>Branch: CSE</p>
      <button onClick={() => {}} style={buttonStyle}>
        Edit Profile
      </button>
      <button style={buttonStyle}>Post Ad</button>
    </div>
  );
}


function UserEarnings() {
  const earningsStyle = {
    margin: "20px",
  };

  return (
    <div style={earningsStyle}>
      <p>Ads Posted:7</p>
      <p>Ads Bought:8</p>
      <p>Earnings: 500</p>
      <p>Ads Bought Money: 1000</p>
      <p>Profit: -500</p>
    </div>
  );
}

function AdCard() {
  return (
    <Card style={{ maxWidth: 200, margin: 10 }}>
      <CardMedia component="img" height="140"  alt="Ad" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Cost:900
        </Typography>
        <Button variant="contained" color="primary" style={{ marginRight: 5 }}>
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
    profileIcon: "profile.jpg",
    name: "John Doe",
    email: "john@example.com",
    college: "Sample College",
    year: "2023",
    branch: "Computer Science",
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
      <div>
        {postedAds.map((ad, index) => (
          <AdCard key={index} ad={ad} />
        ))}
      </div>
    );
  }
  
  function AdsBought() {
    return (
      <div>
        {boughtAds.map((ad, index) => (
          <AdCard key={index} ad={ad} />
        ))}
      </div>
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
    <div>
      <UserData user={user} onEditProfile={handleEditProfile} />
      <UserEarnings {...earnings} />
      <h3>Ads Posted</h3>
      <AdsPosted postedAds={postedAds} />
      <h3>Ads Bought</h3>
      <AdsBought boughtAds={boughtAds} />
      <Button onClick={handlePostAd} variant="contained" color="primary">
        Post Ad
      </Button>
      <Button onClick={handleBuyAd} variant="contained" color="secondary">
        Buy Ad
      </Button>
    </div>
  );
}

export default UserProfile;
