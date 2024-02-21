import Products from "../db/Models/Products.js";
import fs from "fs";
import Users from "../db/Models/User.js";

import express from "express";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";

import multer from "multer";
import path from "path";
// const fs = require('fs')
// const fs = require('fs');
const CLIENT_ID =
  "33074445588-3c3cihdacp80s3qukrommdubqsktnohi.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04Drnu7MWpSgVCgYIARAAGAQSNwF-L9IrbL54nVvfKL7HDz4kbvxMNZQfbr_X-PSbPG10zD0ztqCgr2aNn0GSQ_wub4mh0B6Q-pY";
// const { Readable } =  require('stream')

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

export const submitForm = async (req, res) => {
  try {
    // console.log(req.body)
    // const id = "656acec9b2448b094c9ca6e6";
    const images = req.body.images;
    let arr = [];

    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    const drive = google.drive({
      version: "v3",
      auth: oauth2Client,
    });

  
    async function uploadfile(folderPath, filename, arrr) {
      try {
        const response = await drive.files.create({
          requestBody: {
            name: `${filename}.jpg`,
            mimeType: "image/jpg",
          },
          media: {
            mimeType: "image/jpg",
            body: fs.createReadStream(folderPath),
          },
        });
        const fileId = response.data.id;

        // Set the file to be publicly accessible
        await drive.permissions.create({
          fileId: fileId,
          requestBody: {
            role: "reader",
            type: "anyone",
          },
        });

        arrr.push(response.data.id);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    const uppath = `..//server`;

    console.log("Add_Product.js logs");
    console.log("req.body : ", req.body);
    console.log("req.body.adData : ", req.body.adData);

    // Access the uploaded files using req.files
    const uploadedFiles = req.files.map((file) => file.path);

    console.log("Uploaded Files:", uploadedFiles);

    // Call the processing function and delete files sequentially
    for (const file of uploadedFiles) {
      try {
        // console.log(file)
        // console.log(file.filename)
        // cosole.log(file.filePath)
        const filename = path.basename(file);
        console.log(filename);

        // Processing function
        await uploadfile(path.join(uppath, file), filename, arr);

        // Delete the file
        const filePath = path.join(uppath, file);
        await fs.promises.unlink(filePath);
        console.log(`Deleted file: ${filePath}`);
      } catch (error) {
        console.error("Error processing or deleting file:", error);
        // Handle error if needed
      }
    }
    const p = JSON.parse(req.body.adData);
    const newProduct = await Products({
      ...p,
      img_id: arr,
      views:[p.id]
    });
    // const udata=await Users.find({email:req.body.email})
    newProduct
      .save()
      .then(() => {
        // res.status(200).render('index',{user :udata[0]});
        console.log("successful saved : ", newProduct);
      })
      .catch(() => {
        // res.render('index',{user : undefined});
        console.log("unsuccessful");
      });
  } catch (error) {
    console.error(`${error.message}!!`);
    //Not returning error but rendering the same page with no change
    // res.render('index',{user : undefined});
  }
};
