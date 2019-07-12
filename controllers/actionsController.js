const Actions = require('../data/helpers/actionModel');

const actionsController = {
  updateAction: async (req, res) => {
    try {
      await Actions.update(req.action.id, req.body);
      const action = await Actions.get(req.action.id);

      res.status(200).json(action);
    } catch(error) {
      res.status(500).json({
        error: 'action could not be modify at this time'
      });
    }
  },

  getactions: async (req, res) => {
    try {
      if(req.action) {
        return res.status(200).json(req.action);
      }
      const actions = await Actions.get();

      res.status(200).json(actions);
    } catch(error) {
      res.status(500).json({
        error: 'actions could not be fetch at this time'
      });
    }
  },
}

module.exports = actionsController;