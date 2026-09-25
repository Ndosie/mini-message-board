const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(name, message) {
  await pool.query("INSERT INTO messages (name, text) VALUES ($1, $2)", [
    name,
    message,
  ]);
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
  return rows[0];
}

module.exports = { getAllMessages, insertMessage, getMessage };
