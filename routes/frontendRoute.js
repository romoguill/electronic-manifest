const express = require('express');

const { renderIndex } = require('../controllers/frontendController');

const router = express.Router();

router.get('/', renderIndex);

module.exports = router;
