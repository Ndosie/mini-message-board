const { Router } = require("express");
const messageController = require("../controllers/messageController");

const indexRouter = Router();

indexRouter.get("/", messageController.getMessages);
indexRouter.get("/new", messageController.getNewMessage);
indexRouter.post("/new", messageController.postNewMessage);
indexRouter.get("/messages/:id", messageController.getMessage);

module.exports = indexRouter;
