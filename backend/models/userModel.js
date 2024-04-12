import mongoose from "mongoose";
import bcrypt from 'bcryptjs'


const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type:String,
        required:true 
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    billing_phone:{
        type:Number,
        required:true 
    },
    password: {
        type: String,
        required: true,
    },
    address_state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true 
    },
    pincode: {
        type: Number,
        required: true 
    },
    billing_address: {
        type: String,
        required: true 
    },
    shipping_address: {
        type: String,
        required: true 
    }


}, {
    timestamps: true
}

);

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    } 

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema);

export default User;