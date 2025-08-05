const pool = require('./pool');

async function insertMessage(user, text) {
	const date = new Date();
	await pool.query(
		'INSERT INTO messages (username, text, date) VALUES ($1, $2, $3)',
		[user, text, date],
	);
}

async function getAllMessages() {
	const { rows } = await pool.query('SELECT * FROM messages');
	return rows;
}

async function deleteByUser(user) {
	await pool.query('DELETE FROM messages WHERE username=$1', [user]);
}

module.exports = {
	insertMessage,
	getAllMessages,
	deleteByUser,
};
