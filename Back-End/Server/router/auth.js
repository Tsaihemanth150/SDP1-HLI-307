const { Router } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate =require('../middleware/authenticate');

require('../database/cons');
const User = require("../model/schema");


router.get('/',(req,res) =>{
    res.send('hello world from node');    
});

router.post('/Sinup', async (req,res)=>{
      const {firstname,lastname,Email,password,cpass} = req.body;
    if(!firstname || !lastname || !Email || !password || !cpass){
        return res.status(422).json({error:"plese fill all details"});
    }
    try{

    const userExist = await User.findOne({Email:Email});
       
 
     
    if(userExist){
          return res.status(422).json({error:"Email allredy exist please try with different one !!"})
    }else if(password != cpass){
        return res.status(422).json({error:"Passwaord doesnot match !!!"})
    }
   
    const user = new User({firstname,lastname,Email,password,cpass});

   await user.save();
   res.status(201).json({Message:"Regestration is susseful"}); 
    
    }catch(err){
        console.log(err);
    }
  

 });

//login///////------///
router.post('/Login',async (req,res)=>{
try{ let token;
const {Email,password} = req.body;

if(!Email   ||  !password){
     return res.status(400).json({error:"Please fill all details"});
}

const userLogin = await User.findOne({ Email:Email });
//console.log(userLogin);
if(userLogin){
const isMatch = await bcrypt.compare(password ,userLogin.password);

 token = await userLogin.generateAuthToken();
console.log(token);
 
res.cookie("jwtoken",token,{
      expires:new Date(Date.now()+2592000000),
      httpOnly:true
});

if(!isMatch){
    res.status(400).json({message:"invalid deatails"});
}else {
    res.json({message:"Login done !!"});
}

}else{
    res.status(400).json({message:"invalid deatails"}); 
}



}
catch(err){
    console.log("error");
}

})




///services page uing middelware accesss
router.get('/About',authenticate,(req,res) =>{
    res.send('hello world from node');
    res.send(req.rootUser)    
});


module.exports = router;
