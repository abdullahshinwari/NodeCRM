const UserRole = require('../models/userRole')


const addUserRole = async(req, res) => {
    try {
        let data = await UserRole.create({
            ...req.body,
        })
        return res.send({
            status: "SUCCESS",
            message: "User Role Addedd Successfully !!!",
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

const allUserRoles = async(req, res) => {
    try {
        let data = await UserRole.find();
        return res.send({
            status: "SUCCESS",
            message: "All User Roles Data",
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
    addUserRole,
    allUserRoles,
}