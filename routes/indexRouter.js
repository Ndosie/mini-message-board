const { Router } = require("express");

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Message Board", messages: messages }),
);
indexRouter.get("/new", (req, res) => {
  res.render("form");
});
indexRouter.post("/new", (req, res) => {
  const messageUser = req.body.name;
  const messageText = req.body.message;
  const id = messages.length + 1;
  messages.push({
    id: id,
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/messages/:id", (req, res) => {
  const { id } = req.params;
  const message = messages.find((message) => message.id === Number(id));
  res.render("messageDetails", { message: message });
});

module.exports = indexRouter;
