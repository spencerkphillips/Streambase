import app from "./server"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.