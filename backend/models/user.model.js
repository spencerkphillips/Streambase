import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true},
    displayName: {type: String, required: true},
    avatar: String,
    email: {type: String, required: true},
    password: {type: String, required: true},
    role_id: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

 export default mongoose.model('Users', userSchema);