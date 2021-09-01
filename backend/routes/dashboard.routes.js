import express from 'express';

import {
    users,
    create,
    update
} from '../controllers/user.controller.js';

import Auth from '../middleware/auth.middleware.js';
import Admin from '../middleware/admin.middleware.js';

const router = express.Router();

router.get('/users', Admin, users);
router.post('/user/create', Admin, create);
router.patch('/user/profile/:id/update', Auth, update);

export default router;