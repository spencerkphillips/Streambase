import express from 'express';

import { getPages, getPage, createPage, updatePage, deletePage } from '../controllers/page.controller.js';

import Editor from '../middleware/editor.middleware.js';

const router = express.Router();

router.get('/', getPages);
router.get('/:id', getPage);
router.post('/create', Editor, createPage);
router.post('/update/:id', Editor, updatePage);
router.post('/delete/:id', Editor, deletePage);

export default router;