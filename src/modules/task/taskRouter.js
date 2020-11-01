import { Router } from 'express';
import taskGetAll from './taskGetAll';
import taskCreate from './taskCreate'
import taskDeleteById from "./taskDeleteById";
import taskUpdateById from "./taskUpdateById";
const router = Router();

router.get('/', taskGetAll);//GET localhost:5000/task
router.post('/', taskCreate);//POST localhost:5000/task
router.delete('/:taskId', taskDeleteById);//DELETE localhost:5000/task
router.patch('/:taskId', taskUpdateById);//PATCH localhost:5000/task
export default router;