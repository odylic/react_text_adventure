const express = require('express');
const router = express.Router();
const sqlController = require('../controllers/sqlController');

router.get('/text', sqlController.getGoogleId, (req, res) => {
  res.status(200).json(res.locals.response.rows);
});

router.put(
  '/text',
  sqlController.addTextState,
  sqlController.addNarrationState,
  sqlController.addPlayerState,
  (req, res) => {
    res.status(200).json();
  }
);

module.exports = router;
