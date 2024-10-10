const db = require('../models');
const path = require('path');

//regitser page
exports.registerPage = async(req,res) =>{
    res.sendFile(path.resolve('register.html'));
}

//post register
exports.postRegister = async(req,res) => {
    try {
        const { name, email, age } = req.body;
        const user = await db.User.create({ name, email, age });
        res.status(200).redirect('/api/register');
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
}

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = await db.User.create({ name, email, age });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};

// Retrieve all users
exports.getUsers = async (req, res) => {
    try {
        const users = await db.User.findAll(); 
        res.render('user_list', { users }); 
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;
        const user = await db.User.findByPk(id);

        if (user) {
            await user.update({ name, email, age });
            res.status(200).json({ message: 'User updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err.message });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await db.User.findByPk(id);

        if (user) {
            await user.destroy();
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
};


