import mongoose from 'mongoose';

const roleSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export default mongoose.model('Roles', roleSchema);