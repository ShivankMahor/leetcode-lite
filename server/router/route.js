import {Router} from 'express'
import * as controller from '../controller/controller.js'
const router = Router();

router.route('/login').post(controller.verifyUser,controller.login)
router.route('/register').post(controller.register)
router.route('/user/:userName').get(controller.getuser)

export default router;