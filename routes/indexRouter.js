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

router.post('/new', (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect('/');
});

module.exports = router;