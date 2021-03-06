const mongoose = require('mongoose');
const User = mongoose.model('User');
const logger = require('../config/winston');

// patch user - suspend account for a while and/or modify user

/**
 * GET /admin/listusers
 * Returns a list of users
 * @param {*} req 
 * @param {*} res 
 */
module.exports.listUsers = function (req, res) {
	if (!req.payload.admin) {
		res
			.status(403)
			.json({ error: true, message: 'UNAUTHORIZED: Access denied! You must be an admin to get all users!' });
	} else {
		User.find({}, (err, users) => {
			if (err) {
				logger.logThis(err, req);
				res
					.status(500)
					.json({ error: err, message: 'ERROR: Something went wrong with fetching list of users.' });
			} else {
				try {
					const usersCleaned = users.map((item) => {
						return {
							_id: item._id,
							name: item.name,
							email: item.email,
							admin: item.admin
						};
					});
					res.status(200).json({ error: false, users: usersCleaned });
				} catch (e) {
					logger.logThis(e, req);
					res
						.status(500)
						.json({
							error: e,
							message: 'ERROR: Something went wrong with getting user and cleaning results.'
						});
				}
			}
		});
	}
};

/**
 * DELETE /admin/deleteuser
 * Deletes a user account
 * req.body._id
 * @param {*} req 
 * @param {*} res 
 */
module.exports.deleteUser = function (req, res) {
	// @TODO: needs to be written
	if (req.payload.admin) {
		User.findByIdAndRemove({ _id: req.body._id }, (err, result) => {
			if (err) {
				logger.logThis(err, req);
				res.status(500).json({ error: err, message: 'ERROR: Something went wrong with deleting the user.' });
			} else {
				res.status(200).json({ error: false, user: result });
			}
		});
	} else {
		logger.logThis('non-admin user trying to do admin things', req);
		res.status(403).json({ error: true, message: 'UNAUTHORIZED: Access Denied! You must be an admin to do this.' });
	}
};

/**
 * POST /admin/useractive
 * Changes user active status in DB
 * req.body._id, req.body.active
 * @param {*} req 
 * @param {*} res 
 */
module.exports.changeUserActive = function (req, res) {
	if (req.payload.admin) {
		User.findOneAndUpdate({ _id: req.body._id }, { $set: { active: req.body.active } }, { new: true }, (error, user) => {
			if (error) {
				logger.logThis(error, req);
				res.status(500).json({ error, message: 'ERROR: Problem updating user active property.' });
			} else {
				res.status(200).json({ error: false, user });
			}
		});
	} else {
		logger.logThis('non-admin user trying to do admin things', req);
		res.status(403).json({ error: true, message: 'UNAUTHORIZED: Access Denied! You must be an admin to do this.' });
	}
};
