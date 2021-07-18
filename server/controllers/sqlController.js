const db = require('../models/sqlModel');

const sqlController = {};

sqlController.getGoogleId = async (req, res, next) => {
  try {
    const query = `SELECT * FROM google_user`;
    res.locals.response = await db.query(query);
    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

sqlController.addTextState = async (req, res, next) => {
  try {
    console.log('test');
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = sqlController;
