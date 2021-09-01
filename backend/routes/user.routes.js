import express from 'express';

import { Register, Login, Validate, Reset, Profile } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/profile/:username', Profile);
router.post('/register', Register);
router.post('/login', Login);
router.post('/validate/:id', Validate);
router.post('/reset/:id', Reset);

export default router;