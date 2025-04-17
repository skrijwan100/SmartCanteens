const mongoose= require('mongoose')
const {Schema}=mongoose;

const user= new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true
    },
    profilepic:{
        type:String,
        default:'https://res.cloudinary.com/dcvejeszo/image/upload/v1744740224/user_profiles/v1wgolv2ppisivqdhm03.jpg'
    },
    password:{
        type:String,
        require:true
    }
    
},{ timestamps: true })

module.exports=mongoose.model('User',user);