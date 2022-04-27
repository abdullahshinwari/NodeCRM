const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        let data = await User.create({
            ...req.body,
            password: hashedPassword 
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

const login = (req, res) => {
    let username = req.body.username
    let password =req.body.password
    User.findOne({username:username})
    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if (err){
                    res.json({
                        error: err
                    })
                }
                if (result){
                    let token = jwt.sign({name: user.name}, 'hiddenPowerKey', {expiresIn: '1h'})
                    res.json({
                        message: 'Logged In Successfully!',
                        token
                    })
                }else{
                    res.json({
                        message: 'Password Does Not Match!'
                    })
                }
            })
        }else{
            res.json({
                message: 'No User Fount!'  
            })
        }
    })
}

module.exports = {
    register,
    login
}