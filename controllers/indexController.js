const db = require('../db/queries.js');

async function displayMessages(req, res) {
	const messages = await db.getAllMessages();
	res.render('index', { title: 'Mini Messageboard', messages: messages });
}

async function newMessageGet(req, res) {
	res.render('form');
}

async function newMessagePost(req, res) {
	const { messageUser, messageText } = req.body;
	await db.insertMessage(messageUser, messageText);
	res.redirect('/');
}

async function deleteByUser(req, res) {
	const { user } = req.query;
	await db.deleteByUser(user);
	res.redirect('/');
}

module.exports = {
	displayMessages,
	newMessageGet,
	newMessagePost,
	deleteByUser,
};
