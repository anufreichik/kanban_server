import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        index: true,
        unique: true,
        select:true
    },
    email: {
        type: String,
        require: true,
        select: true,
    },
    password:{
        type:String,
        require: true,
        select: false,
    },
    admin:{
        type:Boolean,
        require: false,
        default:false
    },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}

});
export default mongoose.model('User', userSchema);
