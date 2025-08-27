const express = require("express");
const app =  express();
const port=  8080;

app.get("/" , (req,res) => {
  res.send("Hello World !")
  console.log("Hello world !")
});

app.listen(port , () => {
    console.log(`listening to port ${port}`)
})