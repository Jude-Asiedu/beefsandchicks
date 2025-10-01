const jwt =require('jsonwebtoken')
const bcrypt =require('bcryptjs')
const model =require('../models')
const Validator = require ('fastest-validator');

function index(req, res) {
    const users = ['John', 'List', 'James', 'Fuhad', 'Rem']
    res.send(users);

}
function allUsers(req, res) {
    model.User.findAll().then(result => {
        res.status(201).json({
            responseMessage: "Operation Successful",
            responseCode: 200,
            data: result
        })
    }).catch(error => {
        res.status(404).json({
            message: "No User Found ",
            responseCode: 404,
            data: error
        })
    })
}


function findUser(req, res) {
    const userId = req.params.id;
    model.User.findByPk(userId).then(result => {
        if (result) {
            res.status(201).json({
                responseMessage: "Operation Successful",
                responseCode: 200,
                data: result
            })
        } else {
            res.status(404).json({
                responseMessage: "User not Found",
                responseCode: 404,
                data: result
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "Internal server error  ",
            responseCode: 500,
            data: error
        })
    })
}

function signUp(req, res) {
    model.User.findOne({ where: { email: req.body.email }}).then(results => {
        if (results) {
            res.status(409).json({
                message: "User already exist!"
            })
        } else {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(req.body.password, salt, function (err, hash) {
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    }

                    model.User.create(user).then(result => {
                        res.status(201).json({
                            message: "User Created succesfully",
                            data: user
                        })
                    }).catch((error) => {
                        res.status(500).json({
                            message: "Failed to create",
                            data: error
                        })
                    })
                })
            })

        }
    })
}

function login(req, res) {
    model.User.findOne({ where:{email: req.body.email}}).then(result => {
        if (result === null) {
            res.status(401).json({
                responseMessage: "Invalid Username or password",
                responseCode: 401,
            })
        } else {
            bcrypt.compare(req.body.password, result.password,function(err, user) {
                if (user) {
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, 'secret', function (err, token) {
                        res.status(200).json({
                            responseMessage: "Login Successfull",
                            responseCode: 200,
                            data: token
                        })
                    })
                } else {
                    res.status(400).json({
                        responseMessage: "Invalid credentials",
                        responseCode: 400,
                    })
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Internal server error  ",
            responseCode: 500,
            data: error
        })
    })

}

module.exports = {
    index:allUsers,
    find:findUser,
    signup:signUp,
    login:login
}