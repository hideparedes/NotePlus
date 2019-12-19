const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute)

mongoose.connect("mongodb://localhost27017/keeperDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});