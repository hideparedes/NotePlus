const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/keeperDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Succesfully connected to db");
  } catch (error) {
    console.error(error);
  }
};
