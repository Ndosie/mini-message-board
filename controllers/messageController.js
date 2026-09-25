const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages: messages });
}

function getNewMessage(req, res) {
  res.render("form");
}

async function postNewMessage(req, res) {
  const name = req.body.name;
  const message = req.body.message;
  await db.insertMessage(name, message);
  res.redirect("/");
}

async function getMessage(req, res) {
  const { id } = req.params;
  const message = await db.getMessage(id);
  res.render("messageDetails", { message: message });
}

module.exports = { getMessages, getNewMessage, postNewMessage, getMessage };
