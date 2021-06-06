import express from "express"
import "./post/post.router"
import PostController from "../controllers/post.controller"
import PageController from "../controllers/page.controller"
import LoginController from "../controllers/auth/login.controller"
import RegisterController from "../controllers/auth/register.controller"
import ConfirmationController from "../controllers/auth/confirmation.controller"
import PasswordResetController from "../controllers/auth/passwordreset.controller"

const router = express.Router()

router.route("/auth/register")
    .get()
    .post()
    .put()
    .delete()

router.route("/auth/login")
    .get()
    .post()
    .put()
    .delete()

router.route("/auth/confirm")
    .get()
    .post()
    .put()
    .delete()

router.route("/auth/reset")
    .get()
    .post()
    .put()
    .delete()


    
router.route("/page")
    .get()
    .post()
    .put()
    .delete()