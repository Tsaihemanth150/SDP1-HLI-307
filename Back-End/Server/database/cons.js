const mongoose = require('mongoose');

const DB = process.env.DATABASE;
const port = process.env.PORT;

mongoose.connect(DB,{
    
}).then(()=>{
      console.log('connection succefull');

}).catch((err)=>console.log('not connecterd'));
