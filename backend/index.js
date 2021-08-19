import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import pageRoutes from './routes/page.routes.js';

const app = express();

app.use(express.json({ extended: true, limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/pages', pageRoutes);

const mongoURI = process.env.MONGO_URI;
const host = process.env.APP_HOST;
const port = process.env.APP_PORT || 5001;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server running on port: http://${host}:${port}`)))
    .catch((error) => console.error(`${error} did not connect`));

mongoose.set('useFindAndModify', false);