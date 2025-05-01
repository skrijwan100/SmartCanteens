const mongoose= require('mongoose')
const {Schema}=mongoose;
const user= new Schema({
    foodname:{
        type:String,
        require:true,
    },
    foodpic:{
        type:String,
    },
    fooddisc:{
        type:String,
        require:true,
    },
    foodstock:{
        type:Number,
        require:true
    },
    
},{ timestamps: true })
