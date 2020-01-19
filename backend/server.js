const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json())

app.use("/api/users", require("./routes/users"));


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});