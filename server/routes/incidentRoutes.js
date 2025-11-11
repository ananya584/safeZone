const express = require('express');
const router = express.Router();
const { getIncident, createIncident } = require('../controllers/incidentController');

router.get('/', getIncident);
router.post('/', createIncident);

module.exports = router;