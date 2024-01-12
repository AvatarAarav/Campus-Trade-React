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
} from "@mui/material";
import React, { useState } from "react";
import { getalluserAPI } from "../../apis";
import { useEffect } from "react";
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
  const [users, setusers] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getalluserAPI();
        // console.log(data.data.data);
        setusers(data.data.data);
        console.log("fetched data : ", users);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    }
    fetchdata();
  }, []);

  return (
    <StyledBox sx={{ display: { xs: "none", sm: "block" } }}>
      <StyledDiv color="primary">
        <Search />
        <InputBase placeholder="Find Seller" />
      </StyledDiv>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {users.map((user) => {
          return (
            <ListItemButton key={user._id}>
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
    </StyledBox>
  );
};

export default FindUser;
