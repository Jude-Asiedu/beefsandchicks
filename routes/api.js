const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller');
const postController = require('../controller/post.controller');
const healthController = require('../controller/health.controller')
const validate = require('../middleware/validator');
const postValidators = require('../validators/post.validators');
const userValidators = require('../validators/user.validators');

//USERS
router.get('/users',userController.index);
router.get('/user/:id',userController.find);
router.post('/user',validate(userValidators.createUser,'body'),userController.signup);

router.post('/login',validate(userValidators.login,'body'),userController.login);


// POST
router.get('/post',postController.index);
router.get('/post/:id',postController.singlePost);
// router.post('/post',validate(postValidators.createPost,'body'), postController.create);
router.post('/post', postController.create);
router.put('/post/:id',validate(postValidators.updatePost,'body'), postController.update);



// Health
router.get("/health",healthController.health );

module.exports = router;


