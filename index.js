//index.js

//node_modules
//install express
//npm i express
//packge.json  package.logjson
//npm init
//npm init -y

// CRUD------> Create(post ) , Read(get) , Update(put) , Delete(delete)

// console.log("This is my first project")
// console.log("Hi")
require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const connectDB = require("./config/db");

app.use(express.json());
// json---- javascript object notation
// app.get('/',(req,res)=>{
//     res.send("Hello")
// }
// )
// connectDB();
app.get("/", (req, res) => {
  res.send("This is my first project");
});

app.get("/login", (req, res) => {
  console.log("hello");

  res.send("This is my login page");
});

app.post("/register", (req, res) => {
  const { email, password, name } = req.body;
  
});

app.listen(8080, () => {
  console.log(`Server is running ${process.env.PORT}`);
});
