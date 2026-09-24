const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const app = express();
const PORT = process.env.PORT || 3000;

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.use((req, res) => {
  res.status(404);
  res.render("error");
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Min Message Board App - follow http://localhost:${PORT}`);
});
