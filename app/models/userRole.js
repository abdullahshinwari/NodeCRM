const mongoose = require('mongoose');
const { Schema } = require('../../db');

const userRoleSchema = new mongoose.Schema({
        role: { type: String, required: true},
        role_short: { type: String, required: true, unique: true},
        users: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    { collection: 'user_roles'}
);

module.exports = mongoose.model('UserRole', userRoleSchema)
