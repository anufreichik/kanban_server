import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        require: true,
        index: true,
        unique: false,
        select:true
    },
    description: {
        type: String,
        require: false,
        select: true,
    },
    status:{
        type:String,
    },
    priority:{
        type:Number,
        default:1
    },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}

});
export default mongoose.model('Task', taskSchema);
