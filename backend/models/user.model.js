import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: {type: String},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true},
    displayName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role_id: {type: String}
});

 export default mongoose.model('UserModel', userSchema);