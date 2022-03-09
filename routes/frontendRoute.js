const express = require('express');

const {
  renderIndex,
  renderEditUser,
  renderEditProduct,
} = require('../controllers/frontendController');

const router = express.Router();

router.get('/', renderIndex);

router.get('/edituser', renderEditUser);

router.get('/editproduct', renderEditProduct);

module.exports = router;
