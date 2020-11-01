import ToDoTask from './Model';
export default function taskCreate(req, res){
    const newTask = new ToDoTask({
        name:req.body.name,
        description:req.body.description,
        status:req.body.status,
        priority:req.body.priority
    })

    newTask
        .save()
        .then(()=>
        {
            res.status(200).json('task created')
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('task not created: error!')
        })
        .finally(()=>{
            console.log('log task creation call')
        })
}