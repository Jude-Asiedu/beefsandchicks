const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller');
const postController = require('../controller/post.controller');
const healtController = require('../controller/health.controller')

//USERS
router.get('/users',userController.index);

// POST

router.get('/post',postController.index);
router.get('/post/:id',postController.singlePost);
router.post('/post',postController.create);
router.put('/post/:id',postController.update);



// Health
router.get("/health",healtController.health );

module.exports = router;