const jwt =require('jsonwebtoken')
const bcrypt =require('bcryptjs')
const model =require('../models')
const Validator = require ('fastest-validator');

function index( req,res){
    const users = ['John','List','James','Fuhad','Rem']
    res.send(users);

}

function signUp(req,res){
    const user = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
    }

    model.User.create(user).then().catch((error)=>{
         res.status(500).json({
                message:"Failed to create",
                data:error
            })   
    })
}


module.exports = {
    index:index
}