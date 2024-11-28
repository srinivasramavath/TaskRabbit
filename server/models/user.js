const express= require('express')
const mongoose=require('mongoose')
const bcrypt=require("bcryptjs")
 const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },
  password:{
    type:String,
    required:true,
  }
    }
 );
 userschema.pre("save",async function(next){
    const salt=bcrypt.genSalt(10);
    const hashpassword=await bcrypt.hash(this.password,salt);
    next();
 });
 module.exports=mongoose.model("user",userschema);

