import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import  jwt  from "jsonwebtoken";
import jwtSecret from "../config/jwt.mjs";


const { Schema } = mongoose

const userSchema = new Schema ({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true,
        minLength : 6
    },
    tokens: {
        default: [],
        type: []
    }
})

userSchema.pre('save' , function (next) {
    const user =  this
    if (user.isModified('password')) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, salt);
    
        user.password = hash
    }

    next()
})

userSchema.methods.comparepassword = function (password) {
    const user = this
    return bcrypt.compareSync(password, user.password); 
}

userSchema.methods.genrateToken = function () {
    
    const { _id } = this
    
    const token = jwt.sign({ _id }, jwtSecret);
    return token
}

const Users = mongoose.model('userInfo' , userSchema)

export default Users