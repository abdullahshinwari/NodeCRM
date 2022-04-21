const express = require('express');
const { send } = require('express/lib/response');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

// return all employees
router.get('/', (req, res) => {
    Employee.find((err, docs) =>{
        if (!err) { res.send(docs);}
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

// return single employee by ID
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retriving Employee: ' + JSON.stringify(err, undefined, 2)); }
    });
});

// save employee in the database
router.post('/', (req, res) => {
    var employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    employee.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employees Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// update single employee by ID
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    
    var employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id, {$set:employee}, {new: true}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in update Employee: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete: ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;

const test = async(reqm, res) => {
    return res.send({
        status: "SUCCESS",
        message: "Employee testing !!!",
        statusCode: 1000
    })
}

module.exports = {
    test,
}