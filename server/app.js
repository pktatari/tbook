require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_KEY, {})
  .then((result) => {
    app.listen(PORT, (err) => {
      if (err) console.log("Server crashed!");
      console.log("Server started at port %d", PORT);
    });
  })
  .catch((err) => {
    console.log("Could not connect to mongodb", err);
  });

app.use(express.json());
app.use(express.static(`${__dirname}/view/`));
app.use("/user", userRoutes);
app.use("/book", bookRoutes);

module.exports = app;
