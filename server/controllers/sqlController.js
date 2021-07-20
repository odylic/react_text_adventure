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

sqlController.addNarrationState = async (req, res, next) => {
  const addNarrationState = `
  UPDATE google_user
  SET narration_state = $1
  WHERE google_id = '${req.cookies.google_id}'
  `;
  const narrationState = [req.body.narration_state];
  try {
    await db.query(addNarrationState, narrationState);
    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

sqlController.addPlayerState = async (req, res, next) => {
  const addPlayerState = `
  UPDATE google_user
  SET player_state = $1
  WHERE google_id = '${req.cookies.google_id}'
  `;
  const playerState = [req.body.player_state];
  try {
    await db.query(addPlayerState, playerState);
    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

sqlController.addInventoryState = async (req, res, next) => {
  const addInventoryState = `
  UPDATE google_user
  SET inventory_state = $1
  WHERE google_id = '${req.cookies.google_id}'
  `;
  const inventoryState = [req.body.inventory_state];
  try {
    await db.query(addInventoryState, inventoryState);
    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

sqlController.addViewState = async (req, res, next) => {
  const addViewState = `
  UPDATE google_user
  SET view_state = $1
  WHERE google_id = '${req.cookies.google_id}'
  `;
  const viewState = [req.body.view_state];
  try {
    await db.query(addViewState, viewState);
    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = sqlController;
