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
            statusCode: 400
        })
    }
}

const allLeads = async(req, res) => {
    try {
        let data = await Leads.find();
        return res.send({
            status: "SUCCESS",
            message: "All Leads Data",
            data: { data },
            statusCode: 1000
        })
    } catch (error) {
        console.log(error);
        return res.send({
            status: "ERROR",
            message: "Something went wrong",
            statusCode: 400
        })
    }
}

const showLead = async(req, res) => {
    try {
        let data = await Leads.findById(req.params.id);
        return res.send({
            status: "SUCCESS",
            message: "Show Lead By Id",
            data: { data },
            statusCode: 1000
        })
    } catch (error) {
        console.log(error);
        return res.send({
            status: "ERROR",
            message: "Something went wrong",
            statusCode: 400
        })
    }
}

const updateLead = async(req, res) => {
    try {
        var lead = {
            ...req.body,
        }
        let data = await Leads.findByIdAndUpdate(req.params.id, {$set:lead}, {new: true});
        return res.send({
            status: "SUCCESS",
            message: "Lead Updated By Id",
            data: { data },
            statusCode: 1000
        })
    } catch (error) {
        console.log(error);
        return res.send({
            status: "ERROR",
            message: "Something went wrong",
            statusCode: 400
        })
    }
}

const deleteLead = async(req, res) => {
    try {
        let data = await Leads.findByIdAndRemove(req.params.id);
        return res.send({
            status: "SUCCESS",
            message: "Lead Deleted By Id",
            data: { data },
            statusCode: 1000
        })
    } catch (error) {
        console.log(error);
        return res.send({
            status: "ERROR",
            message: "Something went wrong",
            statusCode: 400
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
    allLeads,
    showLead,
    updateLead,
    deleteLead,
    test,
}
