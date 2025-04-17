import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const signup = async(req,res)=>{
    const { name ,email,password}= req.body;

    if (!name || !email || !password){
        return res.json({success:false , message:'Missing details'})
    }

    try{
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.json({success:false ,message:"User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user=new userModel({name,email,password:hashedPassword});
        await user.save();

        const token=jwt.sign({id:user._id}, )

    } catch(error){
        res.json({success:false,message:error.message})
    }
}