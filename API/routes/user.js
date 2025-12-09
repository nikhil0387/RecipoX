import express from 'express';
import {register,login,profile} from '../Controllers/user.js';
import { Authenticate } from '../middlewares/auth.js';

const router = express.Router();
//user register
router.post('/register', register);

//user login
router.post('/login',login)

// profile route
router.get('/user',Authenticate,profile)

export default router