const Projects = require('./projectModel');
const Actions = require('./actionModel');

const validator = {
  ValidateProjectId: async (req, res, next) => {
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

  ValidateActionId: async (req, res, next) => {
    try {
      const { id } = req.params;
      if(id) {
        const action = await Actions.get(id);
  
        if(action && action.name) {
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
}

module.exports = validator;
