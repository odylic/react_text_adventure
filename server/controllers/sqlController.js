const db = require('../models/sqlModel');
const google_id = require('../../passport');

const sqlController = {};

sqlController.getGoogleId = async (req, res, next) => {
  try {
    const query = `SELECT * FROM google_user WHERE google_id = '${req.cookies.google_id}'`;
    res.locals.response = await db.query(query);
    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

sqlController.addTextState = async (req, res, next) => {
  const addTextState = `
  UPDATE google_user
  SET text_state = $1
  WHERE google_id = '${req.cookies.google_id}'
  `;
  const textState = [req.body.text_state];
  try {
    await db.query(addTextState, textState);
    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = sqlController;
