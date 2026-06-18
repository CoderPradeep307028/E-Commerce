const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async(req,res) =>{
    try{
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required."
            })
        }
        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({
                success:false,
                message:"Email already exist."
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = new User({
            name,
            email,
            password:hashedPassword
        })

        await newUser.save()

        res.status(201).json({
            success:true,
            message:"Account Created."
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const login = async(req,res) =>{
    try{

        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required."
            })
        }
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found."
            })
        }

        const comparePassword = await bcrypt.compare(password,user.password)

        if(!comparePassword){
            return res.status(400).json({
                success:false,
                message:"Wrong email or password."
            })
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.cookie('token',token,{
            httpOnly:true,
            secure:true,
            sameSite:'none',
            expires:new Date(Date.now()+3600000)
        })
       
        res.status(200).json({
            success:true,
            message:"Login Successfull."
        })


    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const logout = async(req,res) =>{
    try{
        res.clearCookie('token',{
            httpOnly:true,
            secure:true,
            sameSite:'none',
            expires:new Date(Date.now())
        })

        res.status(200).json({
            success:true,
            message:"Logout Successfull."
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const getUser = async(req,res) =>{
    try{
        const userId = req.id;

        const user = await User.findById(userId).select("-password")

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found."
            })
        }

        res.status(200).json({
            success:true,
            user
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const updateProfile = async(req,res) =>{
    try{
        const userId = req.id;
        const {name, phone, address, city, state, zipCode} = req.body;

        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found."
            })
        }

        // Update fields if provided
        if(name) user.name = name;
        if(phone) user.phone = phone;
        if(address) user.address = address;
        if(city) user.city = city;
        if(state) user.state = state;
        if(zipCode) user.zipCode = zipCode;

        await user.save()

        const updatedUser = await User.findById(userId).select("-password")

        res.status(200).json({
            success:true,
            message:"Profile updated successfully.",
            user:updatedUser
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


module.exports = {
    register,
    login,
    logout,
    getUser,
    updateProfile
}