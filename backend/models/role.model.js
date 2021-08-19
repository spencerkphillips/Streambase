import mongoose from 'mongoose';

const roleSchema = mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true},
    description: {type: String}
});

export default mongoose.model('RoleModel', roleSchema);