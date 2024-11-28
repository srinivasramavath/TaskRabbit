const bcrypt=require("bcryptjs");
const User=require("../models/user");
async function Login(req,res){
    try{
    const {username,password}=req.body();
    let user= await User.findOne({username});
    if(!user){
        return res.status(400).json({
            message:"invalid username",
            success:false
        })
    }
    const ismatch=bcrypt.compare(password,User.password);
    if(!ismatch){
        return res.status(400).json({
            message:"invalid password",
            success:false
        })
    }
}
catch(err){
    console.log(err)
    res.status(400).json({ success:false})
}
}
async function Register(req,res){
    try{
        const {username,email,password}=req.body();
        let user=await User.findOne({username});
        if(user){
            return res.status(400).json({ 
                msg: "user already exists",
                success: false,
            });
        }
        user=new User({
            username,
            email,
            password
        });
        await user.save();
    }
    catch(err){
        console.log(err)
    res.status(400).json({ success:false})
    }
}
module.exports={Login,Register};