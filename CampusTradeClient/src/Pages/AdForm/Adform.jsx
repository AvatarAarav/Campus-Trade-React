import {
  Box,
  Button,
  Chip,
  Container,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TagsInput } from "react-tag-input-component";
import photo from "../../assets/desktop.jpg";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import { productADDAPI } from "../../apis";
import { BackHand, Keyboard } from "@mui/icons-material";

const Adform = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [age, setage] = useState("");
  const [description, setdescription] = useState("");
  const [subname, setsubname] = useState("");
  const [images, setimages] = useState();

  const [tags, settags] = useState([]);
  const [features, setFeatures] = useState([]);

  const id = useSelector((state) => state.user.userDetails._id);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    setimages(files);
    // Do something with the uploaded files, like send them to a server or process them
    console.log("Uploaded files:", files);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Perform basic form validation
    if (
      name !== "" &&
      price !== "" &&
      age !== "" &&
      description !== "" &&
      subname !== "" &&
      tags.length !== 0 &&
      features.length !== 0 &&
      images.length !== 0
    ) {
      // console.log(images);
      console.log("Form submitted successfully!");
    } else {
      alert("please provide relevant information...!");
    }
    const formData = new FormData();
    // Append each selected file to the FormData object
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    const adData = {
      id,
      name,
      price,
      age,
      description,
      subname,
      tags,
      features,
    };

    formData.append("adData", JSON.stringify(adData));

    // console.log([... formData])
    console.log([...formData]);
    productADDAPI(formData);
  };

  return (
    <>
      <img
        style={{
          width: "100%",
          position: "absolute",
          zIndex: -1,
          backgroundRepeat: "repeat-y",
        }}
        src={bg3}
      />
      <Container
        sx={{
          width: "80%",
          marginTop: "30px",
          marginBottom: "100px",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          backgroundColor: "white",
          opacity: 0.95,
          paddingTop: 3,
          borderRadius: 5,
        }}
      >
        <Container
          sx={{
            flex: 1,
            backgroundColor: "",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h4" textAlign="center">
            Basic Details
          </Typography>

          <TextField
            id="name"
            onChange={(e) => setname(e.target.value)}
            value={name}
            label="name *"
            placeholder="name of the product"
            variant="outlined"
          />

          <TextField
            id="price"
            onChange={(e) => setprice(e.target.value)}
            value={price}
            label="Price *"
            placeholder="maximum selling price"
            variant="outlined"
          />
          <TextField
            id="age"
            onChange={(e) => setage(e.target.value)}
            value={age}
            label="Age *"
            placeholder="how long the product is used"
            variant="outlined"
          />
          <TextField
            id="description"
            label="descriptionription *"
            multiline
            rows={5}
            onChange={(e) => setdescription(e.target.value)}
            value={description}
            placeholder="Add a long descriptionription for better understanding."
          />
        </Container>
        <Container
          sx={{
            flex: 1,
            backgroundColor: "",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography variant="h4" textAlign="center">
            Additional Details
          </Typography>
          <TextField
            id="subname"
            onChange={(e) => setsubname(e.target.value)}
            value={subname}
            label="Sub name *"
            placeholder="Type of the product"
            variant="outlined"
          />
          <Box>
            <Box>
              <Typography color="text.secondary" variant="h6">
                Add Tags *
              </Typography>
              <TagsInput
                value={tags}
                onChange={settags}
                name="Tags"
                placeHolder="tags"
              />
              <Typography variant="p">
                press <Keyboard /> Enter key to add new tag
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography color="text.secondary" variant="h6">
                Add Special Features *
              </Typography>
              <TagsInput
                value={features}
                onChange={setFeatures}
                name="Features"
                placeHolder="features"
              />
              <Typography variant="p">
                press <Keyboard /> Enter key to add new feature
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "",
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <input
                accept="image/*" // Specify accepted file types if needed, e.g., "image/*,.pdf,.doc"
                id="file-upload"
                required
                type="file"
                name="images"
                onChange={handleFileUpload}
                style={{ position: "absolute", display: "none" }}
                multiple // Allow multiple file selection
              />
              <label htmlFor="file-upload">
                <Button variant="contained" color="success" component="span">
                  <Typography variant="p">Upload Images *</Typography>
                </Button>
              </label>
            </Box>
            <Button
              variant="contained"
              onClick={handleSubmit}
              color="secondary"
            >
              Post Add
            </Button>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Adform;
