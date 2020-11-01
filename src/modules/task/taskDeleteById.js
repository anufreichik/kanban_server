import ToDoTask from './Model';

export default function taskDeleteById(req, res) {
  const taskId = req.params.taskId;

  ToDoTask.deleteOne({ _id: taskId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User delete error');
    });
}
