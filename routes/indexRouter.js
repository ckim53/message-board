const { Router } = require('express');
const { displayIndex } = require('../controllers/indexController');
const router = Router();

const messages = [
];
  
router.get('/', (req, res) => {
    displayIndex(req, res, messages);
});

router.get('/new', (req, res) => {
    res.render('form');
});

router.get('/message', (req, res) => {
  const { user, text, date } = req.query;
  res.render('message', { user, text, date});
});

router.post('/new', (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect('/');
});


module.exports = router;