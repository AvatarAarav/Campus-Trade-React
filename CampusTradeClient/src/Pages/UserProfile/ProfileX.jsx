import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  CardActionArea,
  IconButton,
  Avatar,
  Tooltip,
  Chip,
  Modal,
} from "@mui/material";
import theme from "../../theme";
import desktop from "../../assets/desktop.jpg";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdDetails } from "../../Store/ProductSlice";
import { fetchAllAdsApi } from "../../apis/index";
import { CurrencyRupee, Edit, Mail, School } from "@mui/icons-material";
import { delUserAPI } from "../../apis/index";
function UserData({ user, onEditProfile, postad, userRating }) {

  const ulog = useSelector((state) => state.user.loggedIn);
  const alog = useSelector((state) => state.admin.loggedIn);
  const [open,setopen] = useState(false);
  const loggedIn = (ulog || alog);
  // const admin = useSelector((state) => state.admin.isadmin)
  const navigate= useNavigate();

  const handleuserdelete = async () => {
    console.log("deleting user");
    await delUserAPI(user._id)
    navigate("/admin")
  }

  const handleopen = () => {
    setopen(true);
  }

  const handleClose = () => {
    setopen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: "50px",
          display: "flex",
          width: "100%",
          border: "3px solid lightyellow",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: "whitesmoke",
          // opacity:0.7,
        }}
      >
        <Box  sx={{flex:1, padding: "20px", backgroundColor: "", borderRadius:'10px' }}>
          <img
            src="http://picsum.photos/200/200"
            alt="Profile"
            style={{ maxWidth: "200px", borderRadius: "50%", border:'2px solid lavender' }}
          />
        </Box>

        
        <Box sx={{flex:3, padding: "20px", backgroundColor:'', position:'relative' }}>

        {!alog && 
            <Tooltip title="Edit">
            <IconButton
                onClick={onEditProfile}
                sx={{
                  position:'absolute',
                  top:'45px',
                  right:'120px',
                  backgroundColor:'lightblue',
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.light,
                  },
                }}
              >
                  
                  <Edit />
                
              </IconButton>
          </Tooltip>
        }
          

        {!alog && 
          <Tooltip title="post new ad">
            <Button
                onClick={postad}
                sx={{
                  position:'absolute',
                  top:'45px',
                  right:'20px',
                  backgroundColor:'lightblue',
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.light,
                  },
                }}
              >
                  
                  post ad
                
              </Button>
          </Tooltip>
        }
          


          <Typography variant="h6" sx={{ fontSize: "50px" , fontFamily:'cursive'}}>
            {user.name}
          </Typography>
          <Box sx={{backgroundColor:'white', padding:'5px', borderRadius:'10px', marginBottom:'10px'}}>
            <IconButton>
              <Mail style={{color:'dodgerblue', marginRight:'10px'}} />
              
              <Typography variant="body1" >
                {user.email}
              </Typography>
            </IconButton>
          </Box>

          <Box sx={{backgroundColor:'white', padding:'5px', borderRadius:'10px',marginBottom:'30px'}}>
            <IconButton>
              <School style={{color:'orange', marginRight:'10px'}} />
              
              <Typography variant="body1" >
              {user.college_name ? user.college_name : "Not chosen (update it)"}
              </Typography>
            </IconButton>
          </Box>
          
          <Box>
            {(user.year !== '' && <Chip sx={{backgroundColor:'lavender'}} label={user.year} />)}
            {" "}&nbsp;&nbsp;
            {(user.branch !== '' && <Chip sx={{backgroundColor:'lavender'}} label={user.branch} />)}

          </Box>


          <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'20px'}}>
            <Box display='flex' alignItems='center'>
              <Chip color="secondary" label="Rating"></Chip>
              <Box sx={{border:'2px solid white', borderRadius:'50px', padding:'5px', paddingTop:'7px'}}>
                <Rating
                    name="user-rating"
                    value={userRating}
                    precision={0.5}
                    readOnly
                    sx={{ color: "" }}
                  />
              </Box>
              
            </Box>

            {alog && <Button onClick={handleopen} color="warning" variant="contained">Delete</Button>}
            
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',width:'550px', height:'160px', backgroundColor:'white', margin:'200px auto', padding:'30px', borderRadius:'10px'}}>
                <Typography variant="h5">Are you sure you want to <span style={{color:'red', fontWeight:'bold'}}>Delete</span>  the user ?</Typography>
                <Box display='flex' justifyContent='flex-end' gap={2}>
                  <Button variant="outlined" size="large" onClick={handleClose} color="secondary">cancel</Button>
                  <Button variant="contained" size="large" color="secondary" onClick={handleuserdelete}>Delete</Button>
                </Box>
              </Box>
            </Modal>
          </Box>
        </Box>

        
      </Box>
    </ThemeProvider>
  );
}

function UserEarnings({
  adsPosted,
  adsBought,
  earnings,
  adsBoughtMoney,
  profit,
}) {
  return (
    <Box
      sx={{
        width:'400px',
        marginTop: "50px",
        border: "2px white",
        
        borderRadius: "10px",
        backgroundColor: "",
      }}
    >

      <Box sx={{width:'100%',padding:'0px 20px',borderRadius:'5px',marginBottom:'10px',backgroundColor:'lightblue',boxShadow:2, display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        <span>Ads Posted</span> <span style={{fontSize:'xxx-large'}}>{adsPosted}</span>
      </Box>
      <Box sx={{width:'100%',padding:'0px 20px',borderRadius:'5px',marginBottom:'10px',backgroundColor:'lightsalmon',boxShadow:2, display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        <span>Ads Bought</span> <span style={{fontSize:'xxx-large'}}>{adsBought}</span>
      </Box>
      <Box sx={{width:'100%',padding:'0px 20px',borderRadius:'5px',marginBottom:'10px',backgroundColor:'lightgreen',boxShadow:2, display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        <span>Earnings</span> <span style={{fontSize:'xxx-large'}}>{earnings}</span>
      </Box>
      <Box sx={{width:'100%',padding:'0px 20px',borderRadius:'5px',marginBottom:'10px',backgroundColor:'beige',boxShadow:2, display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        <span>Ads Money</span> <span style={{fontSize:'xxx-large'}}>{adsBoughtMoney}</span>
      </Box>
      <Box sx={{width:'100%',padding:'0px 20px',borderRadius:'5px',marginBottom:'10px',backgroundColor:'lavender',boxShadow:2, display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        <span>Profit</span> <span style={{fontSize:'xxx-large'}}>{profit}</span>
      </Box>
      
    </Box>
  );
}
function AdCard({ ad, flag }) {
  return (
    <Card key={ad._id} sx={{ width: 300, height: 400 }}>
      <CardActionArea onClick={() => handleOpenAd(ad._id)}>
        <CardMedia
          component="img"
          height="300"
          src={`https://drive.google.com/thumbnail?id=${ad.img_id[0]}`}
          alt="green iguana"
        />
        <CardContent sx={{ padding: "10px 20px 0px 20px" }}>
          <Typography
            gutterBottom
            variant="h6"
            color="text.secondary"
            component="div"
          >
            {ad.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography component="span" variant="h5">
              {ad.price}
            </Typography>
            <span>
              <CurrencyRupee />
            </span>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function UserProfile() {
  const ulog = useSelector((state) => state.user.loggedIn);
const alog = useSelector((state) => state.admin.loggedIn);
const loggedIn = (ulog || alog);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const user = useSelector((state) => state.user.userDetails);

  const [userRating, setUserRating] = useState(5);
 
  const earnings = {
    adsPosted: user.adsPosted,
    adsBought: user.adsBought,
    earnings: user.earnings,
    adsBoughtMoney: user.adsBoughtMoney,
    profit: user.earnings - user.adsBoughtMoney,
  };
  const [boughtAds, setBoughtAds] = useState([]);
  const [postedAds, setPostedAds] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await fetchAllAdsApi();
        setPostedAds(data.data.data);
        setBoughtAds(data.data.data);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    }
    fetchdata();
  }, []);

  

  const handleEditProfile = () => {
    navigate("/updateprofile");
  };
  const handleOpenAd=(id)=>{
    dispatch(fetchAdDetails(id));
    navigate("/ad");
  }
  const go_to_ad = () => {
    navigate("/user/Ad");
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
      <Box
        sx={{
          backgroundColor: theme.palette.background.light,
          padding: "30px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <UserData
            user={user}
            onEditProfile={handleEditProfile}
            postad={go_to_ad}
            userRating={userRating}
          />
          <UserEarnings {...earnings} />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1060px",
            display: "flex",
            padding: "20px 0px",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "lightsalmon",
          }}
        >
          <Typography variant="h4">My Products</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1060px",
            height:"500px",
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            overflowY: "auto",
            padding: { xs: "0px", sm: "40px" },
            backgroundColor: "whitesmoke",
          }}
        >
          {postedAds
            .filter((ad) => {
              if (ad.id === user._id) return true;
              else return false;
            })
            .map((ad) => {
              return (
                <Card key={ad._id} sx={{ width: 300, height: 400 }}>
                  <CardActionArea onClick={() => handleOpenAd(ad._id)}>
                    <CardMedia
                      component="img"
                      height="300"
                      src={`https://drive.google.com/thumbnail?id=${ad.img_id[0]}`}
                      alt="green iguana"
                    />
                    <CardContent sx={{ padding: "10px 20px 0px 20px" }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        color="text.secondary"
                        component="div"
                      >
                        {ad.name}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography component="span" variant="h5">
                          {ad.price}
                        </Typography>
                        <span>
                          <CurrencyRupee />
                        </span>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1060px",
            display: "flex",
            padding: "20px 0px",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "lightsalmon",
          }}
        >
          <Typography variant="h4">Wishlist</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1060px",
            display: "flex",
            gap: "30px",
            height:"500px",
            flexWrap: "wrap",
            overflowY: "auto",
            padding: { xs: "0px", sm: "40px" },
            backgroundColor: "whitesmoke",
          }}
        >
          {boughtAds
          .filter((ad) => user.ads.includes(ad._id))
          .map((ad) => {
            return (
              <Card key={ad._id} sx={{ width: 300, height: 400 }}>
                <CardActionArea onClick={() => handleOpenAd(ad._id)}>
                  <CardMedia
                    component="img"
                    height="300"
                    src={`https://drive.google.com/thumbnail?authuser=0&sz=w600&id=${ad.img_id[0]}`}
                    alt="green iguana"
                  />
                  <CardContent sx={{ padding: "10px 20px 0px 20px" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      color="text.secondary"
                      component="div"
                    >
                      {ad.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography component="span" variant="h5">
                        {ad.price}
                      </Typography>
                      <span>
                        <CurrencyRupee />
                      </span>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1060px",
            display: "flex",
            padding: "20px 0px",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "lightsalmon",
          }}
        >
          <Typography variant="h4">My Bought products</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1060px",
            display: "flex",
            height:"500px",
            gap: "30px",
            flexWrap: "wrap",
            overflowY: "auto",
            padding: { xs: "0px", sm: "40px" },
            backgroundColor: "whitesmoke",
          }}
        >
          {postedAds
            .filter((ad) => {
              if (ad.buyer === user._id) return true;
              else return false;
            })
            .map((ad) => {
              return (
                <Card key={ad._id} sx={{ width: 300, height: 400 }}>
                  <CardActionArea onClick={() => handleOpenAd(ad._id)}>
                    <CardMedia
                      component="img"
                      height="300"
                      src={`https://drive.google.com/thumbnail?id=${ad.img_id[0]}`}
                      alt="green iguana"
                    />
                    <CardContent sx={{ padding: "10px 20px 0px 20px" }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        color="text.secondary"
                        component="div"
                      >
                        {ad.name}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography component="span" variant="h5">
                          {ad.price}
                        </Typography>
                        <span>
                          <CurrencyRupee />
                        </span>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
        </Box>
      </Box>


    </Box>




  );
}

export default UserProfile;
