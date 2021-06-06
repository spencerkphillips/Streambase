import PostMigration from "../../database/migrations/post.migration"

import truncate from "../../functions"

export default class PostController {
    static async apiGetPosts(req, res, next) {
        const postsPerPage = req.query.postsPerPage ? parseInt(req.query.postsPerPage, 10) : 20

        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if(req.query.title){
            filters.title = requ.query.title
        } else if(req.query.slug){
            filters.slug = requ.query.slug
        } else if(req.query.category){
            filters.category = requ.query.category
        } else if(req.query.author) {
            filters.author = requ.query.author
        }

        const { postsList, totalNumPosts } = await PostMigration.getPosts({
            filters,
            page,
            postsPerPage
        })

        let response = {
            posts: postsList,
            page: page,
            filters: filters,
            entries_per_page: postsPerPage,
            total_results: totalNumPosts
        }
        res.json(response)
    }

    static async apiGetPostsById(req, res, next) {
        try{
            let id = req.param.id || {}
            let post = await PostMigration.getPostById(id)

            if(!post) {
                res.status(404).json({ error: "No posts were found." })
                return
            }
            res.json(post)
        }catch (e) {
            console.error(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }

    static async apiGetPostCategories(req, res, next){
        try{
            let categories = await PostMigration.getPostCategories()
            res.json(categories)
        }catch (e) {
            console.error(`API, ${e}`)
            res.status(500).json(
                { error: e }
            )
        }
    }

    static async apiGetCategoryById(req, res, next) {
        try {
            let id = req.param.id || {}
            let category = await PostMigration.getPostCategoryById(id)

            if (!category) {
                res.status(404).json({
                    error: "No categories were found."
                })
                return
            }
            res.json(category)
        } catch (e) {
            console.error(`api, ${e}`)
            res.status(500).json({
                error: e
            })
        }
    }

    static async apiCreatePost(req, res, next) {
        try {
            const post = {
                _id: req.body.post_id,
                _title: req.body.post_title,
                _content: req.body.post_content,
                _excerpt: truncate(req.body.post_excpert, 40),
                _date: new Date(),
                _modified: new Date(),
                _status: req.body.post_status,
                _type: req.body.post_type,
                _mime_type: req.body.post_mime_type
            }
            
            const author = {
                _name: req.body.user_name,
                _id: req.body.user_id,
                _username: req.body.username
            }

            const PostResponse = await PostMigration.addPost(
                post,
                author
            )
            res.json({status: "success"})

        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiUpdatePost(req, res, next) {
        try{
            const post = {
                _id: req.body.post_id,
                _title: req.body.post_title,
                _title: req.body.post_title,
                _content: req.body.post_content,
                _excerpt: truncate(req.body.post_excpert, 40),
                _modified: new Date(),
                _status: req.body.post_status,
                _type: req.body.post_type,
                _mime_type: req.body.post_mime_type
            }

            const author = {
                _name: req.body.user_name,
                _id: req.body.user_id,
                _username: req.body.username
            }

            const postRespose = await PostMigration.updatePost(
                post,
                author
            )

            var {error} = PostResponse

            if (error) {
                res.status(400).json({error})
            }

            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeletePost(req, res, next) {
        try{
            const post = {
                _id: req.query.id
            }
            const author = {
                _id: body.user_id,
                _username: body.username
            }
            const postResponse = await PostMigration.deletePost(post,author)
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiCreateCategory(req, res, next) {
        try {
            const category = {
                _id: req.body.category_id,
                _title: req.body.category_title,
                _description: req.body.category_description,
                _date: new Date(),
                _modified: new Date(),
                _parent: req.body.category_parent
            }

            const author = {
                _name: req.body.user_name,
                _id: req.body.user_id,
                _username: req.body.username
            }

            const categoryResponse = await PostMigration.addPost(
                category,
                author
            )
            res.json({
                status: "success"
            })

        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async apiUpdateCategory(req, res, next) {
        try {
            const category = {
                _id: req.body.category_id,
                _title: req.body.category_title,
                _description: req.body.category_description,
                _modified: new Date(),
                _parent: req.body.category_parent
            }

            const author = {
                _name: req.body.user_name,
                _id: req.body.user_id,
                _username: req.body.username
            }

            const categoryRespose = await PostMigration.updatePost(
                category,
                author
            )

            var {
                error
            } = categoryResponse

            if (error) {
                res.status(400).json({
                    error
                })
            }

            res.json({
                status: "success"
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async apiDeleteCategory(req, res, next) {
        try {
            const category = {
                _id: req.query.id
            }
            const author = {
                _id: body.user_id,
                _username: body.username
            }
            const categoryResponse = await PostMigration.deletePost(category, author)
            res.json({
                status: "success"
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    
}