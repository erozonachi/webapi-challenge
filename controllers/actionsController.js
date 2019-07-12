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
}

module.exports = actionsController;