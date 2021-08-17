import express from 'express';

import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/post.controller.js';

import Editor from '../middleware/editor.middleware.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/create', Editor, createPost);
router.patch('/update/:id', Editor, updatePost);
router.delete('/delete/:id', Editor, deletePost);

export default router;