const express = require("express");
const fileUpload = require('express-fileupload');
const fs = require('fs');

const app = express();

//Configuration

app.set("port", process.env.PORT || 5000);

//Middelares

app.use(express.json());
app.use(fileUpload());

app.post('/upload', async(req, res) =>{
  if(!req.files){
    res.status(400).send("No file uploaded");
  }
  try{
  console.log(req.files.sampleFile);
  const sampleFile = req.files.sampleFile; 
  const path = `${__dirname}/client/public/uploads/${sampleFile.name}`
 
  sampleFile.mv(path, (err) =>{
    if(err){
      res.status(500).send(err);
    }
    
    res.json({fileName: sampleFile.name.toLowerCase(), filePath: `/uploads/${sampleFile.name}`});    
  });
  }catch(err){
    console.log(err);
  }
});

//Server

app.listen(app.get("port"), () =>
  console.log(`Server running on port ${app.get("port")}`)
);
