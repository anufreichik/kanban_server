import taskRouter from '../task/taskRouter';
import statusRouter from '../status/statusRouter';
import userRouter from '../user/userRouter';

export default function routes(app) {
  app.use('/task', taskRouter);
  app.use('/status', statusRouter);
  app.use('/user', userRouter);
}
