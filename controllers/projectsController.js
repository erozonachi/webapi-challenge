const Projects = require('../data/helpers/projectModel');

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
};

module.exports = projectsController;
