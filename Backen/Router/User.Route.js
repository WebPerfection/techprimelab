const express=require("express")
const { model } = require("mongoose")
const {UserModel}=require(".././Model/User.Model")

const userRoute=express.Router()


userRoute.post("/register",async(req,res)=>{
    const payload=req.body
    try{
       const user=new UserModel(payload)
       await user.save()
       res.send("success")
    }
    catch(err){
        res.send(err)
    }
})

userRoute.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const data=await UserModel.find({email})
        if(data.length>0 && data[0].password===password){
             res.send(data[0]._id)
        }
        else{
            res.send("Invalid User")
        }
    }
    catch(err){
     res.send(err)
    }
})

module.exports={
    userRoute
}