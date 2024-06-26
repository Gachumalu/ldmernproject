const cookieParser = require('cookie-parser');
const jwt =require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const authenticate = require("../middleware/authenticate");

router.use(cookieParser());


require('../db/conn');
const User = require('../model/userSchema');
// const { default: Contact } = require('../../client/src/componets/Contact');

// router.get('/',(req,res)=>{
//     res.send(`Hello world from the server router js`);
// });

router.post('/register', async (req,res) => {

    const {name,email,phone,work, password, cpassword }=req.body;

    if( !name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({error:"Plz filled the field properly"})
    }
    try {
      const userExist = await  User.findOne({email:email})
      if(userExist){
        return res.status(422).json({error:"Email already Exitst"});
    }else if(password !=cpassword){
        return res.status(422).json({error:"password are not matching"});
    }else{
        const user = new User({name,email,phone,work,password,cpassword});
 
        // hash password using pre method
    
    
        await user.save();
    
        res.status(201).json({massage:" user registered successfuly"});   

    }

   
    } catch (err) {
        console.log(err);
    }

   
   
});
router.post('/signin', async (req,res)=>{

    try {

        let token;

        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({error:"plz filled the data"})
        }
        const userLogin =await User.findOne({email:email});
        

        if(userLogin){
            const isMatch =await bcrypt.compare(password,userLogin.password);

           token = await userLogin.generateAuthToken();
        //    console.log(token);

           res.cookie("jwtoken",token,{
               expires:new Date(Date.now()+25892000000),
               httpOnly:true
           });
           

            if(!isMatch){
                return res.status(400).json({error:"plz filled the data"})

                // res.json({error:"user error"})
            }else{
                res.json({message:"user Signin Successfully"});
                
               
             
            }

        }else{
            // res.json({error:"user error"})
            return res.status(400).json({error:"plz filled the data"})
          

        }

       
        
        
    } catch (err) {
        console.log(err);
        
    }

});

// About us ka page

router.get('/about',authenticate,(req,res)=>{
  
    res.send(req.rootUser);
});

// contact page
router.get('/getdata',authenticate,(req,res)=>{

    res.send(req.rootUser);
});

// 2 Contact for message

router.post('/contact',authenticate,async(req,res) => {
    
    try {
         
        const {name, email,phone,message}=req.body;
        if(!name || !email || !phone || !message){
            console.log("error in contact form");
            return res.json({error:"plzz filled the contact form"});
        }
        const userContact = await User.findOne({_id: req.userID });
        if (userContact){
             const userMessage = await userContact.addMessage(name,email,phone,message);
             await userContact.save()
             res.status(200).json({massage:"message contact succssefully"})

        }

    } catch (error) {
        console.log(error)
        
    }
});


// LOGOUT Page

router.get('/logout',(req,res)=>{
    console.log("Hello my logout page")
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("user logout");

    
    res.send(req.rootUser);
});





module.exports = router;