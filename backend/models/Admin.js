const mongoose= require('mongoose')
const {Schema}=mongoose;

const admin= new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    }
},{ timestamps: true })

module.exports=mongoose.model('Admin',admin);