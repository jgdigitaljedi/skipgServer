const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
	secret: process.env.SKIPGSECRET,
	userProperty: 'payload'
});

// profile
router.use('/profile', auth, require('./profile.routes'));

// authentication
router.use('/user', require('./users.routes'));

// photos (user only routes)
router.use('/photos', auth, require('./photos.routes'));

// photos (routes without auth)
router.use('/photospublic', require('./photosPublic.routes'));

// admin
router.use('/admin', auth, require('./admin.routes'));

module.exports = router;
