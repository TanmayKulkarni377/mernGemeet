import mongoose from "mongoose";
import bcrypt from 'bcryptjs'


const shopuserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
},{
    timestamps: true,
})

const shopUser = mongoose.model('shopUser', shopuserSchema);

export default shopUser;