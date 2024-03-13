import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

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
    }
})

userSchema.pre('save' , function (next) {
    const user =  this
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);

    user.password = hash
    next()
})

userSchema.methods.comparepassword = function (password) {
    const user = this
    return bcrypt.compareSync(password, user.password); // true
}

const Users = mongoose.model('userInfo' , userSchema)

export default Users