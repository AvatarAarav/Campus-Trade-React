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

const CardContainer = () => {
  const products = [
    { label: "laptop", year: 1994 },
    { label: "backpack", year: 1972 },
    { label: "earphones", year: 1974 },
    { label: "bat", year: 2008 },
    { label: "watch", year: 1957 },
    { label: "neckband", year: 1993 },
    { label: "books", year: 1994 },
  ];

  const dispatch = useDispatch();

  const loggedIn=useSelector(state=>state.user.loggedIn)
  const navigate = useNavigate();
  const handleOpenAd = (id) => {
    dispatch(fetchAdDetails(id));
    navigate("/ad");
  };

  const [ads, setads] = useState([]);
  //   console.log("card container rendered");

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await fetchAllAdsApi();
        setads(data.data.data);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    }
    fetchdata();
  }, []);

  //   console.log(ads);

  return (
    <Box
      sx={{
        width: "100%",
        height: "900px",
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
        <Typography variant="h4">All Products</Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={products}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "980px",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          overflowY: "auto",
          height: "700px",
          padding: { xs: "0px", sm: "40px" },
          backgroundColor: "whitesmoke",
        }}
      >
        {ads.map((ad) => {
          return (
            <Card key={ad._id} sx={{ width: 300, height: 430 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  src={`https://drive.google.com/uc?export=view&id=${ad.img_id[0]}`}
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
              <CardActions>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    marginTop: "-8px",
                    padding: "0px 10px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="small"
                    disabled={!loggedIn}
                    variant="contained"
                    onClick={() => handleOpenAd(ad._id)}
                  >
                    Buy now
                  </Button>
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </Box>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default CardContainer;
