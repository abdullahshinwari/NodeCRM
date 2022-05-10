const express = require('express');
const bodyparser = require('body-parser');

const { mongoos } = require('./db.js')
// var employeeController = require('./app/controllers/employeeController');

var app = express();
app.use(bodyparser.json());

app.listen(3000, () => console.log('Server started at port : 3000'));

// app.use('/employees', employeeController);
let employee_routes = require('./app/routes/employee');
let lead_routes = require('./app/routes/leads');
let user_routes = require('./app/routes/user');
let user_role_routes = require('./app/routes/userRole');

app.use(employee_routes);
app.use(lead_routes);
app.use(user_routes);
app.use(user_role_routes);

module.exports = app;
