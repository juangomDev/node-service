import { Router } from 'express'
import { getActive, getCI } from '../controllers/user.controllers.js';

const router = Router();

router.get("/user/:ci", getCI)
router.get("/", getActive)

export default router