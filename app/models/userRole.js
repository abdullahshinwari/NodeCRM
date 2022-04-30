const mongoose = require('mongoose');
const { Schema } = require('../../db');

const userRolesSchema = new mongoose.Schema({
        role: { type: String, required: true},
        role_short: { type: String, required: true, unique: true},
        users: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    { collection: 'user_roles'}
)

const user_role = mongoose.model('UserRoles', userSchema);

module.exports = user_role