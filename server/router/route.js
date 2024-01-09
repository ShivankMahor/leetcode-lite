import {Router} from 'express'
import * as controller from '../controller/controller.js'
import { verifyToken } from '../middleware/middleware.js';
const router = Router();

router.route('/login').post(controller.verifyUser,controller.login)
router.route('/register').post(controller.register)
router.route('/logout').delete(controller.logout)
router.route('/user/:userName').get(controller.auth,controller.getuser)
router.route('/verify').post(verifyToken)
export default router;