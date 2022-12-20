const mongoose = require('mongoose');

const { Schema } = mongoose;

  const VisitorSchema = new Schema({
    host:{
            type:String,
            unique:true
    },
      
    visitors:{type: Number ,
        default:0
   },
  
   createdAt:{
       type:Date,
       default:Date.now
   }
  },{timestamps:true});
  const Visitor=mongoose.model('visitor',VisitorSchema);
  
  module.exports=Visitor;
