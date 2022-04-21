const express = require('express');
const bodyparser = require('body-parser');

const { mongoos } = require('./db.js')
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.json());

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/employees', employeeController);
