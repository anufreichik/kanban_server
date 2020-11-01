import ToDoStatus from './Model';
export default function statusCreate(req, res) {
  const newStatus = new ToDoStatus({
    status: req.body.status,
    description: req.body.description,
  });

  newStatus
    .save()
    .then(() => {
      res.status(200).json('status created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('status not created: error!');
    })
    .finally(() => {
      console.log('log status creation call');
    });
}
