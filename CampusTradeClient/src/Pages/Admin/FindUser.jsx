import {
  BeachAccess,
  Delete,
  Image,
  Mail,
  Search,
  Work,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  styled,
  CircularProgress
} from "@mui/material";
import React, { useState } from "react";
import { getalluserAPI } from "../../apis";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../../Store/UserSlice";
const StyledBox = styled(Paper)({
  overflow: "auto",
  width: "40%",
  height: "500px",
  margin: "20px",
  padding: "10px",
});
const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "10px",
  gap: "10px",
});

const FindUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [users, setusers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getalluserAPI();
        setusers(data.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchdata();
  }, []);

  const handleUserClick = async (id) => {
   
    await dispatch(fetchUserDetails(id))

    navigate("/user");
    
  };

  return (
    <StyledBox sx={{ display: { xs: "none", sm: "block" } }}>
      <StyledDiv color="primary">
        <Search />
        <InputBase placeholder="Find Seller" />
      </StyledDiv>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {users.map((user) => {
            return (
              <ListItemButton key={user._id} onClick={() => handleUserClick(user._id)}>
                <ListItemAvatar>
                  <Avatar src="" alt="Sharan" />
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={`ads posted ${user.ads.length}`} />
                <ListItemAvatar>
                  <Mail fontSize="large" sx={{ color: "dodgerblue" }} />{" "}
                  <Delete fontSize="large" sx={{ color: "orange" }} />
                </ListItemAvatar>
              </ListItemButton>
            );
          })}
        </List>
      )}
    </StyledBox>
  );
};

export default FindUser;