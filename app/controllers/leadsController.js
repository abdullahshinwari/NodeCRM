const res = require('express/lib/response');
const Leads = require('../models/leads')

const addLead = async(req, res) => {
    try {
        let data = await Leads.create({
            ...req.body,
        })
        return res.send({
            status: "SUCCESS",
            message: "Lead Added",
            data: { data },
            statusCode: 1000
        })
    } catch (error) {
        console.log(error);
        return res.send({
            status: "ERROR",
            message: "Something went wrong",
            statusCode: 401
        })
    }
}

const test = async(req, res) => {
    return res.send({
        status: "SUCCESS",
        message: "HELLO WORLD !!!",
        statusCode: 1000
    })
}

module.exports = {
    addLead,
    test,
}