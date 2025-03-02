import { Router } from 'express'
import { getCI } from '../controllers/user.controllers.js';

const router = Router();

router.get("/user/:ci", getCI)

export default router