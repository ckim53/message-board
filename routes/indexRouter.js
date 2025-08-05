const { Router } = require('express');
const indexController = require('../controllers/indexController');
const router = Router();

router.get('/', indexController.displayMessages);
router.get('/new', indexController.newMessageGet);
router.post('/new', indexController.newMessagePost);
router.get('/message', (req, res) => {
	const { user, text, date } = req.query;
	res.render('message', { user, text, date });
});
router.get('/delete', indexController.deleteByUser);

module.exports = router;
