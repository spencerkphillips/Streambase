import express from "express"
import cors from "cors"
import streambaseRouter from "./api/router/streambase.router.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1", streambaseRouter)
app.use("*", (req, res) => res.status(404).json({ error: "API Results Not Found."}))

export default app