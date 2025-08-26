const User = require('./userModel');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.render('index', { users, editUser: null });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.redirect('/crud');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: { id: req.params.id }
        });
        res.redirect('/crud');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/crud');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getEditUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        const users = await User.findAll();
        res.render('index', { users , editUser: user });
    } catch (error) {
        console.error('Error fetching user for edit:', error);
        res.status(500).send('Internal Server Error');
    }
}