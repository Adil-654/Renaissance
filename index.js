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

const path = require('path');
const express = require("express");
const app = express();
const PORT = 8080;
const connectDB=require('./config/db')
app.use(express.json());
// json---- javascript object notation 
// app.get('/',(req,res)=>{
//     res.send("Hello")
// }
// )
connectDB()
app.get("/", (req, res) => {
  res.send("This is my first project");
});

app.get("/login", (req, res) => {
  res.send("This is my login page");
});


app.post('/abc',(req,res)=>{
  
  //front end data ko laao -- done
  //uske jesa db me check kro 
  //kya pehle se wo email id available hai ya nai
  //agar available hai to user already exists
  //check is mail se password match ho rha h ya nai 
  //agar ho rha hai to home page pr bhejo 
  //warna phir se login page pr bhej do


})

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
