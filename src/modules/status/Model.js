import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const statusSchema = new Schema({

    description: {
        type: String,
        require: false,
    },
    status:{
        type:String,
        require: true,
    },
    statusOrder:{type:Number, default:0},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}

});
export default mongoose.model('Status', statusSchema);
