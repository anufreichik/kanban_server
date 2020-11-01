import { Router } from 'express';
import statusGetAll from "./statusGetAll";
import statusCreate from "./statusCreate";

const router = Router();

router.get('/', statusGetAll);//GET localhost:5000/status
router.post('/', statusCreate);//POST localhost:5000/status
export default router;