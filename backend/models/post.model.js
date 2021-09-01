import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    slug: String,
    content: String,
    author: String,
    tags: [String],
    categories: [String],
    header: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('Posts', postSchema);