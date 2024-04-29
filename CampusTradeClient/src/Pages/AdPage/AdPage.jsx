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
  Modal,
} from "@mui/material";
import { TextField, Button } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import football from "../../assets/football.jpg";
import theme from "../../theme";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import soldout from '../../assets/soldout.png'
import ChatBox, { ChatFrame } from "react-chat-plugin";
import { Navigate, useNavigate } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

import { boughtAdAPI, fetchUserDetailsApi, uwishlistAPI, wishlistAPI,delProductAPI } from "../../apis";
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
import { fetchUserDetails } from "../../Store/UserSlice";
import { reportAPI } from "../../apis";
function AdPage() {
  // we should get this ad as a prop to this page
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ulog = useSelector((state) => state.user.loggedIn);
  const alog = useSelector((state) => state.admin.loggedIn);
  const loggedIn = (ulog || alog);
  const [liked, setliked] = useState(false);
  const [reported,setreported] = useState(false);
  const ad = useSelector((state) => state.product.adDetails);
  const user = useSelector((state) => state.user.userDetails);
  const likes = useSelector((state) => state.product.adDetails.likes.length);
  const views = useSelector((state) => state.product.adDetails.views.length);
  const isadmin = useSelector((state) => state.admin.isAdmin);
  var isOwner = false;
  if (ad.id == user._id) {
    isOwner = true;
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
    if(user.ads.includes(ad._id)){
      setliked(true)
    }
if(user.report.includes(ad._id))
{
  setreported(true);
}
console.log(reported)

  });
  const socket = io("http://localhost:8000", { transports: ["websocket"] });
  

  //
 
  const constructImageLinks = (imageIds) => {
    return imageIds.map((imageId) => {
      const link = `https://drive.google.com/thumbnail?authuser=0&sz=w600&id=${imageId}`;
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
        "http://localhost:8000/api/create-order"
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
        boughtAdAPI(ad._id, user._id);
        navigate('/user')
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
    socket.emit("chat message", message);
  };
  useEffect(() => {
    socket.on("chat message", (message) => {
      console.log(message);
    });
  }, []);

  const handleAdWishList = async () => {
    // console.log("clicked")
    if (!liked) {
      await wishlistAPI(user._id, ad._id);
    } else {
      await uwishlistAPI(user._id, ad._id);
    }
    await dispatch(fetchUserDetails(user._id))
    setliked(!liked);
  };

  const [openR,setopenR] = useState(false);
  const handleopenR = () => {
    setopenR(true);
  }
  const handleCloseR = () => {
    setopenR(false);
  }
  const handlereport = async () => {
    // console.log("i am in handlereport")
    await reportAPI(user._id,ad._id)
    setopenR(false)
    dispatch(fetchUserDetails(user._id))

  }



  const handledelete = async () =>
  {
    console.log("deleting product")
   await delProductAPI(ad._id);
    navigate("/admin")
  }

  const [open,setopen] = useState(false);
  const handleopen = () => {
    setopen(true);
  }
  const handleClose = () => {
    setopen(false);
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "50px", position:'relative' }}>
      {ad.sold && <img src={soldout} style={{width:'300px',position:'absolute', top:'20px', right:'50px'}} alt="soldout" />}
      
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <Paper elevation={3}>
              <ImageGallery items={images} />
              {/* <img src={`https://drive.google.com/thumbnail?authuser=0&export=view&id=${ad.img_id[0]}`}style={{ height: 400, width: 500, borderRadius: 28 }}/> */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={5}>
            <ScrollAnimation animateIn="animate__backInRight" animateOut = "animate__backOutRight">
              <Typography variant="h4" color="text.primary">
                  {ad.name}
              </Typography>
            </ScrollAnimation>
            
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {ad.subname}
            </Typography>

            <ScrollAnimation animateIn="animate__backInRight" animateOut = "animate__backOutRight">
              <Typography variant="h4" color="green" gutterBottom>
                  {ad.price}
                  <CurrencyRupee fontSize="small" />
              </Typography>
            </ScrollAnimation>
            
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
                          value: (views-likes)*100/(views),
                          color: "#ff4081",
                        },
                        {
                          id: 1,
                          value: (likes)*100/(views),
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
                    {Math.round((likes)*100/(views))}%
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

              {!isadmin && 
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handlePayment}
                  disabled={isOwner || ad.sold}
                  startIcon={<ShoppingCart />}
                >
                  {ad.sold?"SOLD":"Buy Now"} 
                </Button>

              }
              
              {!isadmin && 
                <Button
                  onClick={handleAdWishList}
                  size="large"
                  variant="outlined"
                  disabled={isOwner}
                  color={liked ? "primary" : "secondary"}
                  startIcon={<Favorite />}
                >
                  {liked ? "wishlisted" : "wishlist"}
                </Button>
              }
              


              {(!isadmin && !isOwner) && 
                  <Button
                      onClick={handleopenR}
                      size="large"
                      variant="contained"
                      color="warning"
                      disabled={isOwner || reported} // Disable if isOwner or reported is true
                      startIcon={<Error />}
                  >
                      {reported ? "Reported" : "Report"}
                  </Button>
              }
              <Modal
                open={openR}
                onClose={handleCloseR}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',width:'580px', height:'160px', backgroundColor:'white', margin:'200px auto', padding:'30px', borderRadius:'10px'}}>
                  <Typography variant="h5">Are you sure you want to <span style={{color:'red', fontWeight:'bold'}}>Report</span> this product ?</Typography>
                  <Box display='flex' justifyContent='flex-end' gap={2}>
                    <Button variant="outlined" size="large" onClick={handleCloseR} color="secondary">cancel</Button>
                    <Button variant="contained" size="large" color="secondary" onClick={handlereport}>Report</Button>
                  </Box>
                </Box>
              </Modal>


              {isadmin && 
                <Button
                  size="large"
                  variant="contained"
                  color="warning"
                  disabled = {true}
                  startIcon={<Error />}
                >
                  Report count : {ad?.report?.length}
                </Button>
              }

              {isOwner && 
                <Button
                onClick={handleopen}
                  size="large"
                  variant="contained"
                  color="warning"
                  startIcon={<Error />}
                >
                  Delete
                </Button>
              }
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',width:'580px', height:'160px', backgroundColor:'white', margin:'200px auto', padding:'30px', borderRadius:'10px'}}>
                  <Typography variant="h5">Are you sure you want to <span style={{color:'red', fontWeight:'bold'}}>Delete</span> your product ?</Typography>
                  <Box display='flex' justifyContent='flex-end' gap={2}>
                    <Button variant="outlined" size="large" onClick={handleClose} color="secondary">cancel</Button>
                    <Button variant="contained" size="large" color="secondary" onClick={handledelete}>Delete</Button>
                  </Box>
                </Box>
              </Modal>
              
              {isadmin && 
                <Button
                onClick={handledelete}
                  size="large"
                  variant="contained"
                  color="warning"
                  startIcon={<Error />}
                >
                  Delete
                </Button>
              }
              
            </Box>
            <hr />
            <ScrollAnimation animateIn="animate__backInRight" animateOut = "animate__backOutRight">
              <Typography variant="h6">Product Description</Typography>
            </ScrollAnimation>
            
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
