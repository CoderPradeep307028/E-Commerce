const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    },
    zipCode:{
        type:String,
        default:""
    },
    profileImage:{
        type:String,
        default:""
    },
    cart: [
        {
            id: String,
            title: String,
            description: String,
            image: String,
            price: Number,
            category: String,
            quantity: { type: Number, default: 1 }
        }
    ]
})

const User = mongoose.model('user',userSchema)

module.exports = User