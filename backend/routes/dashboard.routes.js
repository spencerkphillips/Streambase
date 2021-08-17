import express from 'express';


import Editor from '../middleware/editor.middleware.js';
import Admin from '../middleware/admin.middleware.js';

const router = express.Router();

router.get('/', getDashboard)

export default router;