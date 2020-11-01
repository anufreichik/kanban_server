import { Router } from 'express';
import userCreate from "../user/userCreate";
import userDeleteById from "../user/userDeleteById";
import userGetAll from "../user/userGetAll"
import userUpdateById from "../user/userUpdateById";

const router = Router();
router.get('/', userGetAll);//POST localhost:5000/user
router.post('/', userCreate);//POST localhost:5000/user
router.delete('/:userId', userDeleteById);//DELETE localhost:5000/user
router.patch('/:userId', userUpdateById);//DELETE localhost:5000/user
export default router;