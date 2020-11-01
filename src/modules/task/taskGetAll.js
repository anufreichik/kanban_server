import ToDoTask from './Model';

export default function taskGetAll(req,res){
    ToDoTask.find()
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('task get all error')
        })
}