//index.js

//node_modules
//install express
//npm i express
//packge.json  package.logjson
//npm init
//npm init -y

// console.log("This is my first project")
// console.log("Hi")

const path = require('path');
const express = require("express");
const app = express();
const PORT = 4000;

// app.get('/',(req,res)=>{
//     res.send("Hello")
// }
// )

app.get("/", (req, res) => {
  res.send("This is my first project");
});

app.get("/login", (req, res) => {
  res.send("This is my login page");
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT, () => {
  console.log("Port is running");
});
