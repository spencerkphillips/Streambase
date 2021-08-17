import express from 'express';

import { register, login, validate, reset, profile, update } from '../controllers/user.controller.js';

import Auth from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/profile/:id', Auth, profile);
router.post('/register', register);
router.post('/login', login);
router.patch('/update/:id', Auth, update);
router.post('/validate', validate);
router.post('/reset', reset);

export default router;