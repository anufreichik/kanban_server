import ToDoTask from './Model';
export default function taskUpdateById(req, res) {
    const taskId = req.params.taskId;

    ToDoTask.updateOne({ _id: taskId }, req.body)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Task update error');
        });
}
