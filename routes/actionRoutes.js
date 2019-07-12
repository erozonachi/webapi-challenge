const express = require('express');
const validator = require('../helpers/validator');
const action = require('../controllers/actionsController');

const app = express.Router();

app.get('/', action.getActions);
app.get('/:id', validator.validateActionId, action.getActions);

app.put('/:id', validator.validateActionId, validator.validateAction, action.updateAction);
app.delete('/:id', validator.validateActionId, action.removeAction);

module.exports = app;
