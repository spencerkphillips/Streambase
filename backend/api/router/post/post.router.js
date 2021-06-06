import express from "express"
import PostController from "../controllers/post.controller"

const router = express.Router() 

router.route("/posts")
    .get(PostController.apiGetPosts)

router.route("/post/id/:id")
    .get(PostController.apiGetPostsById)

router.route("/post")
    .post(PostController.apiCreatePost)
    .put(PostController.apiUpdateReview)
    .delete(PostController.apiDeletePost)

router.route("/post/categories")
    .get(PostController.apiGetPostCategories)

router.route("/post/category/id/:id")
    .get(PostController.apiGetCategoryById)

router.route("/post/category")
    .post(PostController.apiCreateCategory)
    .put(PostController.apiUpdateCategory)
    .delete(PostController.apiDeleteCategory)