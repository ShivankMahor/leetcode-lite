import {Router} from 'express'
import * as controller from '../controller/controller.js'
import * as middleware from '../middleware/middleware.js';
const router = Router();

//. Get Routes
router.route('/user/:userName').get(middleware.auth,controller.getuser)
router.route('/getcomments').get(controller.getComments)
router.route('/gettags').get(controller.getTags)

//. Post Routes
router.route('/login').post(controller.verifyUser,controller.login)
router.route('/register').post(controller.register)
router.route('/verify').post(middleware.verifyToken)
router.route('/postcomment').post(middleware.auth,controller.postComment)

//. Delete Routes
router.route('/logout').delete(controller.logout)
export default router;