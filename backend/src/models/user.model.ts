import {model,Schema} from "mongoose";

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String
    },
    password:{
        type:String,
    },
    isActive:{
        type:Boolean
    },
    profileImage:{
        type:String
    },
    loginMethod:[
        {
            type:String,
            enum:["google"]
        }
    ]
},{
    timestamps:true
})

export default model("users", userSchema);