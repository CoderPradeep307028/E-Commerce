const express = require('express')
const { register, login, getUser, logout, updateProfile } = require('../controllers/authController')
const verifyToken = require('../middlewares/verifyToken')
const authRouter = express.Router()


authRouter.post("/register",register)
authRouter.post("/login",login)
authRouter.get("/user",verifyToken,getUser)
authRouter.get("/logout",logout)
authRouter.put("/update-profile",verifyToken,updateProfile)

module.exports = authRouter