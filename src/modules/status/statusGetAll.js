import TaskStatus from './Model';

export default function statusGetAll(req,res){
    TaskStatus.find()
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('status get all error')
        })
}