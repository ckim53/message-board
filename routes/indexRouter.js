const { Router } = require('express');
const { displayIndex } = require('../controllers/indexController');
const router = Router();

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
  
router.get('/', (req, res) => {
    displayIndex(req, res, messages);
});

router.get('/new', (req, res) => {
    res.render('form');
});

module.exports = router;