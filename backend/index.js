import app from "./server"
import mongodb from "mongodb"
import dotenv from "dotenv"

import UserMigration from "./database/migrations/user.migration"
import PostMigration from "./database/migrations/post.migration"
import PageMigration from "./database/migrations/page.migration"

dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.APP_PORT || 5001

MongoClient.connect(
    process.env.MONGO_URI,
    {
        poolSize: 50,
        wtimeout: 250,
        useNewUrlParser: true
    }
).catch (err => {
    console.error(err.stack)
    process.exit(1)
}).then(async clint => {
    app.listen(port, () => {
        console.log(`Listening on ${port}`)
    })
})