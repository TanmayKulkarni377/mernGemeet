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

shopuserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next();
    } 

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

shopuserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const shopUser = mongoose.model('shopUser', shopuserSchema);

export default shopUser;