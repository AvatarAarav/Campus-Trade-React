import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Toolbar from "@mui/material/Toolbar";
import { fetchUserDetails } from "../../Store/UserSlice";
import {
  Face,
  FavoriteRounded,
  Shop,
  ShoppingBag,
  ShoppingCart,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Backdrop,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  Fade,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Login from "./Login";
import Signup from "./Signup";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { logOutReducer, loginReducer } from "../../Store/UserSlice";
import { adminLogOutReducer } from "../../Store/AdminSlice";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../../Store/ProductSlice";

const Toolbaar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
});
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  "&:hover": {
    backgroundColor: "",
  },
  marginLeft: 0,
  width: "40%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

function Navbar() {
  const search=useSelector(state=>state.product.search);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const isAdmin = useSelector((state)=>state.admin.isAdmin);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const uname = useSelector((state) => state.user.userDetails.name);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const udet = useSelector((state) => state.user.userDetails._id);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfile = () => {
    dispatch(fetchUserDetails(udet));
    navigate("/user");
    handleMenuClose();
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [openModalLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const [openModalSignup, setOpenSignup] = React.useState(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const toSignup = () => {
    handleCloseLogin();
    setTimeout(() => {
      handleOpenSignup();
    }, 500);
  };

  const toLogin = () => {
    handleCloseSignup();
    setTimeout(() => {
      handleOpenLogin();
    }, 500);
  };
  const handleLogout = () => {
    dispatch(logOutReducer());
    navigate("/");
    handleMenuClose();
  };

  const adminLogout = () => {
    dispatch(adminLogOutReducer());
    navigate("/");
    handleMenuClose();
  };

  const theme = useTheme();

  const menuId = "primary-search-account-menu";
  const renderSubMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleProfile}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Log Out</MenuItem>
    </Menu>
  );

  const renderLoginButton = (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={handleOpenLogin}>Login</Button>
        <Button onClick={handleOpenSignup}>Register</Button>
      </ButtonGroup>
    </>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem sx={{ color: theme.palette.text.secondary }}>
        <IconButton
          size="large"
          aria-label="show 4 new mailsrenderLoginButton"
          color="inherit"
        >
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon
              sx={{ color: theme.palette.primary.dark }}
              onClick={handleOpenLogin}
            />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem sx={{ color: theme.palette.text.secondary }}>
        <IconButton size="large" aria-label="show 17 new items" color="inherit">
          <Badge variant="dot" badgeContent={17} color="secondary">
            <FavoriteRounded
              sx={{ color: theme.palette.primary.dark }}
              fontSize="lg"
              onClick={handleOpenSignup}
            />
          </Badge>
        </IconButton>
        <p>Wishlist</p>
      </MenuItem>
      <MenuItem sx={{ color: theme.palette.text.secondary }}>
        <IconButton size="large" aria-label="show 17 new items" color="inherit">
          <Badge variant="dot" badgeContent={17} color="secondary">
            <ShoppingCart
              sx={{ color: theme.palette.primary.dark }}
              fontSize="lg"
              onClick={handleOpenSignup}
            />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem
        sx={{ color: theme.palette.text.secondary }}
        fontSize="lg"
        onClick={handleProfileMenuOpen}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {loggedIn && (
            <Face fontSize="lg" sx={{ color: theme.palette.primary.main }} />
          )}
          {loggedIn && <Chip label={uname} />}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Toolbaar>
          <Shop
            sx={{
              display: { xs: "block", sm: "none" },
              color: theme.palette.secondary.main,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="div"
            onClick={() => {
              if(isAdmin){
                navigate('/admin')
              }
              else{
                navigate("/");
              }
              
            }}
            sx={{
              display: { xs: "none", sm: "block" },
              fontFamily: "cursive",
              fontWeight: "1000",
              color: theme.palette.text.primary,
              cursor:"pointer",
            }}
          >
            Campus Trade
          </Typography>
          <Search
            sx={{
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.secondary,
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={search}
              onChange={(e)=>{dispatch(setSearch(e.target.value))}}
              placeholder="Search for products, sellers and more"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <div style={{ position: "absolute" }}>
            <Login
              openModalLogin={openModalLogin}
              handleCloseLogin={handleCloseLogin}
              toSignup={toSignup}
            />
            <Signup
              openModalSignup={openModalSignup}
              handleCloseSignup={handleCloseSignup}
              toLogin={toLogin}
            />
          </div>

          {
            isAdmin ?
            (<>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton size="large" onClick={adminLogout} >
                  
                  <Chip sx={{fontWeight:'600', color:'red'}} label='Logout'></Chip>
                </IconButton>

                <IconButton
                  size="large"
                  edge="end"
                  aria-label="user profile"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                >
                  {loggedIn && (
                    <Face
                      fontSize="lg"
                      sx={{ color: theme.palette.primary.main }}
                    />
                  )}
                  {loggedIn && <Chip label={uname} />}
                </IconButton>
              </Box>
            </>): 
            loggedIn ? (
            <>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton size="large" aria-label="show 17 new notifications">
                  <Badge badgeContent={17} variant="dot" color="secondary">
                    <FavoriteRounded
                      fontSize="lg"
                      sx={{ color: theme.palette.primary.main }}
                      onClick={handleProfile}
                    />
                  </Badge>
                </IconButton>

                <IconButton
                  size="large"
                  edge="end"
                  aria-label="user profile"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                >
                  {loggedIn && (
                    <Face
                      fontSize="lg"
                      sx={{ color: theme.palette.primary.main }}
                    />
                  )}
                  {loggedIn && <Chip label={uname} />}
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="theme.palette.secondary.main"
                >
                  <MoreIcon fontSize="lg" />
                </IconButton>
              </Box>
            </>
          ) : (
            renderLoginButton
          )}
        </Toolbaar>
      </AppBar>
      {renderMobileMenu}
      {renderSubMenu}
    </Box>
  );
}

export default Navbar;
