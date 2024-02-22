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
import React, { useEffect, useState } from "react";
import { fetchAllAdsApi } from "../apis/index.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAdDetails } from "../Store/ProductSlice.js";
import sold from '../assets/sold.png'
import CircularProgress from "@mui/material/CircularProgress";

const CardContainer = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.product.search);
  const ulog = useSelector((state) => state.user.loggedIn);
  const alog = useSelector((state) => state.admin.loggedIn);
  const college = useSelector((state) => state.admin.adminDetails.college)
  const loggedIn = (ulog || alog);
  const [loading, setLoading] = useState(true); 

  const navigate = useNavigate();
  const handleOpenAd = (id) => {
    if (!loggedIn) {
      alert("Please Login to view the ad");
      return;
    }
    dispatch(fetchAdDetails(id));
    navigate("/ad");
  };

  const [ads, setads] = useState([]);
  //   console.log("card container rendered");

  async function fetchdata() {
    try {
      if (alog) {
        console.log(college)
        const data = await fetchAllAdsApi(college);
        setads(data.data.data);
      }
      else {
        const data = await fetchAllAdsApi();
        setads(data.data.data);
        setLoading(false);
      }

      // console.log(data.data.data);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error);
        
    }
  }

  useEffect(() => {
    const intervalId = setInterval(fetchdata, 5000);
    return () => clearInterval(intervalId);
  }, [college]);

  // useEffect(() => {
  //   
  //   fetchdata();
  //   setInterval(fetchdata, 5000);
  // }, []);

  return (
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
          maxWidth: "1350px",
          display: "flex",
          padding: "10px 0px",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "lightsalmon",
        }}
      >
        <Typography variant="h4">All Products</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1350px",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          overflowY: "auto",
          height: "1450px",
          justifyContent: "center", // Center horizontally
        alignItems: "center",     // Center vertically
        minHeight: "calc(100vh - 200px)", // Adjust height as needed
          padding: { xs: "0px", sm: "10px" },
          backgroundColor: "whitesmoke",
        }}
      >
          {loading ? (
       
        <CircularProgress sx={{ marginTop: "50px",
         }} />
      ) : (ads
          .filter((ad) => {
            if (ad.tags.includes(search)) return true;
            return (
              ad.name.toLowerCase().includes(search.toLowerCase()) ||
              ad.subname.toLowerCase().includes(search.toLowerCase()) ||
              ad.description.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((ad) => {
            return (
              <Card key={ad._id} sx={{ position: 'relative', width: 300, height: 400 }}>
                {ad.sold && <img src={sold} style={{ width: '200px', position: 'absolute', top: '0px', left: '0px', zIndex: 1 }} alt="sold" />}

                <CardActionArea onClick={() => handleOpenAd(ad._id)}>
                  <CardMedia
                    component="img"

                    src={`https://drive.google.com/thumbnail?authuser=0&sz=w600&id=${ad.img_id[0]}`}
                    // src = {require(`https://drive.google.com/thumbnail?id=${ad.img_id[0]}`).default}
                    // src={`https://drive.google.com/thumbnail?authuser=0&sz=w200&id=${ad.img_id[0]}`}
                    alt="product"
                    style={{ height: 300, width: 300, borderRadius: 10 }}
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
          }))}
      </Box>
      
    </Box>
  );
};

export default CardContainer;
