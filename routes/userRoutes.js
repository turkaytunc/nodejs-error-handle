const express = require('express');
const router = express.Router();
require('dotenv').config();

const getUserById = require('../controllers/user-controller');

router.get('/:id', getUserById);

module.exports = router;
