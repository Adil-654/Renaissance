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
const user = require("./models/UserModel");

app.use(express.json());
// json---- javascript object notation
// app.get('/',(req,res)=>{
//     res.send("Hello")
// }
// )
connectDB();
app.get("/", (req, res) => {
  res.send("This is my first project");
});

app.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExist = await user.findOne({ email });
    if (!userExist) {
      user.create({
        name,
        password,
        email
      });
      res.send("User created successsufly");
    } else {
      res.send("User already exist");
    }
  } catch (err) {
    res.send(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const data = await user.findOne({ email });
  if (!data) {
    res.send("User not exist");
  }

  if (data.password == password) {
    res.send("User logged in successfully ");
  } else {
    res.send("Incorrect password ");
  }
});

app.listen(8080, () => {
  console.log(`Server is running ${process.env.PORT}`);
});
