// backend/routes/donorRoutes.js
const express = require('express');
const router = express.Router();
const { getAllDonors, addDonor } = require('../controllers/donorController');

router.get('/', getAllDonors);
router.post('/', addDonor);

module.exports = router;
