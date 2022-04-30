const mongoose = require('mongoose');
const { Schema } = require('../../db');

const userSchema = new mongoose.Schema({
        name: { type: String, required: true},
        username: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        role: {
            type: Schema.Types.ObjectId,
            ref: "UserRoles"
        }
    },
    { collection: 'users'}
)

const user = mongoose.model('User', userSchema);

module.exports = user
