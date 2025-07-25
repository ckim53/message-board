const { Router } = require('express');
const { displayIndex } = require('../controllers/indexController');
const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];
  
indexRouter.get('/', displayIndex);
module.exports = indexRouter;