import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Chip,
  Stack,
  Divider,
  Slider,
  Slide,
  ImageListItem,
  ImageList,
} from "@mui/material";
import { TextField, Button } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import football from "../../assets/football.jpg";
import theme from "../../theme";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import ChatBox, { ChatFrame } from "react-chat-plugin";
import { Navigate, useNavigate } from "react-router-dom";
import { wishlistAPI } from "../../apis";
import {
  Chat,
  CurrencyRupee,
  Error,
  Favorite,
  Info,
  Mail,
  ShoppingCart,
  SmartToy,
  Star,
} from "@mui/icons-material";

// # SCSS
// import "react-image-gallery/styles/scss/image-gallery.scss";

// // # CSS
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

function AdPage() {
  // we should get this ad as a prop to this page
  const navigate=useNavigate();
  const loggedIn=useSelector(state=>state.user.loggedIn)
  useEffect(()=>{
    if(!loggedIn){navigate('/')}
  },[])
 
  const socket = io('http://localhost:3000', { transports : ['websocket'] });
  const [ads, setads] = useState({
    title: "C-Type charger",
    price: 300,
    age: "6 months old",
    desc: "its a cool c type charger, very durable and long. i have been using it from 5 months and there were no complaints. recently i lost my android phone and bought a new i phone so i dont need this c type charger anymore. this is of white color and comes with a charger box. it supports 80 watts fast charging and also suitable for mobiles which support 40 watts charging also.",
    subtitle: "mobile charger",
    tags: ["accessory", "mobile", "electronic"],
    features: [
      "fast charging",
      "80 watts",
      "plastic",
      "durable",
      "shock proof",
    ],
    images: [
      {
        original:
          "https://drive.google.com/uc?export=view&id=1BSQHacJVKa7xdpMHwwNh0oH9MxG896Pm",
        thumbnail:
          "https://drive.google.com/uc?export=view&id=1BSQHacJVKa7xdpMHwwNh0oH9MxG896Pm",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/1000/600/",
      },
      {
        original: "https://picsum.photos/id/1019/500/900/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ],
    date: new Date(),
    likes: 10,
    views: 30,
    sellerMail: "aarav.n21@iiits.in",
  });

  //
  const ad = useSelector((state) => state.product.adDetails);
const user = useSelector((state) => state.user.userDetails)
// console.log(user)
// console.log(ad)
  // console.log("ad fetched from store", ad);

  const constructImageLinks = (imageIds) => {
    return imageIds.map((imageId) => {
      const link = `https://drive.google.com/uc?export=view&id=${imageId}`;
      return {
        original: link,
        thumbnail: link,
      };
    });
  };

  // console.log("ad.img_is : ", ad.img_id);
  const images = constructImageLinks(ad.img_id);

  // console.log(images);

  //razorpay
  const [orderId, setOrderId] = useState("");

  const createOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/create-order"
      );
      setOrderId(response.data.id);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const displayRazorpay = async () => {
    const options = {
      key: "rzp_test_HBOeWhcpQppyPx",
      amount: ad.price * 100, // Amount in paise (Example: 50000 paise = ₹500)
      currency: "INR",
      name: "Campus Trade",
      description: "Test Payment",
      order_id: orderId,
      handler: function (response) {
        console.log(response);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  const handlePayment = async () => {
    await createOrder();
    await displayRazorpay();
  };

  // Mail form
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // open Mail to (e.g., send an email to the seller)
    let f = `mailto:${ad.sellerMail}?subject=${subject}&body=${message}`;
    window.open(f, "_self");
    setMessage("");
    setSubject("");
  };

  // npm chat plugin
  const [attr, setAttr] = useState({
    showChatbox: false,
    showIcon: true,
    messages: [
      {
        text: "current user has joined the conversation",
        timestamp: 1578366389250,

        type: "notification",
      },
      {
        author: {
          username: "user1",
          id: 1,
          avatarUrl: "",
        },
        text: "Hi",
        type: "text",
        timestamp: 1578366393250,
      },
      {
        author: { username: "Bot", id: 2, avatarUrl: "" },
        text: "Show two buttons",
        type: "text",
        timestamp: 1578366425250,
        buttons: [
          {
            type: "URL",
            title: "Yahoo",
            payload: "http://www.yahoo.com",
          },
          {
            type: "URL",
            title: "Example",
            payload: "http://www.example.com",
          },
        ],
      },
      {
        author: {
          username: "user1",
          id: 1,
          avatarUrl: "",
        },
        text: "What's up?",
        type: "text",
        timestamp: 1578366425250,
        hasError: false,
      },
    ],
  });
  const handleClickIcon = () => {
    // toggle showChatbox and showIcon
    setAttr({
      ...attr,
      showChatbox: !attr.showChatbox,
      showIcon: !attr.showIcon,
    });
  };
  const handleOnSendMessage = (message) => {
    setAttr({
      ...attr,
      messages: attr.messages.concat({
        author: {
          username: "user1",
          id: 1,
          avatarUrl: "",
        },
        text: message,
        type: "text",
        timestamp: +new Date(),
      }),
    });
    socket.emit('chat message', message);
  };
const handleAdWishList = () =>
{
  // console.log("clicked")
wishlistAPI(user._id,ad._id)
  socket.on('chat message',(message)=>{
    console.log(message)
  })
}
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "50px" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <Paper elevation={3}>
              <ImageGallery items={images} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant="h4" color="text.primary">
              {ad.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {ad.subname}
            </Typography>
            <Typography variant="h4" color="green" gutterBottom>
              {ad.price}
              <CurrencyRupee fontSize="small" />
            </Typography>
            <Typography
              variant="h5"
              component="span"
              color="text.primary"
              gutterBottom
            >
              {ad.age}
            </Typography>
            <Typography component="span">
              {" "}
              {/* / ad posted on {ad.date.toLocaleDateString()} */}
            </Typography>
            <hr />
            <Typography variant="subtitle1">Tags</Typography>
            <Container
              sx={{
                padding: "10px",
                backgroundColor: "",
                display: "flex",
                justifyContent: "start",
                flexWrap: "wrap",
                gap: "5px",
              }}
            >
              {ad.tags.map((i) => (
                <Chip label={i} size="small" color="secondary" />
              ))}
            </Container>
            <hr />

            <Box
              sx={{
                display: "flex",
                marginTop: "30px",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
              }}
            >
              <Box sx={{ flex: "1" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Star color="secondary" fontSize="medium" />
                  <Typography variant="h5">Features</Typography>
                </Box>
                <ul>
                  {ad.features.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </Box>
              <Box
                sx={{ flex: "1", backgroundColor: "", position: "relative" }}
              >
                <Typography marginLeft="60px" variant="h5">
                  Likes / Views
                </Typography>
                <PieChart
                  series={[
                    {
                      data: [
                        {
                          id: 0,
                          value: (ad.likes * 100) / ad.views,
                          color: "#ff4081",
                        },
                        {
                          id: 1,
                          value: 100 - (ad.likes * 100) / ad.views,
                          color: "#2196f3",
                        },
                      ],
                      innerRadius: 90,
                      outerRadius: 100,
                      paddingAngle: -3,
                      cornerRadius: 5,
                      startAngle: 0,
                      endAngle: 360,
                      cx: 140,
                      cy: 120,
                    },
                  ]}
                  width={300}
                  height={300}
                />
                <Box sx={{ position: "absolute", top: "110px", left: "90px" }}>
                  <Typography variant="h3">
                    {((ad.likes * 100) / ad.views).toFixed(1)}%
                  </Typography>
                  <Typography variant="p">people liked this</Typography>
                </Box>
              </Box>
            </Box>
            <Container
              sx={{
                padding: "10px 0px",
                backgroundColor: "whitesmoke",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Box>
                <Info color="primary" sx={{ fontSize: "60px" }} />
              </Box>
              <Typography component="span" variant="body1">
                We highly recommend you to contact the seller if you have any
                queries regarding the product.
              </Typography>
            </Container>
            <hr />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: "12px",
              }}
            >
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handlePayment}
                startIcon={<ShoppingCart />}
              >
                Buy Now
              </Button>
              <Button
              onClick={handleAdWishList}
                size="large"
                variant="outlined"
                color="secondary"
                startIcon={<Favorite />}
              >
                wishlist
              </Button>
              <Button
                size="large"
                variant="contained"
                color="warning"
                startIcon={<Error />}
              >
                report
              </Button>
            </Box>
            <hr />
            <Typography variant="h6">Product Description</Typography>
            <Typography variant="body1" fontFamily="cursive" paragraph>
              {ad.description}
            </Typography>
            <hr />
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ display: "flex", marginTop: "100px" }}>
        <Container
          sx={{
            padding: { xs: "0px", lg: "50px" },
            backgroundSize: "cover",
            backgroundImage: `url(${bg2})`,
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} lg={6}>
              <Paper elevation={3} sx={{ padding: "30px" }}>
                <Mail
                  color="secondary"
                  fontSize="large"
                  sx={{ marginRight: "10px" }}
                />
                <Typography
                  variant="h6"
                  color="text.secondary"
                  component="span"
                  gutterBottom
                >
                  Contact the Seller
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Subject"
                    fullWidth
                    variant="filled"
                    margin="normal"
                    value={subject}
                    onChange={handleSubjectChange}
                  />
                  <TextField
                    label="Message"
                    fullWidth
                    variant="standard"
                    margin="normal"
                    multiline
                    rows={4}
                    value={message}
                    onChange={handleMessageChange}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Send Mail
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ position: "absolute" }}>
          {/*npm chat plugin */}

          <ChatFrame
            chatbox={
              <ChatBox
                onSendMessage={handleOnSendMessage}
                userId={1}
                messages={attr.messages}
                width={"500px"}
                showTypingIndicator={false}
                activeAuthor={{ username: "Bot", id: 2, avatarUrl: "" }}
              />
            }
            icon={<Chat />}
            clickIcon={handleClickIcon}
            showChatbox={attr.showChatbox}
            showIcon={attr.showIcon}
            iconStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              background: "orange",
            }}
          >
            <div
              style={{
                padding: "10px",
                backgroundColor: "dodgerblue",
                color: "white",
                borderRadius: "10px",
                borderBottomRightRadius: "0px",
              }}
            >
              👋 Hey, Wanna try our new chatting feature ?
            </div>
          </ChatFrame>
        </Container>
      </Container>
      <br />
      <br />
    </Box>
  );
}

export default AdPage;
