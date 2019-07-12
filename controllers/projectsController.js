const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

const projectsController = {
  insertProject: async (req, res) => {
    try {
      const project = await Projects.insert({ 
        ...req.body, 
        completed: false 
      });

      res.status(201).json(project);
    } catch(error) {
      res.status(500).json({
        error: 'project could not be save at this time'
      });
    }
  },

  insertProjectAction: async (req, res) => {
    try {
      const action = await Actions.insert({ 
        ...req.body, 
        project_id: req.project.id, 
        completed: false 
      });

      res.status(201).json(action);
    } catch(error) {
      res.status(500).json({
        error: 'action could not be save at this time'
      });
    }
  },

  updateProject: async (req, res) => {
    try {
      await Projects.update(req.project.id, req.body);
      const project = await Projects.get(req.project.id);

      res.status(200).json(project);
    } catch(error) {
      res.status(500).json({
        error: 'project could not be modify at this time'
      });
    }
  },
};

module.exports = projectsController;
