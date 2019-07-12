const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

const validator = {
  validateProjectId: async (req, res, next) => {
    try {
      const { id } = req.params;
      if(id) {
        const project = await Projects.get(id);
  
        if(project && project.name) {
          req.project = project;
          next();
        } else {
          res.status(400).json({
            message: 'invalid project id'
          });
        }
        return;
      }
    } catch(error) {
      res.status(500).json({
        error: 'Request could not be completed at this time, try again'
      });
    }
  },

  validateActionId: async (req, res, next) => {
    try {
      const { id } = req.params;
      if(id) {
        const action = await Actions.get(id);
  
        if(action && action.project_id) {
          req.action = action;
          next();
        } else {
          res.status(400).json({
            message: 'invalid action id'
          });
        }
        return;
      }
    } catch(error) {
      res.status(500).json({
        error: 'Request could not be completed at this time, try again'
      });
    }
  },

  validateProject: (req, res, next) => {
    if(!req.body) {
      return res.status(400).json({
        message: 'missing project data'
      });
    }
    if(!req.body.name || req.body.name.trim() === '') {
      return res.status(400).json({
        message: 'missing required name field'
      });
    }
    if(!req.body.description || req.body.description.trim() === '') {
      return res.status(400).json({
        message: 'missing required description field'
      });
    }
    if(req.body.completed) {
      if(req.body.completed === true || req.body.completed === false) {
        return res.status(400).json({
          message: 'completed field can only have a value of boolean type'
        });
      }
    }
    next();
  },

  validateAction: (req, res, next) => {
    if(!req.body) {
      return res.status(400).json({
        message: 'missing action data'
      });
    }
    if(!req.body.notes || req.body.notes.trim() === '') {
      return res.status(400).json({
        message: 'missing required notes field'
      });
    }
    if(!req.body.description || req.body.description.trim() === '') {
      return res.status(400).json({
        message: 'missing required description field'
      });
    }
    if(req.body.completed) {
      if(req.body.completed === 'true' || req.body.completed === 'false') {
        return res.status(400).json({
          message: 'completed field can only have a value of boolean type'
        });
      }
    }
    next();
  },
}

module.exports = validator;
