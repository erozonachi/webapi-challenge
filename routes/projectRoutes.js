const express = require('express');
const validator = require('../helpers/validator');
const project = require('../controllers/projectsController');

const app = express.Router();

app.post('/', validator.validateProject, project.insertProject);
app.post('/:id/actions', validator.validateProjectId, validator.validateAction, project.insertProjectAction);

app.get('/', project.getProjects);
app.get('/:id', validator.validateProjectId, project.getProjects);
app.get('/:id/actions', validator.validateProjectId, project.getProjectActions);

app.put('/:id', validator.validateProjectId, validator.validateProject, project.updateProject);
app.delete('/:id', validator.validateProjectId, project.removeProject);

module.exports = app;
