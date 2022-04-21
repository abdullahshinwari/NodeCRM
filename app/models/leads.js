const mongoose = require('mongoose')

const leadsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone_number: {type: Number, required: true},
    email: {type: String, lowercase: true},
    address: String,
    createdAt: {type: Date, default: () => Date.now(),},
    updatedAt: {type: Date, default: () => Date.now(),}
})

module.exports =  mongoose.model("Leads", leadsSchema)