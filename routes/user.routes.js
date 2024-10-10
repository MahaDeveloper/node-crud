const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

//login
router.get('/register',userController.registerPage);

router.post('/post-register',userController.postRegister);

// Create a new user
router.post('/users', userController.createUser);

// Retrieve all users
router.get('/users', userController.getUsers);

// Update a user by ID
router.put('/users/:id', userController.updateUser);

// Delete a user by ID
router.delete('/users/:id', userController.deleteUser);



module.exports = router;
