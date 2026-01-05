//index.js

//node_modules
    //install express
    //npm i express
//packge.json  package.logjson
    //npm init 
    //npm init -y


    // console.log("This is my first project")
    // console.log("Hi")



const express=require('express')
const app=express()
const PORT=4000

// app.get('/',(req,res)=>{
//     res.send("Hello")
// }
// )
app.listen(PORT,()=>{
    console.log("Port is running")
})


