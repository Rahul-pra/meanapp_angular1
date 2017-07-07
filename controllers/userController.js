var userModel = require('../models/userModel.js');

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

    /**
     * userController.list()
     */
    list: function (req, res) {
        userModel.find(function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            return res.json(users);
        });
    },

    /**
     * userController.show()
     */
    show: function (req, res) {
        console.log('show in node...');
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }
            return res.json(user);
        });
    },

    /**
     * userController.create()
     */
    create: function (req, res) {
        console.log('create data...');
        var user = new userModel({
			firstname : req.body.firstname,
			lastname : req.body.lastname,
			gender : req.body.gender,
			birthdate : req.body.birthdate,
			email : req.body.email,
            status : req.body.status,

        });
        console.log('set data in var user ...');
        user.save(function (err, user) {
            if (err) {
                console.log('find error.....');
                return res.status(500).json({
                    message: 'Error when creating user',
                    error: err
                });
            }
            console.log('get responce.....');
            return res.status(201).json(user);
        });
    },

    /**
     * userController.update()
     */
    update: function (req, res) {
        console.log('update method call.....');
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            user.firstname = req.body.firstname ? req.body.firstname : user.firstname;
			user.lastname = req.body.lastname ? req.body.lastname : user.lastname;
			user.gender = req.body.gender ? req.body.gender : user.gender;
			user.birthdate = req.body.birthdate ? req.body.birthdate : user.birthdate;
			user.email = req.body.email ? req.body.email : user.email;
            user.status = req.body.status ? req.body.status : user.status;
			
            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user.',
                        error: err
                    });
                }
                console.log('return updated data.....');
                return res.json(user);
            });
        });
    },

    /**
     * userController.remove()
     */
    remove: function (req, res) {
        console.log('delete call....');
        var id = req.params.id;
        userModel.findByIdAndRemove(id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user.',
                    error: err
                });
            }
            console.log('delete data....');
            return res.status(204).json();
        });
    }
};
