require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path")

connectDB();

app.use(express.json({
  extended: false
}));

app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});