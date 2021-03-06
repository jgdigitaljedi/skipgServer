const mongoose = require('mongoose');
const User = mongoose.model('User');
const logger = require('../config/winston');

function unarthorizedResponse(res) {
	res.status(401).json({
		error: true,
		message: 'UnauthorizedError: private profile'
	});
}

/**
 * GET /profile
 * Gets user profile
 * @param {*} req 
 * @param {*} res 
 */
module.exports.profileRead = function (req, res) {
	if (!req.payload._id) {
		unarthorizedResponse(res);
	} else {
		User.findById(req.payload._id).exec((err, user) => {
			if (err) {
				logger.logThis(err, req);
				res.status(500).json({ error: err, message: 'ERROR: Error fetching user profile.' });
			} else {
				res.status(200).json({ error: false, firstName: user.firstName, lastName: user.lastName, joinDate: user.joinDate, lastUpdated: user.lastUpdated, email: user.email, admin: user.admin });
			}
		});
	}
};

/**
 * PATCH /profile
 * Edits user profile
 * req.body.name?, req.body.email?
 * @param {*} req 
 * @param {*} res 
 */
module.exports.profileUpdate = function (req, res) {
	// res.status(200).json({ request: req.body, payload: req.payload });
	if (!req.payload._id) {
		unarthorizedResponse(res);
	} else {
		User.findOneAndUpdate(
			{ _id: req.payload._id },
			{ $set: req.body },
			{ runValidators: true, new: true },
			(err, result) => {
				if (err) {
					logger.logThis(err, req);
					res.status(500).json({ error: err, message: 'ERROR: Error updating user data.' });
				} else {
					result.profileUpdated();
					res.status(200).json({
						error: false,
						firstName: result.firstName,
						lastName: result.lastName,
						email: result.email,
						admin: result.admin,
						joinDate: result.joinDate,
						lastUpdated: result.lastUpdated
					});
				}
			}
		);
	}
};
