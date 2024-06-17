const dotenv = require("dotenv");
// const mongoose =require('mongoose');
const express =require('express');
const app = express();

dotenv.config({path:'./config.env'})

require('./db/conn');

// const User =require('./model/userSchema');

app.use(express.json());

// we link to the router files to make our routh
app.use(require('./routre/auth'));

// 2nd step of heruko 
const PORT =process.env.PORT || 5000;


// app.get('/about',(req,res)=>{
//     res.send("Hello about world from the serves")
// });

// app.get('/contact',(req,res)=>{
//     res.send("Hello contact world from the serves")
// });

app.get('/signin',(req,res)=>{
    res.send("Hello login world from the serves")
});

app.get('/signup',(req,res)=>{
    res.send("Hello ragister world from the serves")
});


// 3: step heroku
if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}


app.listen(PORT,()=>{
    console.log(`server gachu is runnin at port no ${PORT}`);
});

// godsonmern