// validators/user.validator.js
module.exports ={
    createUser:{
        name:{type: "string", optional: false, max: 50},
        password:{type: "string", optional: false, max: 100},
        email:{type: "email", optional: false, max: 100}
    },
    login:{
        password:{type: "string", optional: false, max: 100},
        email:{type: "email", optional: false, max: 100}
    }
}