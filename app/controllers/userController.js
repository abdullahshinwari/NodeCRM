const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async(req, res) => {
    try {
        bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
            if (err) {
                res.json({
                    error: err
                })
            }
        })


        return res.send({
            status: "SUCCESS",
            message: "User Registered Successfully !!!",
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

module.exports = {
    register
}